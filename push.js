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
const pushSubscription = { endpoint: "https://fcm.googleapis.com/fcm/send/cGbsPAS3poI:APA91bE8fZfc3eeibFBC0jmUcA7npZWWcFRylaaIYHdBeIuPLuzJ8wc1op7Zog2zOec449y5aosOO_CHl978smjMszPg3_ZcZhGLLNjeBLgxGmsF-Pyk3eO8wFFMqAOXOacgeYeN2FwT", keys: { auth: "iVtPISU274v7nC08-5n_JQ", p256dh: "BAr9Z-wk4EPFgdAovOlV3yCCVmTUXGdsfhO-npGKajs9-Xnj4C7f7R79-ahLlzPH8LHcJex-G_cN9EsnL8rFQwY" } };

push.sendNotification(pushSubscription, 'Your Push Payload Text');
