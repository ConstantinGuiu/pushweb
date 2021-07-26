const push = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BD7RSrBfL3DH-kaCIPiDX-q4Pt7j9-bX1eOg7k1BmE64SXYFpSq7JUD5eDFC1XSdJUI3xgL3llOFdFYlvDZWNfg',
  privateKey: 'wAAl5DChlifY5pygC7iQNzdn5WoT_A6YaFJRDNapXfo'
};

push.setVapidDetails(
  'mailto:example@mail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = { endpoint: "https://fcm.googleapis.com/fcm/send/dyqtqFGY398:APA91bFwK6tdWFIkRMmrY0ZarNEeAuQUFkVOGBkbC_LeOyR-5fwGlcSdGwE6roXAqCVyVwkNkoy4eq7D62nGMJOTukK_0TOnClLYHWwtd1elT9NH7LP7B8Q9n_vv5FNfcuq9xPwWy5Vb", keys: { auth: "-hDvPk1Hr6P4bgMISk2SzQ", p256dh: "BAgzWhy2fZimD0KJhItZhtzZEQXzutqwYrsF4XD3GlcgzRFZajk0qCFylT-c6X27Nyp24nJWVFerLB5-HryQeVE" } };

push.sendNotification(pushSubscription, 'Your Push Payload Text');
