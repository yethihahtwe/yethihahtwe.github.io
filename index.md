[toc]

# Login ဝင်ခြင်း

* Chrome (သို့) Mozilla Firefox (သို့) Edge Browser ကိုဖွင့်ပါ
* https://kdhw-pharmacy.rowy.app/ သို့သွားပါ။
* Continue with Google ကိုနှိပ်ပါ
* အောက်ပါ Email ၊ Password တို့ဖြင့် Log in ဝင်ပါ

```
Email: kdhwfirebase
Password: kdhwfirebase12345
```

<img src="https://drive.google.com/uc?export=view&id=1d4yyIQ9aSg3GkD7mjwkV-NFx_MdwtQm5" alt="login" width="300px" />

<img src="https://drive.google.com/uc?export=view&amp;id=1Jr4NIvE-cZ_LLCCnWw0E3V0wfIqq1V3f" alt="google" width="300px"/>

# Table များ
Table နာမည်တွေနှင့် Table မှာ ဘာတွေပါသလဲဆိုတာ အောက်ပါဇယားမှာဖော်ပြထားပါတယ်။
|အမည်|ပါဝင်သည့်အချက်အလက်များ|
|---|---|
|All Balance|ဆေးခန်း/ဆေးစတိုအားလုံးတွင် လက်ရှိဆေးပစ္စည်းအရေအတွက်|
|Stock| ဆေးခန်း/ဆေးစတိုတွင် ဆေးပစ္စည်းအဝင်အထွက်မှတ်တမ်း|
|Profile| ဆေးခန်း/ဆေးစတိုဆိုင်ရာ အချက်အလက်များ|

|အမည်|ပါဝင်သည့်အချက်အလက်များ|
|---|---|
|Country|Application မှာပြပေးမယ့်နိုင်ငံစာရင်း|
|District|Application မှာပြပေးမယ့်ခရိုင်စာရင်း|
|Township|Application မှာပြပေးမယ့်မြို့နယ်စာရင်း|
|Clinic Warehouse|Application မှာပြပေးမယ့်ဆေးခန်း/စတိုစာရင်း|

 ## All Balance Table
 ဆေးခန်း/ဆေးစတိုအားလုံးတွင် လက်ရှိဆေးပစ္စည်းအရေအတွက် ဖြစ်ပါတယ်။ Register လုပ်ထားတဲ့ Account တွေအားလုံးရဲ့ အချက်အလက်တွေကို ဖော်ပြပေးတာကြောင့် အမှန်တကယ်သုံးနေတဲ့ account တွေအပြင် application ကို စမ်းသုံးထားတဲ့ account တွေရဲ့ data တွေပါ ဝင်နေမှာဖြစ်ပါတယ်။
 `Uid` ဆိုတာ Account တစ်ခုချင်းစီရဲ့ User ID နံပါတ်တွေဖြစ်ပါတယ်။ ဒီနံပါတ်တွေနဲ့ စစ်ထုတ်ပြီး သက်ဆိုင်ရာ ဆေးခန်း/ဆေးစတို တစ်ခုချင်းစီအတွက် table တည်ဆောက်ပုံကို နောက်မှာဆက်လက်ဖော်ပြထားပါတယ်။

 ## Stock Table
 ဆေးခန်း/ဆေးစတို အားလုံးမှာ ဆေးပစ္စည်းအဝင်အထွက်မှတ်တမ်းကို ဖော်ပြပေးပါတယ်။ Register လုပ်ထားတဲ့ Account တွေအားလုံးရဲ့ အချက်အလက်တွေကို ဖော်ပြပေးတာကြောင့် အမှန်တကယ်သုံးနေတဲ့ account တွေအပြင် application ကို စမ်းသုံးထားတဲ့ account တွေရဲ့ data တွေပါ ဝင်နေမှာဖြစ်ပါတယ်။
 `Uid` ဆိုတာ Account တစ်ခုချင်းစီရဲ့ User ID နံပါတ်တွေဖြစ်ပါတယ်။ ဒီနံပါတ်တွေနဲ့ စစ်ထုတ်ပြီး သက်ဆိုင်ရာ ဆေးခန်း/ဆေးစတို တစ်ခုချင်းစီအတွက် table တည်ဆောက်ပုံကို နောက်မှာဆက်လက်ဖော်ပြထားပါတယ်။

 ## Profile Table
 ဆေးခန်း/ဆေးစတိုဆိုင်ရာ အချက်အလက်တွေနှင့် အသုံးပြုသူရဲ့ အချက်အလက်တွေပါဝင်ပါတယ်။ Register လုပ်ထားတဲ့ account တွေအားလုံးရဲ့ အချက်အလက်တွေအကုန်ပါဝင်တာမို့လို့ အမှန်တကယ်သုံးနေတဲ့ account တွေအပြင် စမ်းသုံးထားတဲ့ account တွေလည်း ပါဝင်နေမှာဖြစ်ပါတယ်။
 တစ်ယောက်ချင်းစီအတွက် သီးသန့် `User ID`  ကို အသုံးပြုပြီး နောက်ပိုင်းမှာ table တွေ ရွေးခြယ်ဖန်တီးနိုင်မှာဖြစ်ပါတယ်။

 ## Country Table
 Country table မှာ ဆေးခန်း/ဆေးစတိုက ဖြည့်လိုက်တဲ့ data တွေမရှိပါဘူး။ ဒီ table မှာပါတဲ့ နိုင်ငံအမည်တွေဟာ account သစ်တစ်ခု register လုပ်တဲ့အချိန်မှာ ရွေးခြယ်ရမည့် နိုင်ငံစာရင်းဖြစ်ပါတယ်။ ဒီမှာ ပြင်ဆင်ရေးသားလိုက်တဲ့ နိုင်ငံစာရင်းအတိုင်း register လုပ်တဲ့သူက ရွေးခြယ်နိုင်ပါတယ်။

 ### Adding Country (နိုင်ငံထပ်တိုးခြင်း)
 * Country Table ကိုသွားပါ
<img src="https://drive.google.com/uc?export=view&id=1bYYj7mlobNksCxuxQ9xsmL4kGVpethdX" width="300px">
 * Add Row ကိုနှိပ်ပါ
 * အသစ်ပေါ်လာတဲ့ ဇယားကွက်မှာ Double Click နှိပ်ပါ
 * အသစ်ထည့်ချင်တဲ့ နိုင်ငံအမည်ကို ရိုက်ထည့်ပါ
 * ရိုက်ထည့်ပြီးတဲ့အခါ Enter နှိပ်ပါ။

 <img src="https://drive.google.com/uc?export=view&id=1qjor2faun_Sjjl7JFStqud2QkC3wmSFE" width="300px"/>

### Editing Country (နိုင်ငံပြင်ဆင်ခြင်း)
* ပြင်ချင်တဲ့နိုင်ငံကို double click နှိပ်ပါ
* Select လုပ်ပါ
* ပြင်ချင်တဲ့နာမည်ကို ရိုက်ထည့်ပါ
* Enter နှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=15dBuE_45JjN41kdbs6TT_WhCgKWMUUM6" width="300px"/>

### Deleting Country (နိုင်ငံအမည် ဖျက်သိမ်းခြင်း)
* ဖျက်ချင်တဲ့ နိုင်ငံအမည်ဘေးက Delete button ကိုနှိပ်ပါ
* Delete Row? ပေါ်လာလျှင် Delete ကိုနှိပ်ပါ
<div style="display:inline;">
<img src="https://drive.google.com/uc?export=view&id=1psW_fYhVIOmbOQFLUTK4eePaBKoJQh8m" width="300px"/>
<img src="https://drive.google.com/uc?export=view&id=1nho0x_ujeS2C2EfXNNCaczDbN7JhNc7e" width="300px"/>
</div>

 ## District Table
 District table မှာ ဆေးခန်း/ဆေးစတို data တွေမရှိပါဘူး။ ဒီ table မှာပါတဲ့ district အမည်တွေဟာ account register လုပ်တဲ့အခါ ရွေးထားတဲ့နိုင်ငံရဲ့ သက်ဆိုင်ရာ district တွေကို ဖော်ပြပေးမှာဖြစ်ပါတယ်။ ဒီမှာပြင်ဆင်ရေးသားလိုက်တဲ့ district စာရင်းအတိုင်း register လုပ်တဲ့သူက ရွေးခြယ်နိုင်မှာဖြစ်ပါတယ်။ District table မှာ `Country` နှင့် `District Name` ဆိုပြီး column နှစ်ခုရှိပါတယ်။ `Country` ဟာ မိခင်နိုင်ငံဖြစ်ပြီး `District Name` ဟာ သက်ဆိုင်ရာနိုင်ငံရဲ့ district တစ်ခုချင်းစီဖြစ်ပါတယ်။

 ### Sorting (အစဉ်လိုက်စီခြင်း)
 #### `Country` အစဉ်အတိုင်းစီခြင်း
 District table မှာ နိုင်ငံအလိုက် district တွေကို အစဉ်လိုက်ကြည့်လို့ရပါတယ်။
 * `Country` ဘေးက ●●● ကိုနှိပ်ပါ
 * `Sort: Ascending` ကိုနှိပ်ပါ

<div style="display:inline;">
  <img src="https://drive.google.com/uc?export=view&id=1Wy5HRBko666aCKqYOrlQN_wXmMeGuKAZ" width="300px"/>
</div>

နိုင်ငံအမည်အတိုင်း district တွေကို အစဉ်လိုက်ပြပေးနေပါလိမ့်မယ်။ အစဉ်လိုက်စီထားတာကို ပြန်ဖြုတ်ချင်တယ်ဆိုလျှင်တော့

 * `Country` ဘေးက ●●● ကိုနှိပ်ပါ
 * `Remove sort: ascending` ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=13nsoQMx9Ma0mnAGRI9So1qFBKVWtkMrT" width="300px"/>

#### `District Name` အစဉ်အတိုင်းစီခြင်း
ဒီ database မှာ တစ်ကြိမ်မှာ Column တစ်ခုတည်းကိုပဲ အစဉ်လိုက်စီလို့ရပါတယ်။ `District Name` ကို အစဉ်လိုက်စီမယ်ဆိုလျှင် `Country` မှာ စီထားတာပျောက်သွားပါလိမ့်မယ်။ အဲဒီလိုပဲ `Country` ကိုပြန်စီလိုက်မယ်ဆိုလျှင် `District Name` စီထားတာ ပျောက်သွားပါလိမ့်မယ်။ `Country` နဲ့ `District Name` တစ်ပြိုင်နက် စီမယ်ဆိုလျှင်တော့ CSV Export လုပ်ပြီး Microsoft Excel မှာ စီကြည့်နိုင်ပါတယ်။
`District Name` အတိုင်း အစဉ်လိုက်စီမယ်ဆိုလျှင်

* `District Name` ဘေးက ●●● ကိုနှိပ်ပါ
* `Sort: Ascending` ကိုနှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1oFwmU7h-w5IbKX98bH_HOsjCdvz3dnuU" style="zoom: 67%;" />

စီထားတာကိုပြန်ဖြုတ်မယ်ဆိုလျှင်
* `District Name` ဘေးက ●●● ကိုနှိပ်ပါ
* `Remove Sort: ascending` ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=1Q7pUdeywV3VJR5iL3edsuXWHicdZ4332" style="zoom:67%;" />

### Adding District (District ထပ်တိုးခြင်း)
 * Add Row ကိုနှိပ်ပါ။ Row တစ်ခုအသစ်ပေါ်လာပါလိမ့်မယ်။
 * Row အသစ်မှာ `Country` နှင့် `District Name` ထည့်ရပါမယ်။ အသစ်ထည့်ချင်တဲ့ District ရဲ့ နိုင်ငံကို `Country` မှာထည့်ရမှာဖြစ်ပြီး `District Name` မှာ ထည့်ချင်တဲ့ District ရဲ့နာမည်ကိုရိုက်ရမှာဖြစ်ပါတယ်။
 * အသစ်ပေါ်လာတဲ့ ဇယားကွက်မှာ Double Click နှိပ်ပါ
 * အသစ်ထည့်ချင်တဲ့ အမည်ကို ရိုက်ထည့်ပါ
 * ရိုက်ထည့်ပြီးတဲ့အခါ Enter နှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1sxa-IGMuUBB1jlz3ommJdoleFG6GnNaG" style="zoom:67%;" />
```
 ဒီနေရာမှာ သတိထားဖို့က Country ထည့်တဲ့အခါ အရင်ထည့်ခဲ့တဲ့ data နဲ့ စာလုံးအကြီးအသေးကအစ တူနေဖို့လိုပါတယ်။ ဥပမာ Thailand ထဲမှာရှိတဲ့ Tak ဆိုတဲ့ District တစ်ခုထပ်တိုးချင်တဲ့အခါ Country မှာ Thailand ၊ District Name မှာ Tak လို့ထည့်ရမှာပါ။ အဲဒီမှာ အရင်ရှိပြီးသားဇယားကွက်တွေမှာ Thailand လို့ထည့်ထားပြီးသားဆိုလျှင် Thailand လို့ပဲရိုက်ထည့်ရမှာဖြစ်ပြီး thailand ၊ ThaiLand စတဲ့ရေးပုံရေးနည်းတွေနှင့် အလုပ်လုပ်မှာမဟုတ်ပါဘူး။
```

### Editing District (District ပြင်ဆင်ခြင်း)
* ပြင်ချင်တဲ့ District ကို double click နှိပ်ပါ
* Select လုပ်ပါ
* ပြင်ချင်တဲ့နာမည်ကို ရိုက်ထည့်ပါ
* Enter နှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1po2jykA_92Ew1EIh89CZDUUuHzS8ExoQ" style="zoom:67%;" />

### Deleting District (District အမည် ဖျက်သိမ်းခြင်း)
* ဖျက်ချင်တဲ့ District အမည်ဘေးက Delete button ကိုနှိပ်ပါ
* Delete Row? ပေါ်လာလျှင် Delete ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=16HF01585Qw-jShcQVcHvODS5TnkOy0Nu" style="zoom:67%;" />

## Township Table
 Township table မှာ ဆေးခန်း/ဆေးစတို data တွေမရှိပါဘူး။ ဒီ table မှာပါတဲ့ Township အမည်တွေဟာ account register လုပ်တဲ့အခါ ရွေးထားတဲ့ District ရဲ့ သက်ဆိုင်ရာ Township တွေကို ဖော်ပြပေးမှာဖြစ်ပါတယ်။ ဒီမှာပြင်ဆင်ရေးသားလိုက်တဲ့ Township စာရင်းအတိုင်း register လုပ်တဲ့သူက ရွေးခြယ်နိုင်မှာဖြစ်ပါတယ်။ Township table မှာ `District` နှင့် `Township Name` ဆိုပြီး column နှစ်ခုရှိပါတယ်။ `District` ဟာ မိခင် District ဖြစ်ပြီး `Township Name` ဟာ သက်ဆိုင်ရာ District ရဲ့ Township တစ်ခုချင်းစီဖြစ်ပါတယ်။

 ### Sorting (အစဉ်လိုက်စီခြင်း)
 #### `District` အစဉ်အတိုင်းစီခြင်း
 Township table မှာ District အလိုက် Township တွေကို အစဉ်လိုက်ကြည့်လို့ရပါတယ်။
 * `District` ဘေးက ●●● ကိုနှိပ်ပါ
 * `Sort: Ascending` ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=1Fe4Ts04uKZVjuGbcbqwR-OC5HhyTWuN7" style="zoom:67%;" />

 District အမည်အတိုင်း Township တွေကို အစဉ်လိုက်ပြပေးနေပါလိမ့်မယ်။ အစဉ်လိုက်စီထားတာကို ပြန်ဖြုတ်ချင်တယ်ဆိုလျှင်တော့
 * `District` ဘေးက ●●● ကိုနှိပ်ပါ
 * `Remove sort: Ascending` ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=1apZxUCcfKC0gYhvlQ9-21OIxrKl_5R9d" style="zoom:67%;" />

#### `Township Name` အစဉ်အတိုင်းစီခြင်း
ဒီ database မှာ တစ်ကြိမ်မှာ Column တစ်ခုတည်းကိုပဲ အစဉ်လိုက်စီလို့ရပါတယ်။ `Township Name` ကို အစဉ်လိုက်စီမယ်ဆိုလျှင် `District` မှာ စီထားတာပျောက်သွားပါလိမ့်မယ်။ အဲဒီလိုပဲ `District` ကိုပြန်စီလိုက်မယ်ဆိုလျှင် `Township Name` စီထားတာ ပျောက်သွားပါလိမ့်မယ်။ `District` နဲ့ `Township Name` တစ်ပြိုင်နက် စီမယ်ဆိုလျှင်တော့ CSV Export လုပ်ပြီး Microsoft Excel မှာ စီကြည့်နိုင်ပါတယ်။
`Township Name` အတိုင်း အစဉ်လိုက်စီမယ်ဆိုလျှင်
* `Township Name` ဘေးက ●●● ကိုနှိပ်ပါ
* `Sort: Ascending` ကိုနှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1HL5DEsgxh9AFTLQVVqJnfwtYAEcnjMjH" style="zoom:67%;" />

စီထားတာကိုပြန်ဖြုတ်မယ်ဆိုလျှင်
* `Township Name` ဘေးက ●●● ကိုနှိပ်ပါ
* `Remove Sort: Ascending` ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=1KTY7K0VYqLR29-GhUdgBkXjzEALcKARY" style="zoom:67%;" />

### Adding Township (Township ထပ်တိုးခြင်း)
 * Add Row ကိုနှိပ်ပါ။ Row တစ်ခုအသစ်ပေါ်လာပါလိမ့်မယ်။
 * Row အသစ်မှာ `District` နှင့် `Township Name` ထည့်ရပါမယ်။ အသစ်ထည့်ချင်တဲ့ Township ရဲ့ District ကို `District` မှာထည့်ရမှာဖြစ်ပြီး `Township Name` မှာ ထည့်ချင်တဲ့ Township ရဲ့နာမည်ကိုရိုက်ရမှာဖြစ်ပါတယ်။
 * အသစ်ပေါ်လာတဲ့ ဇယားကွက်မှာ Double Click နှိပ်ပါ
 * အသစ်ထည့်ချင်တဲ့ အမည်ကို ရိုက်ထည့်ပါ
 * ရိုက်ထည့်ပြီးတဲ့အခါ Enter နှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1WiNBwRu3jYiOehJs59CoYJKp6cHJSvn6" style="zoom:67%;" />

```
ဒီနေရာမှာ သတိထားဖို့က District ထည့်တဲ့အခါ အရင်ထည့်ခဲ့တဲ့ data နဲ့ စာလုံးအကြီးအသေးကအစ တူနေဖို့လိုပါတယ်။ ဥပမာ Doo Pla Ya ထဲမှာရှိတဲ့ Kawkareik ဆိုတဲ့ Township တစ်ခုထပ်တိုးချင်တဲ့အခါ District မှာ Doo Pla Ya ၊ Township Name မှာ Kawkareik လို့ထည့်ရမှာပါ။ အဲဒီမှာ အရင်ရှိပြီးသားဇယားကွက်တွေမှာ Doo Pla Ya လို့ထည့်ထားပြီးသားဆိုလျှင် Doo Pla Ya လို့ပဲရိုက်ထည့်ရမှာဖြစ်ပြီး Dooplaya ၊ Doo Playa စတဲ့ရေးပုံရေးနည်းတွေနှင့် အလုပ်လုပ်မှာမဟုတ်ပါဘူး။
```

### Editing Township (Township ပြင်ဆင်ခြင်း)
* ပြင်ချင်တဲ့ Township ကို double click နှိပ်ပါ
* Select လုပ်ပါ
* ပြင်ချင်တဲ့နာမည်ကို ရိုက်ထည့်ပါ
* Enter နှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1FA8t4B10fk1Hv8989G9_zE8JiYkmJ8rq" style="zoom:67%;" />

### Deleting Township (Township အမည် ဖျက်သိမ်းခြင်း)
* ဖျက်ချင်တဲ့ Township အမည်ဘေးက Delete button ကိုနှိပ်ပါ
* Delete Row? ပေါ်လာလျှင် Delete ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=1VxMKWCyycro931kkYOQFFIVgnyuScO9B" style="zoom:67%;" />

## Clinic Warehouse Table
 Clinic Warehouse table မှာ ဆေးခန်း/ဆေးစတို data တွေမရှိပါဘူး။ ဒီ table မှာပါတဲ့ Clinic/Warehouse အမည်တွေဟာ account register လုပ်တဲ့အခါ ရွေးထားတဲ့ Township ရဲ့ သက်ဆိုင်ရာ Clinic/Warehouse တွေကို ဖော်ပြပေးမှာဖြစ်ပါတယ်။ ဒီမှာပြင်ဆင်ရေးသားလိုက်တဲ့ Clinic/Warehouse စာရင်းအတိုင်း register လုပ်တဲ့သူက ရွေးခြယ်နိုင်မှာဖြစ်ပါတယ်။ Clinic Warehouse table မှာ `Township` နှင့် `Clinic/Warehouse Name` ဆိုပြီး column နှစ်ခုရှိပါတယ်။ `Township` ဟာ မိခင် Township ဖြစ်ပြီး `Clinic/Warehouse Name` ဟာ သက်ဆိုင်ရာ Township ရဲ့ Clinic Warehouse တစ်ခုချင်းစီဖြစ်ပါတယ်။

 ### Sorting (အစဉ်လိုက်စီခြင်း)
 #### `Township` အစဉ်အတိုင်းစီခြင်း
 Clinic Warehouse table မှာ Township အလိုက် Clinic/Warehouse တွေကို အစဉ်လိုက်ကြည့်လို့ရပါတယ်။
 * `Township` ဘေးက ●●● ကိုနှိပ်ပါ
 * `Sort: Ascending` ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=1xA4Sa5QhEgpn955ZgJGh4US5DZGQMrgw" style="zoom:67%;" />

Township အမည်အတိုင်း Clinic/Warehouse တွေကို အစဉ်လိုက်ပြပေးနေပါလိမ့်မယ်။ အစဉ်လိုက်စီထားတာကို ပြန်ဖြုတ်ချင်တယ်ဆိုလျှင်တော့
 * `Township` ဘေးက ●●● ကိုနှိပ်ပါ
 * `Remove sort: Ascending` ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=1gkE1zHEh4UD4gWJXXYdb81KXmSeQ3p97" style="zoom:67%;" />

#### `Clinic/Warehouse Name` အစဉ်အတိုင်းစီခြင်း
ဒီ database မှာ တစ်ကြိမ်မှာ Column တစ်ခုတည်းကိုပဲ အစဉ်လိုက်စီလို့ရပါတယ်။ `Clinic/Warehouse Name` ကို အစဉ်လိုက်စီမယ်ဆိုလျှင် `Township` မှာ စီထားတာပျောက်သွားပါလိမ့်မယ်။ အဲဒီလိုပဲ `Township` ကိုပြန်စီလိုက်မယ်ဆိုလျှင် `Clinic/Warehouse Name` စီထားတာ ပျောက်သွားပါလိမ့်မယ်။ `Township` နဲ့ `Clinic/Warehouse Name` တစ်ပြိုင်နက် စီမယ်ဆိုလျှင်တော့ CSV Export လုပ်ပြီး Microsoft Excel မှာ စီကြည့်နိုင်ပါတယ်။
`Clinic/Warehouse Name` အတိုင်း အစဉ်လိုက်စီမယ်ဆိုလျှင်

* `Clinic/Warehouse Name` ဘေးက ●●● ကိုနှိပ်ပါ
* `Sort: Ascending` ကိုနှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1kNBqclIt9UCB4K0ybg8pQSNJ_wlJNP4u" style="zoom:67%;" />

စီထားတာကိုပြန်ဖြုတ်မယ်ဆိုလျှင်
* `Clinic/Warehouse Name` ဘေးက ●●● ကိုနှိပ်ပါ
* `Remove Sort: Ascending` ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=10W-Y7SwgmaTbyDrsK9LMLZB7geWCkjem" style="zoom:67%;" />

### Adding Clinic/Warehouse (Clinic/Warehouse ထပ်တိုးခြင်း)
 * Add Row ကိုနှိပ်ပါ။ Row တစ်ခုအသစ်ပေါ်လာပါလိမ့်မယ်။
 * Row အသစ်မှာ `Township` နှင့် `Clinic/Warehouse Name` ထည့်ရပါမယ်။ အသစ်ထည့်ချင်တဲ့ Clinic/Warehouse ရဲ့ Township ကို `Township` မှာထည့်ရမှာဖြစ်ပြီး `Clinic/Warehouse Name` မှာ ထည့်ချင်တဲ့ Clinic/Warehouse ရဲ့နာမည်ကိုရိုက်ရမှာဖြစ်ပါတယ်။
 * အသစ်ပေါ်လာတဲ့ ဇယားကွက်မှာ Double Click နှိပ်ပါ
 * အသစ်ထည့်ချင်တဲ့ အမည်ကို ရိုက်ထည့်ပါ
 * ရိုက်ထည့်ပြီးတဲ့အခါ Enter နှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=12dsQzNeuqiDHPtXzE12cQZp8tMoxsmgz" style="zoom:67%;" />
```
ဒီနေရာမှာ သတိထားဖို့က Township ထည့်တဲ့အခါ အရင်ထည့်ခဲ့တဲ့ data နဲ့ စာလုံးအကြီးအသေးကအစ တူနေဖို့လိုပါတယ်။ ဥပမာ Bilin ထဲမှာရှိတဲ့ DTT-IDP ဆိုတဲ့ Clinic တစ်ခုထပ်တိုးချင်တဲ့အခါ Township မှာ Bilin ၊ Clinic/Warehouse Name မှာ DTT-IDP လို့ထည့်ရမှာပါ။ အဲဒီမှာ အရင်ရှိပြီးသားဇယားကွက်တွေမှာ Bilin လို့ထည့်ထားပြီးသားဆိုလျှင် Bilin လို့ပဲရိုက်ထည့်ရမှာဖြစ်ပြီး Bi Lin ၊ bilin စတဲ့ရေးပုံရေးနည်းတွေနှင့် အလုပ်လုပ်မှာမဟုတ်ပါဘူး။
```

### Editing Clinic/Warehouse (Clinic/Warehouse ပြင်ဆင်ခြင်း)
* ပြင်ချင်တဲ့ Clinic/Warehouse ကို double click နှိပ်ပါ
* Select လုပ်ပါ
* ပြင်ချင်တဲ့နာမည်ကို ရိုက်ထည့်ပါ
* Enter နှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1w3pguECejiunwz7KpJrkbToRpV3WmJkM" style="zoom:67%;" />

### Deleting Clinic/Warehouse (Clinic/Warehouse အမည် ဖျက်သိမ်းခြင်း)
* ဖျက်ချင်တဲ့ Clinic/Warehouse အမည်ဘေးက Delete button ကိုနှိပ်ပါ
* Delete Row? ပေါ်လာလျှင် Delete ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=1Yp07_Am1fnCwkZ-HmoDdydissXSymksh" style="zoom:67%;" />

# Creating Tables (Table များတည်ဆောက်ခြင်း)
နဂိုရှိပြီးသား Table တွေအပြင် ဆေးခန်း/ဆေးစတို တစ်ခုချင်းစီအတွက် Table ထပ်လုပ်နိုင်ပါတယ်။
ဥပမာအနေနှင့် Per Kler Warehouse အတွက် Table တစ်ခုလုပ်မယ်ဆိုပါစို့။

## Warehouse တစ်ခုအတွက် Balance Table တည်ဆောက်ခြင်း
* စာမျက်နှာရဲ့ ဘယ်ဘက်အပေါ်ဆုံးအစွန်မှာရှိတဲ့ ≣ ကိုနှိပ်ပါ

* Create Table ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=1aCj57h-yqx5Io-qWJj19AZtcuR86N27c" style="zoom:67%;" />

* Table Type မှာ Primary Collection ထားပါ။

* Collection Dropdown ကိုနှိပ်ပါ၊ Create collection or use custom path ကိုနှိပ်ပါ

* Collection name တွင် `balance` ဟုရိုက်ထည့်ပါ။ Add ကိုနှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1NKvjYdMbSd4xQ0HAADMM18QamCYmFV2Y" style="zoom:67%;" />

* Display ဘေးရှိ ⌄ ကိုနှိပ်ပါ

* Table Name တွင် `Per Kler Balance` ဟုရိုက်ထည့်ပါ။ ဒီနေရာမှာ တခြားဆေးစတိုတစ်ခု ဥပမာ Mae Sot အတွက်ဆိုလျှင် `Mae Sot Balance` ဟုရိုက်ထည့်ရမှာဖြစ်ပါတယ်။

* Table ID ထည့်စရာမလိုပါ

* Section Dropdown ကိုနှိပ်ပါ။ Add new ကိုနှိပ်ပါ။

* New Item မှာ Per Kler ဟုရိုက်ထည့်ပါ။ ပြီးလျှင် Add ကိုနှိပ်ပါ။ အခြားဆေးစတိုအတွက်ဆိုလျှင် သက်ဆိုင်ရာနာမည်ကိုပဲရိုက်ထည့်ရမှာဖြစ်ပါတယ်။

* Description မှာ ကြိုက်သလိုရေးနိုင်ပါတယ်။ ဒီဥပမာမှာတော့ `Per Kler Warehouse လက်ရှိဆေးပစ္စည်း အရေအတွက်ကို ကြည့်ရှုရန်` လို့ရေးလိုက်ပါမယ်။

* ပြီးလျှင် Create ကိုနှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1VCfBtiY6P1WZjwMSLEyF12b__3phiPjd" style="zoom:67%;" />

* Import existing data ကိုနှိပ်ပါ။

* ဘယ်ဘက်အခြမ်းက စာရင်းမှာ 
    1. `amount`
    
    2. `clinic`
    
    3. `inCharge`
    
    4. `medicine`
    
    5. `post`
    
    6. `type`
    
    7. `uid`
        ကိုအမှန်ခြစ်ပါ
        <img src="https://drive.google.com/uc?export=view&id=14F96nc4bun3F04dHtk31T83W8Y5NJreI" style="zoom:67%;" />
    
* ညာဘက်အခြမ်းက စာရင်းရဲ့ နာမည်တစ်ခုချင်းစီ ညာဘက်မှာ = ကိုဖိဆွဲပြီး အောက်ပါအတိုင်း အစဉ်လိုက်နေရာချပါ
    1. `medicine`
    2. `type`
    3. `amount`
    4. `incharge`
    5. `post`
    6. `clinic`
    7. `uid`
* Continue နှိပ်ပါ
* Continue နောက်တစ်ချက်ထပ်နှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=1zvWAoaO1GgOVd5MWg2Vi_n_1yUP4I5g4" style="zoom:67%;" />

* Medicine Row အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* Type အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* In Charge အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* Amount အတွက် Field Type မှာ Number ကိုရွေးပါ (Number ဖြစ်နေပြီးသားဆိုလျှင် ဘာမှလုပ်စရာမလိုပါ)
* Post အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* Clinic အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* uid အတွက် Field Type မှာ Short Text ကိုရွေးပါ
<img src="https://drive.google.com/uc?export=view&id=1268sn3uLLdZtXvNiLLBt5yG3JLGooUBC" style="zoom:67%;" />

* ပြီးလျှင် Continue ကိုနှိပ်ပါ
* Finish ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=1TFdLD5Ps3WegvbAMbn-AeFsh77AIewID" style="zoom:67%;" />

* Table ပေါ်လာလျှင် ဘယ်ဘက်အစွန်က ≣ ကိုနှိပ်ပါ
* Home ကိုသွားပါ။ Profile table ကိုဆက်သွားပါ။
<img src="https://drive.google.com/uc?export=view&id=1yQYgps9yl_76cVNl38PEnveIRhaWYmse" style="zoom:67%;" />

* Clinic/Warehouse Column ထဲက Per Kler ကိုရှာပါ။ Per Kler ကိုတွေ့ပြီဆိုလျှင် သူ့ရဲ့ User ID ကို Double Click နှိပ်ပါ။
* Cursor ပေါ်လာပြီဆိုလျှင် နောက်ထပ် Double Click ထပ်နှိပ်ပါ။ Select All ဖြစ်သွားပြီဆိုလျှင် Right Click > Copy ကိုနှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1MSYG0vQ3Qy2WPbl56Y5fTmO8VTzh8RZg" style="zoom:67%;" />

* ≣ ကိုပြန်နှိပ်ပြီး Home ကိုပြန်သွားပါ။ Per Kler Balance Table ကို ဆက်သွားပါ။
<img src="https://drive.google.com/uc?export=view&id=1q5CQPq3aPi5nUCcnxxFH2ZBSOPmeonOt" style="zoom:67%;" />

* Filter ကိုနှိပ်ပါ။ Table Filter ကိုဆက်နှိပ်ပါ
* Column မှာ Uid ကိုရွေးပါ။ Operator မှာ equals အတိုင်းပဲထားပါ။ Value မှာ Right Click လုပ်ပြီး Paste ကိုနှိပ်ပါ
* Apply ကိုနှိပ်ပါ။
* ဒါဆိုလျှင် Per Kler ဆေးစတို တစ်ခုတည်းမှာရှိနေတဲ့ ဆေးပစ္စည်းစာရင်းနှင့် ပမာဏကို မြင်ရမှာဖြစ်ပါတယ်။
<img src="https://drive.google.com/uc?export=view&id=1yoEpWO1L7v0tMub1ENUWtwwozHr8Pr6a" style="zoom:67%;" />
```
Balance Table ဟာ ဆေးပစ္စည်းနှင့် ပမာဏကိုပဲ ကြည့်လို့ရပြီး ဆေးရဲ့ Expiry Date တို့၊ Batch Number တို့ စတဲ့ အသေးစိတ်အချက်အလက်တွေကတော့ Stock Table မှာပဲ ကြည့်လို့ရမှာဖြစ်ပါတယ်။
```

## Warehouse တစ်ခုအတွက် Stock Table တည်ဆောက်ခြင်း
Stock Table တည်ဆောက်ဖို့အတွက် Per Kler Warehouse နဲ့ပဲ နမူနာလုပ်ကြည့်ပါမယ်။
* စာမျက်နှာရဲ့ ဘယ်ဘက်အပေါ်ဆုံးအစွန်မှာရှိတဲ့ ≣ ကိုနှိပ်ပါ
* Create Table ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=1aCj57h-yqx5Io-qWJj19AZtcuR86N27c" style="zoom:67%;" />

* Table Type မှာ Primary Collection ထားပါ။
* Collection Dropdown ကိုနှိပ်ပါ၊ Create collection or use custom path ကိုနှိပ်ပါ
* Collection name တွင် `stock` ဟုရိုက်ထည့်ပါ။ Add ကိုနှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1ymr4MZLxv5BPK4Is-B1EMRgZ_BV_ewZs" style="zoom:67%;" />

* Display ဘေးရှိ ⌄ ကိုနှိပ်ပါ
* Table Name တွင် `Per Kler Stock` ဟုရိုက်ထည့်ပါ။ ဒီနေရာမှာ တခြားဆေးစတိုတစ်ခု ဥပမာ Mae Sot အတွက်ဆိုလျှင် `Mae Sot Stock` ဟုရိုက်ထည့်ရမှာဖြစ်ပါတယ်။
* Table ID ထည့်စရာမလိုပါ
* Section Dropdown ကိုနှိပ်ပါ။ Add new ကိုနှိပ်ပါ။ Per Kler ရှိပြီးသားဆိုလျှင် Add New နှိပ်စရာမလိုဘဲ ရှိပြီးသား Per Kler ကိုပဲရွေးပါ။
* မရှိသေးလျှင် Add New နှိပ်ပြီး New Item မှာ Per Kler ဟုရိုက်ထည့်ပါ။ ပြီးလျှင် Add ကိုနှိပ်ပါ။ အခြားဆေးစတိုအတွက်ဆိုလျှင် သက်ဆိုင်ရာနာမည်ကိုပဲရိုက်ထည့်ရမှာဖြစ်ပါတယ်။
* Description မှာ ကြိုက်သလိုရေးနိုင်ပါတယ်။ ဒီဥပမာမှာတော့ `Per Kler Warehouse ဆေးပစ္စည်းအဝင်အထွက်မှတ်တမ်းကြည့်ရှုရန်` လို့ရေးလိုက်ပါမယ်။
* ပြီးလျှင် Create ကိုနှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1BEwLWCLUMt1rhVoEK_DgxhwhI3h99t-3" style="zoom:67%;" />

* Import existing data ကိုနှိပ်ပါ။
* ဘယ်ဘက်အခြမ်းက စာရင်းမှာ 
    1. `amount`
    2. `batchNo`
    3. `clinic`
    4. `date`
    5. `expDate`
    6. `formType`
    7. `from`
    8. `medicine`
    9. `medicineType`
    10. `packageForm`
    11. `remark`
    12. `to`
    13. `uid`
    ကိုအမှန်ခြစ်ပါ
    <img src="https://drive.google.com/uc?export=view&id=1w-_aAcKw4lznhZHoveTDy37ZlUv7Ylib" style="zoom:67%;" />

* ညာဘက်အခြမ်းက စာရင်းရဲ့ နာမည်တစ်ခုချင်းစီ ညာဘက်မှာ = ကိုဖိဆွဲပြီး အောက်ပါအတိုင်း အစဉ်လိုက်နေရာချပါ
    1. `date`
    2. `formType`
    3. `medicine`
    4. `medicineType`
    5. `packageForm`
    6. `amount`
    7. `batchNo`
    8. `expDate`
    9. `from`
    10. `to`
    11. `remark`
    12. `uid`
    13. `clinic`
* Continue နှိပ်ပါ
* Continue နောက်တစ်ချက်ထပ်နှိပ်ပါ

* Date အတွက် Field Type မှာ Date ကိုရွေးပါ
* Form Type အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* Medidine အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* Medicine Type အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* Package Form အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* Amount အတွက် Field Type မှာ Number ကိုရွေးပါ (Number ဖြစ်နေပြီးသားဆိုလျှင် ဘာမှလုပ်စရာမလိုပါ)
* Batch No အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* Exp Date အတွက် Field Type မှာ Date ကိုရွေးပါ
* From အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* To အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* Remark အတွက် Field Type မှာ Long Text ကိုရွေးပါ
* Uid အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* Clinic အတွက် Field Type မှာ Short Text ကိုရွေးပါ
* ပြီးလျှင် Continue ကိုနှိပ်ပါ
* Finish ကိုနှိပ်ပါ
<img src="https://drive.google.com/uc?export=view&id=1IIBI4rUuJJ2nKT-rklDOnN7INb8-yiUd" style="zoom:67%;" />

* Table ပေါ်လာလျှင် ဘယ်ဘက်အစွန်က ≣ ကိုနှိပ်ပါ
* Home ကိုသွားပါ။ Profile table ကိုဆက်သွားပါ။
<img src="https://drive.google.com/uc?export=view&id=1yQYgps9yl_76cVNl38PEnveIRhaWYmse" style="zoom:67%;" />

* Clinic/Warehouse Column ထဲက Per Kler ကိုရှာပါ။ Per Kler ကိုတွေ့ပြီဆိုလျှင် သူ့ရဲ့ User ID ကို Double Click နှိပ်ပါ။
* Cursor ပေါ်လာပြီဆိုလျှင် နောက်ထပ် Double Click ထပ်နှိပ်ပါ။ Select All ဖြစ်သွားပြီဆိုလျှင် Right Click > Copy ကိုနှိပ်ပါ။
<img src="https://drive.google.com/uc?export=view&id=1MSYG0vQ3Qy2WPbl56Y5fTmO8VTzh8RZg" style="zoom:67%;" />

* ≣ ကိုပြန်နှိပ်ပြီး Home ကိုပြန်သွားပါ။ Per Kler Stock Table ကို ဆက်သွားပါ။
* Filter ကိုနှိပ်ပါ။ Table Filter ကိုဆက်နှိပ်ပါ
* Column မှာ Uid ကိုရွေးပါ။ Operator မှာ equals အတိုင်းပဲထားပါ။ Value မှာ Right Click လုပ်ပြီး Paste ကိုနှိပ်ပါ
* Apply ကိုနှိပ်ပါ။
* ဒါဆိုလျှင် Per Kler ဆေးစတို တစ်ခုတည်းမှာရှိနေတဲ့ ဆေးပစ္စည်းအဝင်အထွက်မှတ်တမ်းကို မြင်ရမှာဖြစ်ပါတယ်။
<img src="https://drive.google.com/uc?export=view&id=1MzRKS25tYDGlLpEaOsul5ovSjpailHHW" style="zoom:67%;" />

```
Stock Table ဟာ ဆေးပစ္စည််းအဝင်အထွက်မှတ်တမ်းနှင့် Expiry Date ၊ Donor နဲ့ ပေးလိုက်တဲ့ ဆေးခန်းတွေကိုပဲ ကြည့်လို့ရပြီး စတိုထဲမှာလက်ရှိ ရှိနေတဲ့အရေအတွက်ကိုတော့ Balance Table မှာပဲ သွားကြည့်လို့ရမှာဖြစ်ပါတယ်။
```