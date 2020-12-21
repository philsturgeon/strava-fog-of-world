
'use strict';

require('dotenv').config();

import { Strava } from 'strava'

var STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID;
var STRAVA_CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;

const strava = new Strava({
  	"refresh_token": "",
	"client_id": STRAVA_CLIENT_ID,
	"client_secret" : STRAVA_CLIENT_SECRET,

})

;(async () => {
  try {
    const activities = await strava.activities.getLoggedInAthleteActivities()
    console.log(activities)
  } catch (error) {
    console.log(error)
  }
})()

// TODO pagination
// TODO rate limiting
// https://www.npmjs.com/package/strava-v3
