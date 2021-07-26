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
const pushSubscription = { endpoint: "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABg_mfyEK-Cj8cAW5t84-QZ769JgJJCtyNscYnG68Z9vFjN8gvqSlEe1BJEDUVdJeByvzcNfJkI_dPxtchFO-MGvZaM4k1pY76bTlA1xitY3SZscx7gl-SWXyrRNzf4YKBNLLPai6mekmO4pmgrGb5-Tp0dHty8g6V0RQP_p09y9fCzLZA", keys: { auth: "pAe2RsQ1AIfATetqTjLhkw", p256dh: "BNTOasixwYg4Y2714zn8b3Oye45RoTRVOWNR0P1gFKSVdbP9hS7TqBdcm1ubtUt_Hxv6LYXBKk_0jWC_dMKBit0" } };

push.sendNotification(pushSubscription, 'Your Push Payload Text');
