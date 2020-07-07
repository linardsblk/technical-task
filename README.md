## Foreword
While writing the code for this task, make sure you pay attention to the quality of the code. Make sure the code is easily readable and understandable. Here quality/readability is much more important than speed of execution of the task. Make sure to use descriptive variable names and use comments wherever appropriate.

Please also note, that the functionality of the app is more important than the design. You may create beautiful styling for the app, if you want to, which will be seen as a bonus, but it is not required. An app that meets all the functinoal requirements mentioned below, but looks like a plain HTML page will be fully sufficient.

Lastly, if you are experiencing any difficulties or are struggling with any part of the task and can not find a way to complete it, don't be afraid to contact us and ask for a hint or some help.


## Technical Task

* Multiple users/devices can register and log in. 
(Hint: this can be easily done by installing the Accounts package by running ```meteor add accounts-password``` from the terminal)
* Any logged in user can create an emergency by clicking a button. Once an emergency is created, all other logged in users should INSTANTLY (not using any refreshes or polling, but rather by creating a publication on the server and a subscription to that publication on the client) be able to see that there is an active emergency.
* The user who created the emergency can cancel the emergency by clicking a button. Once an emergency is cancelled, another one can be created by any other user.
* The users who didn't create the emergency should have a button "Respond to emergency". By clicking this button, all other users should INSTANTLY see, that user has responded to the emergency.

## Sample Images
These are some images of an app we made, that has similar functionality. Note that there are features in the pictures, which are not mentioned in the technical task. You only need to create the features mentioned in this file, not the ones visible in the images.
![Screen_Shot_2019-01-28_at_15.36.15](/uploads/6bcac2a6be3dc7036ad404fec07819a5/Screen_Shot_2019-01-28_at_15.36.15.png)
![Screen_Shot_2019-01-28_at_15.36.44](/uploads/c23ff57068831235ddd14bc313eb068d/Screen_Shot_2019-01-28_at_15.36.44.png)
![Screen_Shot_2019-01-28_at_15.37.03](/uploads/04a020b5eaef90a2dc654f705270f104/Screen_Shot_2019-01-28_at_15.37.03.png)
![Screen_Shot_2019-01-28_at_15.37.40](/uploads/282e73fecd2f06275e8cced5f967ab55/Screen_Shot_2019-01-28_at_15.37.40.png)
![Screen_Shot_2019-01-28_at_15.37.53](/uploads/e2f9531cb902bccf75084e36171bb603/Screen_Shot_2019-01-28_at_15.37.53.png)
![Screen_Shot_2019-01-28_at_15.38.05](/uploads/870cedcc3159fd187488085326cd8692/Screen_Shot_2019-01-28_at_15.38.05.png)