import push from 'web-push'

let vapIDKeys = {
    publicKey: 'BFagtQKIJv3RTemYCIivpH2u5w0iQweXErrxBcfpgElaDofdd7yQS90mU598OcIcdikzyZbdf7FZtUTDWMRfG4s',
    privateKey: '3s7YVeW5-OkYvpnfLUk5aSW8OitsRCBaEvcILZfIN2k'
}

push.setVapidDetails('mailto:guiu_costin_2009@yahoo.com', vapIDKeys.publicKey, vapIDKeys.privateKey)

let sub = {}

push.sendNotification(sub, 'test message')