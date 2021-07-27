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
const pushSubscription = { endpoint: "https://fcm.googleapis.com/fcm/send/f0U9saGG0Is:APA91bEmCx5XLPg4F2-JRVQSDGnuouGDUwdYrdaswu2SKk16K_1cBTCR5V_598Jbm15xstKYGQELXGwJhudIQGeMrz7tg3qS5tI7hPPO-FRFpFc3QjL_P6GnzcoRRf5TbFoSDX4UJGQC", keys: { auth: "QnWOGL0pDh6iIea-UQnmDQ", p256dh: "BLJjuI6nCZaCiUdOoev0euLPOMWqgWNLCZ_zvHawSxjqik8c0Dd1ml-LnfyGTxtp_anWvvJkJYU_VO8euKqjXHA" } };

push.sendNotification(pushSubscription, 'Your Push Payload Text');
