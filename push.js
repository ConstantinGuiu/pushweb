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
const pushSubscription = { endpoint: "https://wns2-db5p.notify.windows.com/w/?token=BQYAAACcDK4NTAckFY3doPe0s4OhmbBcimPj8VsC76xSfrKxqnRGidNjh8Lcf03si%2fYXqmynsKTF1W2fmeOy%2fVvXqZaoUsc3j4otcSdxucC%2bsA2VaNX1hRkagWrygbFiTvFuwFXFm0h%2bs%2f0i3hiSL9UD4kGu46KMA7v2WBwhwvh34Avfw6T2p0ozkTpbu9fARU8TafWBb24BTzKSeHR8k2ryHc2ZDFfbtjhZShLcSLasXf4pXrOO1AgkdV6yJYk1EypByKVx96iFdD6abOgRymVSXXV%2fm4JUwgpLlie7TIf1PVImD6UwncdIMvBAk7l%2fCGF598Jp3INchi7Y%2ffKgPp14slue", keys: { auth: "-wz0CAKxQT6Kig3zFTEB-Q", p256dh: "BM1LXwt9j1OvSYMiOLfhpXl6U5nQf32HUx_IirLQGiEygn811xolfPPYp1kJ01spAw2Kt3iRwNbwfotWGxVtCJ4" } };

push.sendNotification(pushSubscription, 'Your Push Payload Text');
