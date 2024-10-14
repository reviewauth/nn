window.Webtop = {
  config: getBootstrapConfig()
};

window.UXConfig = {
  buildVersionID: "3.1.3.54.0-3",
  header: {
    rui: {
      iframeUri: "header/header.html",
      divId: "",
      initFnName: ""
    },
  },
  footer: {
    rui: {
      iframeUri: "footer/footer.html",
      iframeUriBA: "footer/footer_ba.html",
      iframeId: 'footerIframe',
      divId: "",
      initFnName: ""
    },
    ruifr: {
      iframeUri: "footer/footer_fr.html",
      iframeUriBA: "footer/footer_ba_fr.html",
      iframeId: 'footerIframe',
      divId: "",
      initFnName: ""
    }
  },
  ui: {
    rui: {
      header: {
        showHeaderAD: false,
        showGoogleSearch: true
      }
    }
  },
  advertisement: {
    adBanner: false,
    skyscrapper: false,
    inline:false,
    adBannerUrl: 'ad/ad_320_50.html',
    skyscrapperUrl: 'ad/ad_120_600.html',
    adFrequencyOfListItem : 5,
    noneViewAdHeight:30,//If inline adv is true then this list height be used for list height
    rightViewAdHeight:90, //If inline adv is true then this list height be used for list height
    refreshAdCounter:25,
    adSmallSize: 120,
    adBigSize: 150,
    browserLimit: 1280,
  },
  googleSearch: {
    url: "search/search.html?q={0}",
    windowName: "searchResult"
  },
  settings: {
    preference: {}
  },
  // defaults from SDK
  common: {
    defaultSortOrder: {
      value: 'SORT_DATE_DESC', //set the value as 'SORT_NATURAL_DESC' for CPMS environment and 'SORT_DATE_DESC' for MX
    },
    ScrollKeysEnabled: true, // Default value will be true
    concurrentLogin: {
      enabled: true,
      securityRedirectPopup: false,
    },
    ad: {
      interval: 30000
    },
    SignatureWindow:{
       disableFont: {
         disableFont: false,
      }
    },
    links: {
      redirectLoginURL: "",
      redirectLogoutURL: {
        en_US: "https://www.ctvnews.ca/?cid=email:redirect",
        fr_CA: "https://www.sympatico.ca/?cid=SympBellMailredirect"
      },
      redirectTimeoutURL: "",
      logoURL: ""
    },
    time: {
      timeFormat: "HH/MM",
      dateFormat: "YYYY/MM/DD"
    },
    timezone: {
      useDevice: false
    },
    autoLogout: {
      options: [0, 300000, 600000, 900000, 1800000],
    },
	login:{
      usernameEnable: true,
    },
    regexp: {
      // eslint-disable-next-line
      emailRegularExp: /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9\u00C0-\u024f](?:[a-z0-9-\u00C0-\u024f]*[a-z0-9\u00C0-\u024f])?\.)+[a-z0-9\u00C0-\u024f](?:[a-z0-9-\u00C0-\u024f]*[a-z0-9\u00C0-\u024f])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,
      emailDomainRegularExp: /^((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9\u00C0-\u024f]+\.)+[a-zA-Z]{2,}))$/,
      mailPatternWWWExp: /(^|&nbsp;|\s|&gt;|>)(www.[0-9a-zA-Z$.+!*',&/:=@?;_-]+?)(&nbsp;|&gt;|\s|>|$|[^0-9a-zA-Z$.+!*',&/:=@?;_-])/igm,
      mailPatternHTTPExp: /(^|[^"])(\b(?:https?:\/\/|ftp:\/\/)[%0-9a-zA-Z$.+!*',&/:=@?;_-]+?)(&nbsp;|&gt;|\s|>|$|[^%0-9a-zA-Z$.+!*',&/:=@?;_-])/igm,
      // eslint-disable-next-line
      phoneRegularExp: /^([0-9\(\)\/\+ \-]*)$/,
      // eslint-disable-next-line
      pagerRegularExp: /^([0-9\(\)\/\+ \-]*)$/,
      urlRegularExp: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
      contactNameRegularExp: /^[^,;"[\]]*$/,
      notEmptyTextRegularExp: /^\s*[^\s]+.*\s*$/,
      // eslint-disable-next-line
      folderNameDisableChars: /[/<>&\\\*\%]|^{|^#|^\s/,
    },
    textMaxLength: 255,
    extensionNameTypeMap:
      Webtop.config.extensionnametypemap.extensionNameTypeMap,
    displayOptionInWelcomeMsg: 'firstName',
    // 'firstName'or 'lastName' or 'both' (firstname and lastname) or 'emailAddress'
    appLayoutLeftExpandWidth: 120,
    csrfProtection: true,
    userEmail: '',
    sleepForAuthcalls: true,
    sleepTime: 5000,
    defaultDateFormat: {
      key: 'attr.user.DateFormat',
      defaultValue: 'MM/DD/YYYY',
      available: [
        { label: 'DD/MM/YYYY', value: 'DD/MM/YYYY' },
        { label: 'DD/MM/YY', value: 'DD/MM/YY' },
        { label: 'MM/DD/YYYY', value: 'MM/DD/YYYY' },
        { label: 'YYYY/MM/DD', value: 'YYYY/MM/DD' },
        { label: 'DD-MM-YYYY', value: 'DD-MM-YYYY' },
        { label: 'DD.MM.YYYY', value: 'DD.MM.YYYY' },
      ],
    }
  },
  cloud: {
    enabled: false,
    folderNameSize: 63,
    folderNameDisableChars: /[\/<>#&\\\*\%]|^{/,
    presetEnable: false,
    paginationDefaultSize: 20,
    paginationScrollSizeBuffer: 10,
    dropFileEnable: false,
    trialURL: 'https://common-aws1-us-east-1-qa-wlpc.cloud.synchronoss.net/',
    uploadTimeout: 180000,
  },
  pinned: {
    displayCount: 20,
  },
  messageList: {
    pageSize: 20,
    conversationSize:50
  },
  /**
   * @namespace quickSearchDefault
   * @property {object} quickSearchDefault - the default value for quickSearchCustom
   * @property {array} [quickSearchDefault.fields] - the default value is ['recipients', 'from', 'subject'], for performance 'body' is removed but you can add 'body' if needed
   */
  quickSearchDefault: {
    fields: ['recipients', 'from', 'subject'],
  },
  quickSearchCustomFields: {
    enabled: true,
    fields: ['recipients', 'from', 'subject'],
  },
  batching: {
    enabled: true,
  },
  theme: {
    enabled: false,
    available: ["default"]
  },
  mail: {
   /**
   * @property {boolen} [mail.enabled] If the flag is enabled then it will make api call to check the mail content has phishing link or not when we do mail preview
   * @property {string} [mail.client_id] This one we need to get it from isitphishing
   * @property {string} [mail.client_secret] This one we need to get it from isitphishing
   * @property {boolean} [mail.checkCertificateInfo.enabled=true] - enable or disable to verify mail certificate validation more info:[SERVICES-9798] - By default it will be false
   */
   checkCertificateInfo:{
    enabled:false
    },
    autoScrollToTopOnRefresh: {
      enabled: false
    },
    scanMailContentLinks: {
      enabled: false,
      client_id: "M1e9RJq6cHAavtu5hx4HjQ",
      client_secret: "XlNE9_-_WKQfZQJOkqUBHhmhkQo"
    },
    mailPreviewBgcolorCountUpto:200,
    noneViewListHeight:30, //If inline adv is false then this list height be used for list height
    rightViewListHeight:90,//If inline adv is false then this list height be used for list height
    addAccountLink: false,
    avatar:{
      enabled:false,
      maxContactsAllowed : 50
    },
    splitPane: {
      width:'38%',
      height:  300,
	  minHeight: 200, // min size maintained to show records and ads in below view. Maintain a minimum of 200 for proper view port calculation. dont reduce below 200
    },
    replyForwardPrefix: { //PERIDOT-26984 if enabled is true the prefix would be either replyPrefix or forwardPrefix based on operation, else for empty string it will pick from locale selected
      enabled: false,
      replyPrefix: 'Re',
      forwardPrefix: 'Fwd',
      separator: ": ", // &nbsp; a extra space in Subject while Forwording or Reply the mail
    },
    addLinkForBlockImage: true,
    displayEmailIdInMail: false, //show email next to Account in Mail module
    auto: null,
    defaultMailView: 'previewright', //'previewright','previewbelow',
    noPreview : {
      enabled:false,   // This should be enabled only when we are switching from 3.1 to 2.3 Backward compatibility
    },
    quotaPercentageFactor : 1, // PERIDOT-14733 and PERIDOT-14892 Quota percentage usage fixed to 1 factor
    unlimited:61097600, // Configure this value for testing example if the data you see as 50 MB caluclate as (unlimited/1024^2) similarly if its GB , (unlimited/1024^3) and (unlimited/1024^4) for TB
    dataIndicator: true, // Setting it to true will display progress bar for manage storage
    maxInlineImgSize: 15000000,
    timeoutInline: 1800000,
    linkfiyText: true,
    maxMessageSizeForLoader:5000,
    save: {
      autoInterval: 60000
    },
    recipients: {
      max: 1000
    },
    forward: null,
    sender: {
      max: 10,
      maxTrusted: Webtop.config.mail.maxtrustedsenders,
      maxBlocked: Webtop.config.mail.maxblockedsenders
    },
    send:{
      timeoutSend:180000
    },
    folder: {
      maxNameSize: 60,
      maxDeepth: 30,
      specialFolders: Webtop.config.mail.specialFolders,
    },
    mailForwarding : {
      maxAddresses : 10
    },
    securityMessageTypes: ['00'],
    message: {
      maxSize: 307200,
      maxSubjectSize: 998,
      maxAttachmentCount: 100,
      maxAttachmentSize: 31457280,
      timeoutUpload: 180000,
      maxPrintEmailCount: 5,
      extensionType:['eml'],
      rfc822:"message/rfc822"
    },
     hugemail: {
      maxSize: 2147483647,
      maxSubjectSize: 998,
      maxAttachmentCount: 10,
      maxAttachmentSize: 2147483647,
      timeoutUpload: 38000000,
      timeoutViewSource:600000
    },
    cancelmail: {
      cancelSendTimerCount: 30,
      enabled: true,
    },
    minimizeCompose :{
      enabled: true,
    },
    signature: {
      limit: 10,
      maxContentSize: 200000,
      maxLabelSize: 128
    },
    emailSeperatorRegularExp: /[ ,;]+/,
    toolbar: [
      {"refresh":{"showMenuText":null,"menuName":"refresh"}},
      {"compose":{"menuName":"compose","showMenuText":true}},
      {"reply":{"showMenuText":false,"menuName":"reply"}},
      {"replyAll":{"showMenuText":false,"menuName":"replyAll"}},
      {"forward": {
        "showMenuText":false,"menuName":"forward",
        "menu" : []
        }
      },
      {"delete":{"showMenuText":false,"menuName":"delete"}},
      {"markAsSpam":{"showMenuText":false,"menuName":"markAsSpam"}},
      {"markNotAsSpam":{"showMenuText":false,"menuName":"markNotAsSpam"}},

      {"move":{"showMenuText":null,"menuName":"move"}},
      {"more": ["safeSender","blockSender","blockDomain","read","unread","flag","inviteEvent","createGroup","viewSource", "print", "saveEML","markAsPhishing"]},
      ],
    sortFields : [
        "date",
        "toFrom",
        "subject",
        "priority",
        "flag",
        //"size" Removed based on feature requirement - PERIDOT-17741
      ],
    sortUnread:true,
    alias: {
      enabled: true,
      userCanChooseFromAlias: true,
      maxNameLength: 32,
      maxAliasLength: 20,
      localNamePolicy: 'full', // either 'suffix' or 'full'
      // eslint-disable-next-line
      emailLocalPartRegularExp: /^[^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*$/,
      // eslint-disable-next-line
      emailLocalSuffixPartRegularExp: /^[^<>()[\],;:\s@\"]+$/,
    },
    externalAccount: {
      displayLabel:false,
      enable: true,
      limit: 10,
      service: Webtop.config.mail.externalmailbox.service,
      smtp: Webtop.config.mail.externalmailbox.smtp,
      defaultImapFolderMapping: Webtop.config.mail.externalmailbox.defaultImapFolderMapping,
      externalAccountOAuthRedirectUrl:
        "http://joey.com:8080/MX3.0-daily/index-rui.jsp?v=3.0.001.0#/settings",
      advancedSettingEnable: true
    },
    loginHistory: {
      enabled : true,
    },
    rtc: {
      enable: false,
      chart: null,
      video: null,
      audio: null,
      storage: null,
      quota: null
    },
    presence: {
      enable: false,
      presenseId: null,
      token: null
    },
    conversation: {
      enable: false
    },
    compose: {
      max: 30,
      width: 960,
      height: 800,
      detachWindow:true
    },
    ckEditor:{
      enabled:true,
      defaultFont:"Arial, sans-serif",
      defaultFontSize:14,
    },
    addToContact: {
      enabled:true
    },
    excludeFolderTypesOfShowPin: [
      'draft',
      'sent',
      'junk',
      'trash',
    ],
    cleanup: {
      enabled: true,
      FETCH_SIZE_IN_MESSAGE_CLEANUP : 100, // Deletion of mails at one shot in manage storage as this is the suggestable value considering the performance
    },
    showMailQuotaOnLeft: {
      enabled: false,
    },
    whitelisting: true,
    quickSearchAllFolders: false,
    enableMessagePreview: false,
    searchRequestTimeout: 120000,
    enableAutoSwitchMailView: true,
    switchToRightPreviewHeight: 600,
    switchToBottomPreviewWidth: 1000,
    switchViewAspectRatio: 1.7,
    autoReplyErrorDisplay:5000,
    autoReplyMaxLength:1024,
    unreadMessageCountofCustomPlusToShow: {
      enabled: true,
      maxValue: 99,
    },
    preview: {
      previousAndNextBtnLocalize:true,
    },
    returnToCurrentFolder: true,
    tags:{
      enabled:false,
      maxTagsList:10,
    },
    selectMultipleMsg:{
      enabled: false,
      maxMailListSelected: 50,
    }
  },
  contacts: {
    regex : {
      enabled:false,
      RegexPhoneComma: /^(?:\d{1,15}(?:,\d{1,15})*|\d+)(?:\d+)?$/
    },
    mapUrl: 'https://maps.google.com/maps?q=',
    sendMailAddressOrder: "home,work,other",
    regexp: {
      // eslint-disable-next-line
      folderNameInvalidChars: /[\/<>#&\\\*\%]/
    },
    addressBook: {
      max: 0,
      maxNameSize: 63,
      enableTrash: true,
      displayCount: true,
      maxCollectedEmails: 250000,
      displayAutoCompleteAtBottom: true
    },
    group: {
      enable: true,
      max: 50,
      allowDuplicateName: false
    },
    list: {
      max: 250000,
      pageSize: 300,
      defaultGroupBy: "lastName",
      defaultSortBy: "ASC",
      searchFields: "firstName,lastName,lzEmail,lzPhone",
      enablePartialCriteriaFilter: true,
      displayNameOrder: "firstName,lastName",
      enableMove: true,
      disableAvatar: true,
      enableContextMenu: true,
      enableMergeAndDedup: false
    },
    contactForm: {
      sections: {
        contact: Webtop.config.contacts.contactForm.section
      },
      maxFields: 0,
      maxSizeOfAvatar: 500,
      imageAcceptTypes: "image/pjpeg,image/jpeg,image/x-png,image/png,image/gif"
    },
    autoSuggest: {
      matchFields: "lzHeader.middlename",
      returnGroupContact: true,
      autoSuggestDelay:1000,
    },
    import: {
      enabledFileTypes: "csv,vcf"
    },
    export: {
      enabledFileTypes: "csv,vcard",
      defaultFileType: "csv"
    },
    contactDisplayNameSeparator: {
      SORT_FIRSTNAME: "",
      SORT_LASTNAME: ","
    },
    listToolbar: [
      "refresh",
      {"new": ["newContact","newGroup"]},
      {"more": ["sendvCard","importContacts","exportContacts","checkDuplicates","merge","divider","deleteContact", "sendMail", "moveToFolder","contactPrint"]
      }
    ],
    previewToolbar: [
      "compose", "edit", "delete","addToGroup","printPreviewContact","sendvCard", "inviteEvent"
    ],
    sortFields : [
      "firstName",
      "lastName",
    ],
  },
  calendar: {
    enabled: true,
    recurrence: {
      defaultOptions: [
        "none",
        "custom",
        "daily",
        "weekly",
        "monthly",
        "yearly",
        "weekday"
      ],
      frequencyOptions: ["daily", "weekly", "monthly", "yearly"],
      dayList: ["su", "mo", "tu", "we", "th", "fr", "sa"]
    },
    reminder: {
      options: [-15, 0, -5, -10, -30, -45, -60, -120, -240, -360, -480, -720, -1440, -2880, -4320, -5760, -7200, -8640, -10080, -20160, -30240, -40320, 1000]
    },
    // enableInviteContactToEvent: true,
    // ATTENDEE_ENABLED: true,
    TRASH_SUPPORT: false,
    SMS_SUPPORT: false,
    CATEGORY_OPTIONS: [
      "General",
      "Invite",
      "Work",
      "School",
      "Red",
      "Yellow",
      "Green",
      "Birthday",
      "Anniversary",
      "Date",
      "Vacation",
      "Fun",
      "Bills",
      "Phone",
      "Doctor",
      "Flag",
      "Pet",
      "Sport"
    ],
    // EVENT_REMIND_OPTIONS: ['', 0, 5, 15, 30, 60, 120, 1440, 2880, 10080],
    importAcceptFileTypes: [".ics", ".ical", ".icalendar", ".ifb"],
    calendarColors: [
      "00549A",
      "E51C23",
      "E91E63",
      "9C27B0",
      "673AB7",
      "3F51B5",
      "03A9F4",
      "00BCD4",
      "009688",
      "259B24",
      "88C34A",
      "CDDC39",
      "FFEB3B",
      "FFC107",
      "FF9800"
    ],
    // exportFileNameInvalidCharsReg: /[/<>&:"\|\?\\\*\%]/,
    // eslint-disable-next-line
    // subscribeUrlReg: /^((https?)|(webcals?)):\/\/([A-Za-z0-9\-\._~:\/?#\[\]@!$&'()*+,;=]|%[A-Fa-f0-9]{2})+$/,
    pageSizeOfPrintEventPDF: "a4",
    listToolbar: [
      "btnBackToCalendar",
      "refresh",
      "newEvent",
      "addCalendar",
      {"more": ["printCalendar","importEvents","exportEvents","subscribeCal"]
      }
    ]
  },
  tasks: {
    enabled: true,
    enableTaskGroup: true,
    defaultTaskReminderUnit: "minute",
    defaultTaskSortType: "priority",
    defaultTaskViewType: "single",
    // eslint-disable-next-line
    groupNameInvalidChars: /[/<>#&\\\*\%]/,
    groupNameSize: 64,
    toDoNameSize: 64,
    toDoDescriptionSize: 256,
    toDoStructure: {
      summary: "summary",
      group: "group",
      priority: "priority",
      status: "status",
      url: "url",
      description: "description",
      due: {
        hasDueTime: "hasDueTime",
        date: "dueDate",
        time: "dueTime",
        reminder: "reminder"
      },
      start: {
        hasStartTime: 'hasStartTime',
        date: 'startDate',
        time: 'startTime',
      },
    },
    listToolbar: [
      "refresh",
      "newTask",
      "more",
    ],
    sortFields : [
      {"sort": ["dueDate","startDate","priority","status","title"]},
      "divider",
      {"order": ["ascending","descending"]},
    ]
  },
  settings: {
    prefsfName:true,
    preference: {
      localeLanguage: {
        key: "attr.user.LocaleLanguage",
        defaultValue: "en_US",
        available: [
          {
            value: "en_US",
            text: "English",
            files: "en_US.json"
          },
          {
            value: "fr_CA",
            text: "Français",
            files: "fr_CA.json"
          }
        ]
      }
    },
    showDeleteIconPerItem: true,
    /**
   * @namespace rulesBodyConditionSize
   * @property {object} rulesBodyConditionSize - rulesBodyConditionSize if enabled will take max size from maxBodySizeString else default is 255
   * @property {array} [rulesBodyConditionSize.fields] - config if enabled will check the string based on size specified in maxBodySizeString and if disabled will take maxLength for string as default(255) string length
   */
    rulesBodyConditionSize:{
      enabled: false,
      maxBodySizeString : 255
    },
    autoCompleteSearchBySort:{
      enabled:false
    },
    ruleSetActive: {
      enabled: false,
    }
  },
  /*helper: {
    url: 'help/richui-English/Default.htm',
    custom:false,
    folder: ['help', 'richui', 'Default.htm'],
    allowMultipleLang: 'true',
    available: [
      {
        value: 'it_IT',
        text: 'Italian',
      },
      {
        value: 'fr_FR',
        text: 'French',
      },
      {
        value: 'de_DE',
        text: 'Dutch',
      },
    ]
  },*/
  helper: {
    enabled: true,
    url: {
      bc: {
        en_US: 'https://support.bell.ca/Internet/Email',
        fr_CA: 'https://soutien.bell.ca/Services-Internet/Courriel'
      },
      ba: {
        en_US: 'https://bellaliant.bell.ca/support/use-my-new-bell-webmail/7520',
        fr_CA: 'https://bellaliant.bell.ca/fr/soutien/utiliser-le-nouveau-service-courriel-web-de-bell/7520'
      }

    },
  },
  securityNotification: {
    enabled: true,
    toastInterval: 6000,
  },
  introductionWin: {
    rui: {
      items: [
        {
          id: "rui01",
          enabled: true,
          width: 560,
          height: 450,
          endDate: "",
          showNeverShowFlag: true,
          showTimes: -1,
          openEvent: "login",
          periodicTime: 14400,
          url: {
            en_US: 'introduction/introductionRUI.html',
            fr_CA: 'introduction/introductionRUI_fr.html'
          }
        },
        {
          id: "rui02",
          enabled: true,
          width: 360,
          height: 250,
          endDate: "",
          showNeverShowFlag: true,
          showTimes: -1,
          openEvent: "login",
          periodicTime: 14400,
          url: {
            en_US: 'introduction/import.html',
            fr_CA: 'introduction/import_fr.html'
          }
        },
        {
          id: "rui03",
          enabled: true,
          width: 360,
          height: 280,
          endDate: "",
          showNeverShowFlag: true,
          showTimes: -1,
          openEvent: "login",
          periodicTime: 14400,
          url: {
            en_US: 'introduction/autologout.html',
            fr_CA: 'introduction/autologout_fr.html'
          }
        },
      ]
    },
    tui: {
      items: [
        {
          id: 'tui01',
          enabled: true,
          endDate: '',
          showNeverShowFlag: true,
          showTimes: -1,
          openEvent: 'login',
          periodicTime: 14400,
          url: {
            en_US: 'introduction/introductionTUI.html',
            fr_CA: 'introduction/introductionTUI_fr.html'
          },
          phone: {
            width: '100%',
            height: '100%',
            marginLeft: '0%',
            marginTop: '0%'
          },
          tablet: {
            width: '80%',
            height: '60%',
            marginLeft: '5%',
            marginTop: '10%'
          },
        },
        {
          id: 'tui02',
          enabled: true,
          endDate: '',
          showNeverShowFlag: true,
          showTimes: -1,
          openEvent: 'login',
          periodicTime: 14400,
          url: {
            en_US: 'introduction/import.html',
            fr_CA: 'introduction/import_fr.html'
          },
          phone: {
            width: '100%',
            height: '100%',
            marginLeft: '0%',
            marginTop: '0%'
          },
          tablet: {
            width: '60%',
            height: '40%',
            marginLeft: '5%',
            marginTop: '10%'
          },
        },
        {
          id: 'tui03',
          enabled: true,
          endDate: '',
          showNeverShowFlag: true,
          showTimes: -1,
          openEvent: 'login',
          periodicTime: 14400,
          url: {
            en_US: 'introduction/autologout.html',
            fr_CA: 'introduction/autologout_fr.html'
          },
          phone: {
            width: '100%',
            height: '100%',
            marginLeft: '0%',
            marginTop: '0%'
          },
          tablet: {
            width: '60%',
            height: '40%',
            marginLeft: '5%',
            marginTop: '10%'
          },
        },
      ],
    }
  },

  googleSearch: {
    url: 'search/search.html?q={0}',
    windowName: 'searchResult',
  },
  ui: {
    rui: {
      logoLink: {
        ba: {
          url: "https://aliant.bell.ca/"
        },
        bc: {
          url: "http://www.bell.ca/"
        }
      },
    },
    tui: {
      logoLink: {
        ba: {
          url: "https://aliant.bell.ca/?mobile"
        },
        bc: {
          url: "http://www.bell.ca/?mobile"
        }
      },
      header: {
        showHeaderAD: false,
        showGoogleSearch: false,
      },
      footerLinks: [
        {
          href: {
            en_US: 'https://support.bell.ca/Billing-and-Accounts/Security_and_privacy/How_does_Bell_respect_my_privacy',
            fr_CA: 'https://soutien.bell.ca/Facturation-et-comptes/Securite_et_confidentialite/Bell_et_votre_vie_privee'
          },
          text: 'PRIVACY_POLICY',
        },
        {
          href: {
            en_US: 'https://www.bell.ca/Legal_and_terms#INT=OTH_legal_TXT_Footer',
            fr_CA: 'https://www.bell.ca/Avis_juridiques'
          },
            text: 'LEGAL_REGULATORY',
        },
        {
          href: {
            ba: {
              en_US: 'https://bellaliant.bell.ca/support/use-my-new-bell-webmail/7520',
              fr_CA: 'https://bellaliant.bell.ca/fr/soutien/utiliser-le-nouveau-service-courriel-web-de-bell/7520',
            },
            bc: {
              en_US: 'https://support.bell.ca/Internet/Email',
              fr_CA: 'https://soutien.bell.ca/Services-Internet/Courriel',
            }

          },
          text: 'HELP',
        },
        {
          href: {
            en_US: 'oo_feedback_email_en',
            fr_CA: 'oo_feedback_email_fr',
          },
          text: 'FEEDBACK',
        },
      ],
    },
  },
  redirector: {
    landing: {
      bellAliant: {
        hideExtendedSession: true,
        domains: ["ba"]
      },
      bellCanada: {

      }
    }
  }
};
