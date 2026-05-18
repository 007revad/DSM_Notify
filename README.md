# <img src="images/icon.png" width="40"> DSM Notify

<a href="https://github.com/007revad/DSM_Notify/releases"><img src="https://img.shields.io/github/release/007revad/DSM_Notify.svg"></a>
[![Github Releases](https://img.shields.io/github/downloads/007revad/DSM_Notify/total.svg)](https://github.com/007revad/DSM_Notify/releases)
![Badge](https://hitscounter.dev/api/hit?url=https%3A%2F%2Fgithub.com%2F007revad%2FDSM_Notify&label=Visitors&icon=github&color=%23198754&message=&style=flat&tz=Australia%2FSydney)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/paypalme/007revad)
[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/007revad)
<!--- [![committers.top badge](https://user-badge.committers.top/australia/007revad.svg)](https://user-badge.committers.top/australia/007revad) --->

### Description

Synology package to allow my scheduled scripts to send notifications to DSM 7.

### How to install the package

There are 2 ways to install the package:

**Directly from Package Center**

1. Add [007revad Synology Package Source](https://github.com/007revad/Synology_package_source) to package Center.
2. Click on the Community section in Package Center and install the package.

**Or download the package and install it manually**
1. Download the latest version .spk file from https://github.com/007revad/DSM_Notify/releases and save it to your Synology.
2. In Package Center click on Manual Install.
3. Browse to where you downloaded the .spk file.
4. Select the .spk file and click Next.


### How to use with your own scripts

Your scripts will need to be run by, or scheduled to run as, a user in the administrators group or as root.

There are 2 titles the synodsmnotify command can use for the DSM 7 notification:
  - title_success (which will show "Script finished task")
  - title_error (which will show "Script aborted due to errors")

The body of the notification (msg) can be almost anything you want and can include variables.

```
synodsmnotify -c SYNO.SDS._ThirdParty.App.dsm_notify "@administrators" "dsm_notify:app0:title_success" "dsm_notify:app0:msg" "Script finished task"
synodsmnotify -c SYNO.SDS._ThirdParty.App.dsm_notify "@administrators" "dsm_notify:app0:title_error" "dsm_notify:app0:msg" "Script aborted due to errors"

script="Syno_HDD_dd"
synodsmnotify -c SYNO.SDS._ThirdParty.App.dsm_notify "@administrators" "dsm_notify:app0:title_success" "dsm_notify:app0:msg" "$script finished okay"
synodsmnotify -c SYNO.SDS._ThirdParty.App.dsm_notify "@administrators" "dsm_notify:app0:title_success" "dsm_notify:app0:msg" "$script on $(hostname) finished okay"

error="File missing"
synodsmnotify -c SYNO.SDS._ThirdParty.App.dsm_notify "@administrators" "dsm_notify:app0:title_error" "dsm_notify:app0:msg" "Script aborted due to an error: $error"
```

<p align="center"><img src="/images/msg_samples.png"></p>

### Screenshots

<!--- <p align="center">Description of image 1 goes here</p> --->
<p align="center"><img src="/images/installed.png"></p>

<br>

<!--- <p align="center">Description of image 1 goes here</p> --->
<p align="center"><img src="/images/window.png"></p>

<br>

<p align="center">Notification from dsm_update.sh script</p>
<p align="center"><img src="/images/notification.png"></p>
