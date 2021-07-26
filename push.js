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
const pushSubscription = { endpoint: "https://fcm.googleapis.com/fcm/send/f3sxaplSIW0:APA91bHAVpfCNtD28Jjk8YEthGAhXup7_gA-NywxyzuyAX4K1PL-LCwCCQWJik6KSyqq5JxcsAHfD7bqgEC9GWeCZCAb1Ac8wzCtfYIuxFG8ZB_B7ci1BKY_gpiHHhExMFGt4GlHHlH2", keys: { auth: "kt_udmaIVHRpa-g8ER0W8g", p256dh: "BB6-dzsDZhEj-Ctms5YCVfbIivzNCUIo7dQ26B1xNgTfpGGt8kGhCcSVXqgw15p-Zv8PyjmgOW4WiWtdCKETnlA" } };

push.sendNotification(pushSubscription, 'Your Push Payload Text');
