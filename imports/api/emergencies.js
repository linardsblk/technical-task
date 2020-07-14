import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export default Emergencies = new Mongo.Collection('emergencies');

if (Meteor.isServer) {
    Meteor.publish('emergencies', function emergenciesPublication() {
        return Emergencies.find();
    });
}

Meteor.methods({
    'emergencies.insert'(text) {
        check(text, String);

        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Emergencies.insert({
            text,
            createdAt: new Date(),
            createdBy: this.userId,
            createdByUsername: Meteor.users.findOne(this.userId).username,
            status: "new",
        })
    },

    'emergencies.cancel'(emergencyId) {
        check(emergencyId, String);

        const emergency = Emergencies.findOne(emergencyId);
        if (this.userId !== emergency.createdBy) {
            throw new Meteor.Error('not-authorized');
        }

        Emergencies.update(emergencyId, {
            $set: {
                status: 'canceled',
                updatedBy: this.userId,
                updatedByUsername: Meteor.users.findOne(this.userId).username,
                updatedAt: new Date(),
            }
        });
    },

    'emergencies.respond'(emergencyId) {
        check(emergencyId, String);

        const emergency = Emergencies.findOne(emergencyId);
        if (this.userId === emergency.createdBy) {
            throw new Meteor.Error('cannot respond to your own emergency');
        }

        Emergencies.update(emergencyId, {
            $set: {
                status: 'responded',
                updatedBy: this.userId,
                updatedByUsername: Meteor.users.findOne(this.userId).username,
                updatedAt: new Date(),
            }
        });
    }
})