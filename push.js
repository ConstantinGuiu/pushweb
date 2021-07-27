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
const pushSubscription = { endpoint: "https://fcm.googleapis.com/fcm/send/frCk2crYxQo:APA91bHPtjvZvHTs2FicGW-wDer6hy26Tf5Nr94bpCdTq2KJEW0pAdCCEFpAuYadQAO3k7EvxWxlJp7yzOBaZ59n1qmj_4P_Ofg0q_wCR_OEjOPKcZCGbTfiqe9JvGm7CXl4xY116HZj", keys: { auth: "fIZwyWZAS_iJl8PqPtME6w", p256dh: "BOj_57SHYC4Q2msTa82y2zD34utf90LBFstdym3VJDnYzzlgrTbeFdVTdpXOubvMjknixv_igK9FSfKC74imnRs" } };

push.sendNotification(pushSubscription, 'Your Push Payload Text');
