create a SPA webapp

display a calender with 100 days starting with a predefined start date (eg. 15.10.2018)
highlight the current day. clicking on it the user can place in a popup a text stating why she was happy that day.
the text can be stored locally in the browser.

the days in the future cannot be clicked.

for each day in the past (or today) that has an entry please add a smiley below the day.
clicking on that day will show in a popup the text that was entered for that day.

extra features - can be done extra:
- save data on the server
- each day at 18:00 send a reminder email if no entry was done on that day
- real time update of entries between multiple browsers


npm install express body-parser mysql --save

CREATE TABLE IF NOT EXISTS `calendar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB ;

