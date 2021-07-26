const push = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BD7RSrBfL3DH-kaCIPiDX-q4Pt7j9-bX1eOg7k1BmE64SXYFpSq7JUD5eDFC1XSdJUI3xgL3llOFdFYlvDZWNfg',
  privateKey: 'wAAl5DChlifY5pygC7iQNzdn5WoT_A6YaFJRDNapXfo'
};

push.setVapidDetails(
  'mailto:guiu_costin_2009@yahoo.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = { endpoint: "https://fcm.googleapis.com/fcm/send/eYnjui28IMM:APA91bF3sIvYNDM-gVpW4spExtjLp3592MqzlukvFfyBA9YWmqa07xk4PanuL4sxi4YhFW5RRCuOmsjkr4DOBOqz26MeX7dJl4YfYS1_9vlfhN3uAZ4THGhqY0lA4Es7Jj-KF9Cmn2NL", keys: { auth: "FRfxTAAwqlUEezTk_JsBtQ", p256dh: "BA8b9wn26-4Jnk1wRHsl10FMWvbaF4aIi7oSqLXypNCimVvi6cJi4vdBQIKe5eP4bGWtWNDCabOG_oOu8cu7RDk" } };

push.sendNotification(pushSubscription, 'Your Push Payload Text');
