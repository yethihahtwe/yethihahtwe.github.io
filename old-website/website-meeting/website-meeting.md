<p style="font-size:2em;"><strong>EHSSG Website Maintenance<br />Meeting Summary</strong></p>
<table style="width:75%;">
<tr>
<td><strong>Date and Time</strong></td>
<td>October 3, 2022/14:00</td>
</tr>
<tr>
<td><strong>Venue</strong></td>
<td>EHSSG Meeting Room</td>
</tr>
<tr>
<td><strong>Attendents</strong></td>
<td>Dr. Thet Oo<br/>Dr. Zaw Soe Htike<br />Dr. Kyaw Thu Swe<br />Dr. Ye Thi Ha Htwe<br />Dr. Ei Ei Khaing<br />Saw Myint Tun Kyi</td>
</tr>
</table>

***
<p style="font-size:1.5em;"><strong>Table of Content</strong>
</p>
[toc]
***
# 1.0 Pagination
## 1.1 Current Pagination
```EHSSG.ORG``` ၏ လက်ရှိ Main Menu နှင့် Pagination တို့မှာ အောက်ပါအတိုင်းဖြစ်ပါသည်။

1. Home
2. About Us
3. Our Members
4. Our Activities
5. Resources
6. News
7. Contribution Organizations
8. Contact Us
<img src="https://i.imgur.com/qKnPDNz.png" />

## 1.2 Proposed Pagination
```EHSSG.ORG``` ၏ Main Menu ကို အောက်ပါအစီအစဉ်အတိုင်း ပြင်ဆင်ရန် တိုင်ပင်ဆုံးဖြတ်ခဲ့ကြပါသည်။

1. Home
2. About Us
3. Our Members
4. Our Activities
5. Courses
6. Resources
7. Career
8. Contact Us
>Homepage တွင်မြင်ရသည့် School Floating Icon Button ကို Main Menu တွင် Courses ဟူ၍ menu item အသစ်တိုးရန်ဖြစ်ပါသည်။ Our Activities and Resources ကြားတွင် Courses ကိုထားပါမည်။
>Career label ဖြင့် menu item တစ်ခုထပ်တိုးပြီး Career page တစ်ခုအသစ်တိုး၍ ချိတ်ပေးပါရန်။

***
# 2.0 Logo
Website Header ရှိ EHSSG Logo CSS ကို Padding နှင့် Dropshadow ထည့်ပေးပါရန်။ margin ထည့်လိုက်လျှင် header height မပြောင်းဘဲ logo သေးသွားမည်စိုးသောကြောင့် header height များလျှင်များပါစေ၊ logo padding ထည့်မည်ဖြစ်ပါသည်။
|Current Logo|Current CSS|
|---|---|
|<img src="https://i.imgur.com/MHPkQol.png" style="zoom:50%;"/>|.theme-logo, .logo-default {<br />height: 100px !important;<br />width: auto !important;<br />}|
|<strong>Proposed Logo</strong>|<strong>Proposed CSS</strong>|
|<img src="https://i.imgur.com/W4BMBV6.png" style="zoom:50%;"/>|.theme-logo, .logo-default {<br />height: 100px !important;<br />width: auto !important;<br />margin: 20px;<br />box-shadow: 5px 5px 10px #d38d52 !important;<br />border-radius: 50px !important;<br />}|
***
# 3.0 Footer Layout
## 3.1 Current Footer Layout
```EHSSG.ORG``` ၏ လက်ရှိ Footer layot မှာ အောက်ပါအတိုင်းဖြစ်ပါသည်။
<img src="https://i.imgur.com/7J8t9Hd.png" style="zoom:50%;" />

## 3.2 Proposed Footer Layout
__ပြင်ဆင်ချက်များ__
|ပြင်ဆင်ချက်|အကြောင်းအရာ|
|---|---|
|ဖုန်းနံပါတ်ပြင်ရန်|+66 (0)979818454,+95 (0)9798485583|
|facebook icon link ချိတ်ရန်|<code>href="https://www.facebook.com/ethnichealthsystem"</code>|
|youtube icon အသစ်ထည့်ပြီး link ချိတ်ရန်|<code>href="https://www.youtube.com/channel/UCefv45mLBWD2SoEzjgAyNmw/featured"</code>|
|Email Address ထည့်ရန်|admin@ehssg.org, info@ehssg.org|
|Donate Us button ထည့်ရန်|EHSSG အတွက် Payment Gateway များစီစဉ်ပြီးမှ Donate Us button ထည့်ပါမည်|
|Copyright info ပြင်ဆင်ရန်|Copyright©2022 EHSSG. All Rights reserved. |
***

# 4.0 Homepage Layout
## 4.1 Current Homepage Layout
`EHSSG.ORG`Home Page ၏ လက်ရှိ Layout မှာ အောက်ပါအတိုင်းဖြစ်ပါသည်။
<img src="https://i.imgur.com/Bonbecl.png" style="zoom:50%;" />
## 4.2 Proposed Homepage Layout
ပြင်ဆင်လိုသည့် Layout မှာ အောက်ပါအတိုင်းဖြစ်ပါသည်။
<img src="https://i.imgur.com/HAtw1ZJ.png" style="zoom:50%;" />

__ပြင်ဆင်ချက်များ__
|ပြင်ဆင်ချက်|အကြောင်းအရာ|
|---|---|
|Slider ထည့်ရန်|Slider တွင် Sliding Animation မဟုတ်ဘဲ Fade-in transition ဖြင့်သာ image များ ပြောင်းပြပေးရန်ဖြစ်ပါသည်။<br />Slider ၏ background ကို image ထားပြီး slider ၏ lower third တွင် Post title နှင့် Read More Button တစ်ခု ထည့်ပေးရန်<br />Post title နှင့် Button နှစ်ခုစလုံးကို Post page နှင့် link ချိတ်ပေးရန်<br />ထို့အတွက် Admin Dashboard တွင် Slider အတွက် WYSIWYG Editor တစ်ခုထပ်ထည့်ပေးပါရန် |
|Article Category တစ်ခုထပ်ထည့်ရန်|ယခုလက်ရှိ Post category များမှာ News နှင့် Report တို့ဖြစ်ပါသည်။ Website တွင် ကျန်းမာရေးဆောင်းပါးများ တင်ရန်ရှိသည့်အတွက် Article Category တစ်ခု ထပ်တိုးပေးပါရန်။ Admin Dashboard တွင် Article Category အတွက် Post Editor တစ်ခု ထပ်တိုးပေးပါရန်<br />အသစ်ထပ်တိုးလိုက်သည့် Article Post များကို Slider အောက်တွင် Catalog တစ်ခုပြပေးမည်ဖြစ်ပြီး ယခင် News Catalog ကို Article Catalog အောက်တွင်ထားပေးရန်ဖြစ်ပါသည်|


***
# 5.0 About Us Page
## 5.1 Current Title
About Us Page ၏ လက်ရှိ Title မှာ အောက်ပါအတိုင်းဖြစ်ပါသည်။
<img src="https://i.imgur.com/2OzFFKc.png" style="zoom:50%;"/>

## 5.2 Proposed Title
ပြင်ဆင်လိုသည့် Title မှာ အောက်ပါအတိုင်းဖြစ်ပါသည်။ ၎င်းတစ်နေရာတည်းသာ About Us ကို Who We Are ဟု ပြောင်းပါမည်။
<img src="https://i.imgur.com/42Itezz.png" style="zoom:50%;"/>
__ပြင်ဆင်ချက်များ__

|ပြင်ဆင်ချက်|အကြောင်းအရာ|
|---|---|
|About Us --> Who We Are|ပုံတွင်ပြထားသည့် တစ်နေရာတည်းကိုသာ Who We Are အဖြစ်ပြောင်းပါမည်|
|Vision and Mission ကို Translate လုပ်ရန်|Translate လုပ်ပြီးသား Vision and Mission အဆင်သင့်ဖြစ်မှ update လုပ်ရန်ဖြစ်ပါသည်|
|Organization Chart update လုပ်ရန်|Organization Chart ပြင်ဆင်ချက်အတည်ဖြစ်လျှင် update လုပ်ရန်ဖြစ်ပါသည်|
***
# 6.0 Our Members Page
## 6.1 Current Menu
Our Members Menu Item ၏ Mouse Over State မှာ အောက်ပါအတိုင်းဖြစ်ပါသည်။
<img src="https://i.imgur.com/oT807FW.png" style="zoom:50%;" />


## 6.2 Proposed Layout
Our Members Menu Item ကို Mouse Over State တွင် Submenu Item များမထည့်တော့ပါ။<br />Our Members Page [https://ehssg.org/our-members](https://ehssg.org/our-members) ရှိနေသော်လည်း Navbar Menu ရှိ Our Members ကိုနှိပ်လျှင် Redirect မလုပ်ဘဲဖြစ်နေပါသည်။ Our Members ကိုနှိပ်လျှင် [https://ehssg.org/our-members](https://ehssg.org/our-members)ကို Redirect လုပ်ပေးပါရန်။

***
# 7.0 Our Activities Page
## 7.1 Current Title
Our Activities page ၏ လက်ရှိ Title မှာအောက်ပါအတိုင်းဖြစ်ပါသည်။
<img src="https://i.imgur.com/oDR1Mk1.png" style="zoom:50%;"/>

## 7.2 Proposed Title
ပြင်ဆင်လိုသည့် Title မှာ ပုံတွင်ပြထားသည့်အတိုင်း What We Do ပြင်ပေးရန်ဖြစ်ပါသည်။
<img src="https://i.imgur.com/eDN2Hwa.png" style="zoom:50%;"/>

***
# 8.0 Courses Page

`EHSSG.ORG` Homepage ရှိ School Floating Action Button ကို ဖျက်ပြီး ၎င်း၏ `href="ehssg.org/school/"` ကို Top Navmenu ရှိ Courses တွင် `target="_blank"` ဖြင့် ချိတ်ပေးပါရန်

***

# 9.0 Resources Page Layout

## 9.1 Current Layout
Resources page ၏ လက်ရှိ layout မှာအောက်ပါအတိုင်းဖြစ်ပါသည်။
<img src="https://i.imgur.com/ZA1RMr3.png" style="zoom:50%;"/>

## 9.2 Proposed Layout
Resources Catalog ကို အောက်ပါပုံစံအတိုင်း ပြင်ဆင်ရန်ဖြစ်ပါသည်။
<img src="https://i.imgur.com/1m1T6Bb.png" style="zoom:50%;"/>
__ပြင်ဆင်ချက်များ__

|ပြင်ဆင်ချက်|အကြောင်းအရာ|
|---|---|
|Container size ပြင်ရန်|Single Item ၏ Container/Wrapper ကို ယခု Square ratio မှ Potrait ratio သို့ပြောင်းရန်ဖြစ်ပါသည်။<br />ရှိပြီးသား resource များထဲမှ landscape ဖြစ်နေသည့် thumbnail များကို EHSSG staff များမှ Potrait thumbnail များဖြင့် ပြန်အစားထိုးပါမည်။<br />Resource title font size ကို အနေတော်ဖြစ်စေရန် သေးပါမည်။<br />Download နှင့် Read File button များကို ယခု ဘေးချင်းယှဉ်လျက်ပုံစံမှ အထက်အောက်ပုံစံသို့ပြောင်းပါမည်။ button နှစ်ခုကြားတွင် margin 10px ခန့်ထားပါမည်။|
|Search Field|Page ၏ အထက်ပိုင်း Breadcrump region အောက်တွင် Search Field တစ်ခုထည့်ပါမည်။ Resource ၏ title များကို Search field အတိုင်း filter ပြပေးရန်ဖြစ်ပါသည်။|
|Filter by Training Course|Search Field ၏ ညာဘက်တွင်ဖြစ်စေ၊ အောက်တွင်ဖြစ်စေ Filter Dropdown menu တစ်ခုထပ်ထည့်ပေးရန်ဖြစ်ပါသည်။<br />Dropdown Menu Option များကို အသေးစိတ်တိုင်ပင်ပြီး ထပ်မံဆုံးဖြတ်ရမည်၍ filter dropdown ထည့်သည့်ကိစ္စကို EHSSG staff များကိုင်တွယ်သည့်အချိန်မှသာ ပြုလုပ်နိုင်မည်ဖြစ်ပါသည်။<br />၎င်း Option တစ်ခုခုကို select လုပ်လိုက်သည့်အခါ page submit action သက်ရောက်မည်ဖြစ်ပြီး Option value အတိုင်း Resource data ကို filter လုပ်ကာပြသပေးရန်ဖြစ်ပါသည်။|
|Resource Category များ|ယခု Resource Category များမှာ Guidelines နှင့် Continuing Medical Education တို့ဖြစ်ပါသည်။<br />ပြောင်းလဲလိုသည့် Resource Category များမှာ<br />1. Publications<br />2. Articles<br />3. References<br />4. Continued Medical Education<br />တို့ဖြစ်ပါသည်<br />ထို့ကြောင့် admin dashboard တွင် Guidelines အတွက် Editor ကိုဖျက်ပြီး အသစ်ထပ်တိုးသည့် Category များအတွက် Editor ထပ်တိုးပေးရန်ဖြစ်ပါသည်။ တင်ပြီးသား Resources များကို EHSSG staff များက Category အသစ်များပြန်ပြောင်း၍ တင်ပေးမည်ဖြစ်ပါသည်။|
***
# 10.0 News Page
News page မထားတော့ဘဲ Navbar Menu တွင်လည်း News ကိုဖျက်ရန်ဖြစ်ပါသည်။
***
# 11.0 Contributing Organizations Page
Contributing Organization page ကိုဖျက်ပစ်ရန်။ Navbar Menu တွင်လည်း Contributing Organizations ကိုဖျက်ရန်ဖြစ်ပါသည်။ ၎င်း page ထဲမှ Content များကို About Us page ၏အောက်ဆုံးတွင် ပေါင်းထည့်ရန်။ Contributing Organization စာရင်းအသစ်ကို update လုပ်ရန်ထပ်မံပေးပို့ပါမည်။
***
# 12.0 Contact Us Page
## 12.1 Current Contact Info
Contact Us page ၏ လက်ရှိ information မှာ အောက်ပါအတိုင်းဖြစ်ပါသည်။
<img src="https://i.imgur.com/vlmVEWJ.png" style="zoom:25%"/>

## 12.2 Proposed Contact Info
ပြင်ဆင်လိုသည့် information မှာ ပုံပါအတိုင်းဖြစ်ပါသည်။ အောက်ဆုံးရှိ Web URL တွင် www.ehssg.org ဟု ပြင်ဆင်ရန်ဖြစ်ပါသည်။
<img src="https://i.imgur.com/OwQptAr.png" style="zoom:25%;"/>

# 13.0 Career Page
Career page သည် အလုပ်ခေါ်စာများ တင်ပေးထားမည့် စာမျက်နှာဖြစ်ပါသည်။ Resources page ၏ Layout အတိုင်းစီစဉ်ပေးရန်။ နောက်ဆုံးတင်သည့် post ကိုထိပ်ဆုံးတွင်ပြပေးပါရန်။ Career page တွင် Search field နှင့် Filter dropdown ထည့်ပေးရန်မလိုပါ။

# 14.0 EHSSG staff များ တာဝန်ယူချိန်ရောက်မှ လုပ်ဆောင်ရန်အချက်များ
* Career page တွင် အလုပ်လျှောက်နိုင်မည့် Form တစ်ခုဆောက်ရန်
* ၎င်း form မှ တက်လာသည့် entry များကို hr@ehssg.org သို့ SMTP ဖြင့် အလိုအလျောက်ပို့ပေးရန်
* Job Vacancy Post အောက်တွင် Share button တစ်ခုထည့်ပြီး နှိပ်လိုက်သည့်အခါ dialog menu ပေါ်လာ၍ Share Link | Share to facebook button နှစ်ခုထပ်ထည့်ပေးရန်
* Resource Page တွင် Medical subject အလိုက် filter လုပ်နိုင်မည့် dropdown ထည့်ရန်
* ထိုသို့ filter လုပ်နိုင်ရန်အတွက် New resource/Edit resource page တွင် subject သတ်မှတ်ပေးနိုင်မည့် field တစ်ခုထည့်ပေးရန်