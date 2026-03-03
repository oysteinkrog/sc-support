var relearn_searchindex = [
  {
    "breadcrumb": "Swing Catalyst 支援",
    "content": "",
    "description": "",
    "tags": [],
    "title": "入門指南",
    "uri": "/sc-support/zh-hant/getting-started/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援",
    "content": "",
    "description": "",
    "tags": [],
    "title": "相機與影片",
    "uri": "/sc-support/zh-hant/cameras-video/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援",
    "content": "",
    "description": "",
    "tags": [],
    "title": "硬體",
    "uri": "/sc-support/zh-hant/hardware/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援",
    "content": "",
    "description": "",
    "tags": [],
    "title": "軟體與功能",
    "uri": "/sc-support/zh-hant/software-features/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援",
    "content": "",
    "description": "",
    "tags": [],
    "title": "帳戶與擊球準備",
    "uri": "/sc-support/zh-hant/account-setup/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援",
    "content": "",
    "description": "",
    "tags": [],
    "title": "參考",
    "uri": "/sc-support/zh-hant/reference/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "Swing Catalyst 3D動作板是一項獲得專利的產品，結合了高度先進的 Pressure Plate 與六分量力量板。\n本指南旨在概述從 3D動作板所獲取的數據，並提供一些解讀結果時的參考方向。\n若您對其中任何術語感到陌生，或希望獲得更詳細的資訊以協助您進行分析，請造訪 Swing Catalyst 線上學習中心（www.swingcatalyst.com/learning-center）查閱定義與相關文章。\n請參閱附件 PDF：\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "Swing Catalyst 3D動作板數據輸出解讀指南",
    "tags": [
      "Motion-Plate",
      "Pressure-Data",
      "Force-Data"
    ],
    "title": "3D動作板數據指南",
    "uri": "/sc-support/zh-hant/hardware/3d-motion-plate-data/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: App",
    "uri": "/sc-support/zh-hant/tags/app/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Backup",
    "uri": "/sc-support/zh-hant/tags/backup/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Balance-Plate",
    "uri": "/sc-support/zh-hant/tags/balance-plate/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Changelog",
    "uri": "/sc-support/zh-hant/tags/changelog/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Database",
    "uri": "/sc-support/zh-hant/tags/database/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Flir",
    "uri": "/sc-support/zh-hant/tags/flir/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "本文說明部分使用 FliR / Point Grey 相機的客戶，在從 9.1.1（或更舊版本）升級至 Swing Catalyst 9.1.2 釋放版本後所遇到的問題。\n升級至 9.1.2 後，您的相機可能會停止運作。這是因為我們現在會套用相機上已儲存的封包大小設定，而非從 FlyCap SDK 取得建議設定。\n這是一個更好的解決方案，但不幸的是，在從 8.0.5、9.0.1、9.1.1 過渡至 9.1.2 的過程中，可能會造成一些問題。\nnote: 您需要對每一台已安裝的相機分別套用此變更。\n升級後相機停止運作，該如何修復？ 開啟 Flycap2 選取一台相機，然後按一下「Configure Selected（設定所選項目）」。\n前往「Custom Video Modes（自訂視訊模式）」，在「Packet Size（封包大小）」下方，將數值調整一個單位。\n前往「Advanced Camera Settings（進階相機設定）」，在「Memory Channels（記憶體頻道）」的「Channel 1（頻道 1）」下方，按一下「Save（儲存）」。 疑難排解步驟： 若問題仍未解決，請前往「Custom Video Modes（自訂視訊模式）」並嘗試變更封包大小。若目前設定為最大值，請嘗試將其調低。\n例如，若設定為 9000，請嘗試調低至 4000，然後返回「Advanced Camera Settings（進階相機設定）」，並在「Channel 1（頻道 1）」按一下「Save（儲存）」（在某些情況下，您需要按兩次儲存）。\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "針對 FLIR/Point Grey 相機在升級 Swing Catalyst 後停止運作的疑難排解指南",
    "tags": [
      "Troubleshooting",
      "Flir",
      "Fox-Camera"
    ],
    "title": "FLiR / Point Grey（Blackfly/Chameleon）相機在升級後無法使用",
    "uri": "/sc-support/zh-hant/cameras-video/flir-camera-upgrade-fix/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "由 Initial Force 或其經銷商、代理商所銷售的 Teledyne FLIR（前身為 FLIR 及 Point Grey）相機，以下型號享有 1 年保固：Blackfly S、Blackfly、Chameleon 及 Grasshopper，包含 Point Grey 相機。\n目錄 條款\n申請 RMA 維修或修繕服務\n運送\n運作方式 若您需要維修服務，必須先申請退貨授權（RMA）。若 RMA 獲得核准，我們將指示您如何寄送相機。\n若您是透過當地經銷商購買相機，請直接聯繫您的經銷商。\n建立支援工單，說明您希望送修相機，請準備好相機型號與序號，以及聯絡資訊與帳單資料。\n支援人員將填寫 RMA 申請表並與製造商進行後續聯繫。\n一旦 RMA 獲得核准，您可依支援人員提供的指示寄送相機進行維修。\n維修完成後，相機將寄回給您。\n條款 我們的條款與條件可在我們的網路商店中找到，維修與服務適用 FLIR 的條款。\n保固 Initial Force AS 保證設備在一（1）年期間內不會有材料或工藝上的任何缺陷。保固自購買日期起生效。保固適用於所有依原始設計目的購買、安裝及使用的相機。上述保固僅涵蓋正常使用下產生的缺陷，不包含因誤用、濫用、疏忽、改裝、電力問題、未依產品說明使用、天災，或由製造商及其授權第三方服務提供商以外人員進行不當安裝或修繕所導致的故障或損壞。\n申請退貨授權（RMA） note: 若您是透過經銷商購買相機，請先聯繫該經銷商。\n在您寄送相機進行維修之前，必須先取得退貨授權（RMA）。通常此程序由支援人員協助您完成，您需透過我們的工單系統建立支援工單。我們將與製造商填寫所需的 RMA 表格，並告知您後續步驟。\n若您在開始流程時遇到任何問題或有任何疑問，我們將盡力協助您。\n在我們的說明中心尋求協助 聯繫您所在地區的經銷商\n操作說明 建立新的支援工單，說明您希望送修相機。\n提供支援人員您的聯絡資訊、購買地點及退貨寄送地址。\n一旦 RMA 獲得核准，支援人員將提供您 RMA 表格，請列印並隨附於包裹中。\n在包裹外部寫上 RMA 編號，並／或將其附於運送文件中。\n使用充足的緩衝材料與保護措施，如可能請重複使用原始包裝。\n保險責任由您自行承擔。\n若您收到追蹤號碼，請提供給我們，以便我們將此資訊轉達給製造商。\n若您有任何疑問，請先聯繫我們，以避免造成不必要的損失。\n保固狀態 保固期外的維修費用與保固期內不同；若在保固期內，Initial Force AS 或任何授權經銷商將承擔製造商的退貨費用。\n維修費用可能因相機型號及問題類型而有所不同。我們目前無法提供範例報價。\n運送\n在某些情況下，一旦您已收到 RMA 核准並取得 RMA 編號，即可直接將相機寄送至製造商進行維修。您的支援人員將提供必要的資訊與指示。通常 RMA 本身即包含帳單聯絡人、退貨收件人及最終使用者的相關資訊。\n相機送達我們的服務中心或製造商時，其狀況由您負責，因此務必妥善包裝，以避免運送途中造成進一步損壞。運送保險及任何當地稅費均由您自行負責。\nRMA 通常包含允許產品臨時出口以進行維修的相關資訊，您在收到維修後的產品時，應無需繳納進口稅。\n這取決於相機的購買地點及購買方式。若是透過經銷商購買，請務必告知我們，以確保 RMA 文件填寫正確。\n服務中心 請勿在未獲得支援人員核准的情況下將任何物品寄送至 FLIR！\nTeledyne FLIR Canada 675 Tradewind Drive Units 1 \u0026 2 Ancaster ON, L9G 4V5\nCanada 1-800-613-0507 Option 4\n申請新的 RMA\n更新現有 RMA\n聯繫服務中心\n最後更新：2024-06-25 | 在官方支援網站上檢視",
    "description": "與 Swing Catalyst 搭配使用之 FLIR 相機的保固範圍與服務資訊",
    "tags": [
      "Troubleshooting",
      "Flir",
      "Force-Data"
    ],
    "title": "FLIR 相機保固與服務資訊",
    "uri": "/sc-support/zh-hant/cameras-video/flir-warranty-service/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "本文介紹如何對 Force Plate 問題進行疑難排解。較舊的 Motion Plate（例如 Motion Plate 3 和 4）不在本文涵蓋範圍內。\n若已被 Windows 識別，該板將在裝置管理員中顯示為 USB Serial Converter。\n常見問題：\n四個支腳未能全部正確接觸地面。舊款板材搭配舊式底部導軌時，支腳可能無法充分穿出導軌，客戶需確認所有支腳均已穿出導軌。\n因纜線不良，板材未顯示於裝置管理員中。\n罕見問題：\nUSB 板損壞，曾見於系列：AM6147。可能原因包括靜電或雷擊等。 將板材連接至電腦時，聽不到 USB 連接提示音，裝置管理員中也未顯示任何裝置。SwingCatalyst 偵測不到任何東西。\n資料通道出現雜訊，導致資料雜亂。（常見原因為 USB 集線器或同一集線器上的相鄰 USB 裝置。）請確認所使用的 USB 纜線至少有一個磁環（磁環作為電氣扼流器，可抑制高頻範圍的雜訊）。\n若供給 USB 的電源帶有雜訊，即可能發生此情況。此外，若供給電腦的電源帶有雜訊，則可能影響更多資料通道。\n2012 年以前、不支援 AVX 及 AVX2 的 CPU，在 SwingCatalyst 10.2.4 及更新版本中將無法支援 Bertec 裝置。\n以下為更多雜訊資料的範例，其中 COP 軌跡出現波紋，且大多數乃至全部資料通道亦受影響。此情況最常見的原因是具備雜訊開關模式電源供應器的有源 USB 集線器。\n如何修復雜訊力資料？ 若您使用的是筆記型電腦，請嘗試將其從交流電源拔除，並重新錄製一段錄製，雜訊是否消失？若是，這表示交流電源轉接器本身或市電電源本身存在問題。連接至同一市電線路的相鄰設備，有可能將雜訊引入市電配線中。\n若您有有源 USB 集線器、由市電供電的筆電散熱風扇或其他連接至電腦且由市電供電的設備，請嘗試將這些設備斷開或拔除。\n若您工作室／擊球準備環境中的設備均未引入雜訊，則問題可能來自外部來源。在此情況下，能夠存取當地的電路箱以切斷鄰近設備的電源，將有助於進一步的疑難排解。\n最後更新：2024-08-23 | 在官方支援網站上檢視",
    "description": "診斷並解決 Swing Catalyst 中 Force Plate 問題的指南，包括降低雜訊與連線疑難排解",
    "tags": [
      "Troubleshooting",
      "Usb-Camera",
      "Motion-Plate",
      "Force-Data"
    ],
    "title": "Force Plate 技術疑難排解指南",
    "uri": "/sc-support/zh-hant/hardware/force-plate-troubleshooting/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Force-Data",
    "uri": "/sc-support/zh-hant/tags/force-data/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Fox-Camera",
    "uri": "/sc-support/zh-hant/tags/fox-camera/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Getting-Started",
    "uri": "/sc-support/zh-hant/tags/getting-started/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Gige-Camera",
    "uri": "/sc-support/zh-hant/tags/gige-camera/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Home",
    "uri": "/sc-support/zh-hant/tags/home/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Launch-Monitor",
    "uri": "/sc-support/zh-hant/tags/launch-monitor/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Licensing",
    "uri": "/sc-support/zh-hant/tags/licensing/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Lynx-Camera",
    "uri": "/sc-support/zh-hant/tags/lynx-camera/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Motion-Capture",
    "uri": "/sc-support/zh-hant/tags/motion-capture/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Motion-Plate",
    "uri": "/sc-support/zh-hant/tags/motion-plate/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Online",
    "uri": "/sc-support/zh-hant/tags/online/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "簡介 Swing Catalyst 需要特定的硬體規格才能與不同的相機和感測器搭配使用。如果您的桌上型電腦不符合此標準，可以透過 PCI 擴充卡進行擴充。本文章有助於了解不同的 PCI 卡插槽，以及哪些卡片適合安裝於其中。\n適用對象 使用 CCTV、GigE 或 USB3 相機搭配桌上型電腦的使用者。\n不適用對象 筆記型電腦使用者。相關主題為 PCMCIA、PC card 或 ExpressCard 類型的擴充卡。這類擴充卡已不太常見，通常已被 USB 裝置所取代。\n何時需要 PCI 卡插槽 PC 上有多種不同的卡槽，在 Swing Catalyst 中，我們通常將擴充插槽用於：\nCCTV 相機：需要 Videum 捕捉卡\nGigE 相機：需要高階千兆乙太網路埠，可由 Intel Pro/1000 CT 卡等卡片提供。\nUSB3 相機：並非所有 PC 都配備 USB3，因此可透過擴充卡新增此功能。\n請參閱建議的電腦規格，了解您可能需要哪些額外硬體。\nPCI 卡插槽比較 截至 2012 年，兩種最常見的 PCI 卡插槽分別是用於擴充卡的 PCI Express x1，以及用於顯示卡的 PCI Express x16。PCI 插槽屬於較舊的規格，預計將隨時間逐步淘汰。\nPCI 卡範例 範例：PCI x1 卡 範例：PCI x4 卡 範例：PCI x8 卡 範例：PCI x16 卡（通常保留給顯示卡使用） 最後更新：2021-06-29 | 在官方支援網站上檢視",
    "description": "Swing Catalyst 需要特定的硬體規格才能與不同的相機和感測器搭配使用。如果您的桌上型電腦不符合此標準，可以透過 PCI 擴充卡進行擴充…",
    "tags": [
      "Gige-Camera",
      "Usb-Camera"
    ],
    "title": "PCI / PCI Express 插槽之間的差異",
    "uri": "/sc-support/zh-hant/cameras-video/pci-express-slots/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Pressure-Data",
    "uri": "/sc-support/zh-hant/tags/pressure-data/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Subscription",
    "uri": "/sc-support/zh-hant/tags/subscription/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 入門指南",
    "content": "簡介 本文章是 Swing Catalyst 的使用者指南。\nnote: Swing Catalyst 的不同版本之間存在功能差異。這表示並非所有螢幕截圖都適用於您的授權。\n系統需求 有效的 Swing Catalyst 訂閱。\n電腦規格：\n請注意 Swing Catalyst 只能在 Windows 10/11 上執行。\nSwing Catalyst 建議規格 開始使用 本指南分為不同的類別和步驟。\n安裝軟體和授權金鑰\n連接一或多部相機\n連接 Launch Monitor\n建立使用者\n分析揮桿\n捕捉\n版面配置 儲存我的最愛版面配置\n麥克風觸發器\n繪圖工具\n檔案總管\n資源與疑難排解\n安裝軟體和授權金鑰 每個新的 Swing Catalyst 授權都附帶一封說明電子郵件。如果找不到該電子郵件，請檢查您的垃圾郵件資料夾或搜尋收件匣。\n按照說明下載並安裝 Swing Catalyst。安裝完成後，在軟體出現提示時輸入授權金鑰。\n範例電子郵件：\n無法安裝授權金鑰？請參閱我們的逐步文章。\n連接一或多部相機 note: 並非所有授權都支援即時串流相機，例如 Swing Catalyst Lite。\n請參閱此支援的相機清單。\n如果您使用 FLIR、IDS 或 AVT 相機，可能需要下載並安裝適當的驅動程式。請查看我們的驅動程式部分。如果您使用 FLIR 相機，請參閱我們的專用相機指南。\nnote: 我們建議在執行任何相機相關驅動程式安裝之前，Swing Catalyst 未執行。驅動程式安裝完成後，您可能需要重新啟動電腦。\n從主選單中，點選齒輪圖示可找到設定。\n偵測到的相機將自動列在相機清單中。\n若要使用相機，需要為其指定一個角度。\n點選停用的圖示以選擇角度，然後將「OFF」變更為「ON」以啟用相機。\n連接 Launch Monitor note: Launch Monitor 支援取決於授權類型。如果您無法啟用此部分，是因為您的授權不支援 Launch Monitor。在這種情況下，您可能需要考慮將授權類型從 BASIC 升級到 PRO：https://shop-world.swingcatalyst.com/products/swing-catalyst-software-2019\n在「硬體設定」下，您可以在支援的 Launch Monitor 中選擇。\n在清單中選擇您的 Launch Monitor，將其切換為「ON」並啟用「用作觸發器」。\n確保 Launch Monitor 已開啟並連接到電腦。\n我們始終建議盡可能使用有線連接，例如 USB 或乙太網而非 WiFi。\n我們始終建議盡可能使用有線連接，例如 USB 或乙太網而非 WiFi。\n如需更詳細的 Launch Monitor 設定說明，請參閱這些指南：\nForesight GCQuad/GCHawk/GC3\nFlightscope X-Series\nFlightScope Mevo+\nFullSwing (E6)\n如果您選擇 Launch Monitor 作為觸發裝置，在捕捉模式下它會自動錄製您的揮桿。如果您沒有 Launch Monitor，沒關係，您可以改用麥克風作為觸發器！\n建立新使用者 按照以下步驟建立使用者並錄製揮桿。\n從主選單中，按一下「開始」\n按一下「選擇使用者」下拉按鈕，然後按一下「新增」：\nnote: 系統會根據您的授權詳細資訊自動產生使用者。如果您想編輯這些詳細資訊或新增使用者，可以分別按一下「新增」或「編輯」。\n輸入名稱並按一下「儲存」\n某些家庭版授權有使用者數量上限限制，這限制了可以在 Swing Catalyst 中儲存多少個使用者設定檔。\n分析揮桿 在這個 Ian Poulter 的範例螢幕擷取畫面中，我們使用兩台高速相機、Motion Plate 和 Foresight GCQuad Launch Monitor 錄製了一個揮桿。\n備註：職業巡迴賽揮桿可以輕鬆從我們的網上商店購買！ 讓我們看看 Swing Catalyst 介面以及某些選單和按鈕。\n分析選單工具列\n從左到右：選單、檔案總管、切換使用者、捕捉、捕捉選項和版面配置。\nSwing Catalyst 圖示也是選單按鈕，可快速存取設定和結束目前工作階段。\n切換使用者 捕捉 為了錄製揮桿，您需要處於捕捉模式。\n按一下「捕捉」按鈕時，您會自動從播放模式切換到捕捉模式。\n綠色的「捕捉就緒」圖示表示系統已準備好捕捉。在家庭版中，啟動工作階段時您會自動進入此模式！\n「捕捉就緒」只是表示捕捉模式已準備就緒，Swing Catalyst 正在主動串流資料。只有在觸發事件發生時才會儲存（例如手動觸發、Launch Monitor、麥克風）。\n捕捉選項 選擇不同的觸發器選項，例如麥克風或 Launch Monitor，並變更捕捉模式。\n版面配置 您可以在 Swing Catalyst 中使用「版面配置」下拉按鈕選擇不同的版面配置。\nSwing Catalyst 會分別記住在播放和捕捉模式中最後使用的版面配置。\n如圖示所示，版面配置在顯示的內容和方式上有一些差異。\n具有 2 個相機的「單一錄製」版面配置範例。\n具有一個相機的「比較」模式版面配置：\n此處的錄製內容被分成兩個獨立的「檢視埠」、「A」和「B」。如果我們仔細查看螢幕底部，先前錄製（或開啟）的錄製內容會出現在堆疊中。\n堆疊 堆疊顯示最後的錄製內容，最新的錄製內容在最左邊。\n在此範例中，橙色 A 和錄製內容的底線表示此錄製內容在「檢視埠 A」中開啟。\n您可以透過按一下錄製內容快速查看其相關資訊：\n也可以為錄製內容評分（1-3 顆星）。例如，您可以在檔案總管中依評分進行篩選\n相機版面配置選擇 在相同的下拉選單「版面配置」中，您可以根據版面配置選擇要顯示的不同相機角度數量。在播放模式（檢視錄製的揮桿時），相機選擇僅取決於建立錄製內容時使用的相機數量。\n在捕捉模式中，可見相機的數量取決於您的系統上啟用的相機數量，以及授權是否支援您要使用的相機數量。\n切換相機角度 如果您有多個相機的錄製內容，可以透過按一下相機圖示來變更檢視的相機。\n也可以從這裡進行一些小的相機調整，例如鏡像和旋轉相機角度。這些變更僅適用於錄製內容，如果您想比較左手使用者和右手使用者等情況，可能會很有幫助。\n繪圖工具 如上面的螢幕擷取畫面所示，繪圖工具位於軟體的左側。\n繪圖工具可讓您在影片影像上方繪圖，包括已錄製的影片，以及即時影片「摘要」（在捕捉模式時）。繪圖工具的選擇可能會因授權而異。\n請注意：繪圖不會儲存到錄製內容本身，但它們會根據工作階段被記住，因此可以在一個錄製內容上繪圖，然後開啟其他錄製內容（例如先前的揮桿），而繪圖保持在相同位置。\n捕捉和播放的情況也相同，繪圖位置會被儲存，但會獨立儲存在捕捉和播放中，不會儲存到錄製內容本身。\n線工具可選擇不同的線型，標準「線」允許您在任何點之間建立直線。\n箭頭工具\n自由手繪，位於箭頭工具下方，可讓您自由繪圖。在功能上，大多數繪圖工具是相似的。同樣，有三種形狀可供選擇：圓形、矩形和「人形」。這些通常用於跟蹤整個活動類型中的動作。\n繪圖工具是展示整個揮桿過程中相對於初始站姿偏差程度的好方法。\n有三種不同的線條粗細可供選擇。\n不同的顏色讓您更容易區分不同的線條。\n角度工具\n角度工具可用於估算角度，例如高爾夫揮桿中擊球時腕部的角度。\n文字工具\n縮放與平移工具 工具列底部繪圖工具下方是縮放和平移工具以及「填充視頻檢視」按鈕。\n您也可以按住 Ctrl 鍵並同時滾動滑鼠滾輪來縮放和移動視頻影像。\n保存最愛版面配置 許多使用者根據工作內容（教學、審閱、比較、Launch Monitor 焦點、力量/壓力焦點等）在不同的版面配置之間切換。每次重新建置設定（變更版面配置類型、相機佈局和數據框中顯示的內容）會很耗時。\n最愛讓您保存目前的設定，之後可以立即切換回來。最愛可包括：\n選定的版面配置\n選擇的相機版面配置\n數據框中顯示的內容（圖表/視覺效果）\n如何保存最愛版面配置 按照您想要的方式設定螢幕：\n選擇版面配置（例如單一錄製、比較、數據中心等）\n選擇相機數量\n按照您的偏好配置數據框內容\n點擊頂部功能表中的版面配置以開啟版面配置下拉菜單。\n在最愛部分中，點擊**+ 保存目前設定**。\n輸入最愛的名稱（例如：動力序列、發球監測數據、課程審閱等）。\n點擊保存。\n您的新最愛現在將顯示在最愛列表中。\n如何在最愛之間切換 點擊頂部功能表中的版面配置以開啟版面配置下拉菜單。\n在最愛下，點擊您想要使用的最愛。\nSwing Catalyst 將立即應用保存的設定（版面配置、相機版面配置和數據框內容），讓您可以快速在不同的教練或分析工作流程之間移動。\n附註和提示 Swing Catalyst 仍會像以前一樣在播放和錄製模式中記住您最後使用的版面配置。最愛只是在您需要時快速跳到特定設定的更快方式。\n在播放模式中，可用的相機視角取決於錄製時使用了多少台相機。在錄製模式中，可用的相機視角取決於啟用了多少台相機以及您的授權所支援的內容。\n使用能夠描述設定用途的清晰名稱（例如 壓力與站姿、球桿數據、快速比較），這樣在工作階段中切換就毫不費力\n檔案總管 您可以輕鬆地在此管理您的錄製內容。檔案總管分為三個「區段」：\n左側是在系統中註冊的使用者，中間是該使用者的所有錄製內容，右側是預覽區段。\n錄製內容會自動按工作階段分組，並按日期排序。\n點擊一個揮桿，它會自動在「預覽」區段（右側）中預覽。 您也可以透過右鍵點擊並選擇要在哪個視窗中開啟錄製內容，或者將錄製內容拖放到底部的「在此放置錄製內容」區域。\n檔案總管選單的特寫視圖 濾波處理 可以根據不同的收集參數來濾波錄製內容，例如：\n運動（雖然 Swing Catalyst 僅用於高爾夫，但可以查看來自不同運動的錄製內容）\n球桿類型\n發球監測數據（飛行距離、旋轉速率或撞擊係數）\n評分（1-3 星評分）\n此螢幕截圖顯示了一些可用的濾波選項。\n資源與疑難排解 最常見的問題 以下是使用者面臨的最常見問題及一些解決方案。\nSwing Catalyst 會在捕捉模式時於螢幕右下角顯示不同嚴重程度的通知。\n錄製狀態由進度圓圈指示，「放棄錄製」按鈕可讓您取消錄製。\n進度指示器可展開以查看目前編碼/處理的詳細資訊以及已連接裝置的任何問題。\n資料不足通知 在這種情況下，與感測板的連接不佳，Swing Catalyst 未收到所需的資料量。\n最後更新：2026-01-06 | 在官方支援網站上查看",
    "description": "本文章是 Swing Catalyst 的使用者指南。",
    "tags": [
      "Getting-Started",
      "User-Guide"
    ],
    "title": "Swing Catalyst - 使用者指南",
    "uri": "/sc-support/zh-hant/getting-started/user-guide/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "簡介 在運動分析與動作擷取的領域中，視覺資料的清晰度與精確度至關重要。SwingCatalyst 的最新功能——自動鏡頭畸變校正，正是對這種追求完美精神的體現。此功能透過校正鏡頭畸變（相機系統中常見的問題），大幅提升捕捉影像的準確性。透過確保動作呈現如實反映真實情況，此工具對於追求詳細且精確動作分析的教練與運動員而言不可或缺。本文旨在提供如何有效運用自動鏡頭畸變校正功能的完整指南，使其成為您分析工具庫中易於使用且功能強大的利器。\n*此功能適用於 10.3.1 及更高版本\n準備 Aruco 板 首先，依照以下任一方式準備您的 Aruco 板：\n專業印刷板： 即將在 SwingCatalyst 商店上架。\n居家列印板： 將 Aruco 板列印並固定在紙板等硬質平面上，確保完全平整。\n使用平板電腦： 在平板電腦上載入 Aruco 板 PDF，建議使用標準 iPad 尺寸或更大的裝置。\nAruco 板可作為 PDF 檔案 取得。\n逐步校準指南 步驟 1：準備 Aruco 板 依照上述任一方式選擇並準備您的 Aruco 板。\n步驟 2：進入功能 開啟 SwingCatalyst 設定： 透過開始選單或分析模式主選單按鈕進入設定選單。\n相機設定： 開啟您希望校準的相機進階設定。\n校準分頁： 在進階對話框中，點選「校準」分頁。\n步驟 3：開始校準\n啟動校準：按下「開始校準」按鈕。\n步驟 4：執行校準 觀察回饋指標： 移動 Aruco 板時，監測「覆蓋率」百分比與「校準誤差」數值。 移動板子： 輕緩地在相機視野的不同區域移動並傾斜板子。 目標指標： 以至少 80% 的覆蓋率及低於 1 的校準誤差為目標，以達到最佳校準品質。 持續調整直至達標： 持續調整板子的位置，直到達到理想的指標為止。\n步驟 5：完成校準\n停止校準： 一旦覆蓋率與校準誤差均在目標範圍內，點選「停止校準」。 軟體處理校正： 軟體將計算並套用必要的校正。 驗證校準： 檢查即時影像畫面以確認校準品質。\n有效校準的技巧\n平穩、緩慢的移動： 以避免模糊並確保準確性。 全面覆蓋： 將板子移遍整個視野範圍。 多樣化角度與距離： 傾斜並旋轉板子，使相機接觸到不同的拍攝視角。 充足的光線： 在光線充足的環境中進行校準，以防止陰影或反光。\n結語 SwingCatalyst 的自動鏡頭畸變校正功能搭配即時回饋系統，是運動動作分析領域的重大進展。透過精確遵循這些步驟，並以最佳覆蓋率與校準誤差指標為目標，使用者可有效地校準其相機。此流程將產出更精確、無畸變的影片，提升動作分析的品質，並有助於改善運動員的運動性能。\n最後更新：2025-05-02 | 在官方支援網站上檢視",
    "description": "在運動分析與動作擷取的領域中，視覺資料的清晰度與精確度至關重要。SwingCatalyst 的最新功能——自動鏡頭畸變校正，正是對這種追求完美精神的體現。此功能透過校正鏡頭畸變（相機系統中常見的問題）...",
    "tags": [
      "Troubleshooting",
      "Motion-Capture"
    ],
    "title": "Swing Catalyst 中的自動鏡頭畸變校正：提升您的視覺體驗",
    "uri": "/sc-support/zh-hant/cameras-video/lens-distortion-correction/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "Swing Catalyst 與 Motion Catalyst 的說明文章與文件",
    "tags": [
      "Home"
    ],
    "title": "Swing Catalyst 支援",
    "uri": "/sc-support/zh-hant/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "Swing Catalyst 動作擷取（MoCap）指南 簡介 Swing Catalyst 動作擷取（MoCap）是一套功能強大的 2D 無標記動作擷取系統，專為提升您的高爾夫揮桿分析而設計。此功能提供近即時追蹤、動作分析及進階視覺化工具，協助您改善球技。\n注意： 動作擷取功能可能並非適用於所有授權類型。請參閱我們的 常見問題 以獲取更多資訊。\n快速連結 動作擷取常見問題\n動作擷取設定指南\n元件安裝指南\n系統需求\n鏡頭畸變校正指南\n系統需求 必要元件： 有效的 Swing Catalyst Pro 或 Pro+ 授權\nSwing Catalyst 版本 25.1 或更新版本\n已在元件目錄中安裝所需元件\n符合我們建議規格的相容電腦\n一部或多部相容攝影機\n初始設定與配置 建議設定步驟： 依照我們的安裝指南安裝所需元件\n使用我們的詳細設定指南進行配置\n確保攝影機位置擺放正確（請參閱下方影片）\n執行自動鏡頭校準以達到最佳精確度，並降低鏡頭畸變的影響\n影響精確度的因素 重要注意事項 攝影機品質與設定 高解析度、穩定的影像對於精確追蹤至關重要。請避免使用低品質或不穩定的攝影機設定。\n光線條件 確保光線均勻且分布良好。避免燈光閃爍及強烈陰影。\n最佳攝影機角度 以下角度可獲得最佳效果：\n正面右側角度\n正面左側角度\n球道線視角（需有適當照明）\n請注意以下情況：\n當身體部位被遮擋，或啟用 TensorRT 的 FP16 時，精確度可能降低。\nDLP 投影機或閃爍燈光可能對精確度造成不良影響，尤其是在球道線視角下，請參閱我們關於如何降低閃爍影響的文章\n開始使用 啟用動作擷取 在繼續操作之前，請確認您已遵循建議的設定步驟並安裝了所需元件。\n在頂部工具列找到 MoCap 按鈕\n點擊以切換功能為開啟狀態。\n開啟骨骼檢視以確認功能正常運作。\nMoCap 工具列功能 檢視控制 切換骨骼疊加的顯示狀態\n顯示/隱藏質量中心（COM）標記點\n分析工具 標記點角度工具 透過選取特定標記點來測量並顯示關節角度\n標記點軌跡工具 追蹤並視覺化所選點的動作路徑\n直線工具 在任意兩個標記點之間建立參考線以進行平面分析\n清除工具 移除所有作用中的測量結果與視覺化內容\n視覺化範例 可點擊的關鍵點： 將滑鼠懸停於關鍵點上時，會以白色指示標誌加以識別。\n質量中心追蹤： 隱藏骨骼後單獨顯示 CoM 標記點\n關節角度分析： 搭配骨骼疊加的即時角度測量\n動作追蹤： 腕部動作路徑視覺化\n平面分析： 用於動作研究的自訂參考線\n為現有錄製新增動作擷取 若您有現有錄製但缺少動作擷取資料，可依照以下步驟為其補充執行 MoCap 分析：\n在檔案總管中找到您希望新增 MoCap 的錄製並開啟\n點擊分析選單上的動作擷取按鈕以展開下拉選單\n點擊「Process MoCap」按鈕\n請注意，執行動作擷取分析可能需要數分鐘，尤其是第一次執行時，因為 SwingCatalyst 需要載入所需的動作擷取資料模型。在此期間，不建議退出分析模式或開始捕捉，因為處理過程需要大量硬體資源，並會對 GPU（顯示卡）造成負擔。此期間性能可能會受到影響。\n模型載入完成後，實際分析程序將開始執行，並會顯示進度列以呈現目前的分析進度。\n若您希望取消 MoCap 處理，請點擊 MoCap 下拉選單中的「Cancel」按鈕。請注意，當 SwingCatalyst 正在載入 MoCap 模型時，此按鈕不可用，因為該程序無法取消。\n處理完成後，畫面頂部將顯示訊息提示，且目前開啟的錄製將自動啟用動作擷取功能。\n若您希望日後重新執行動作擷取分析，例如使用不同的動作擷取設定（可在：設定 -\u003e 影像與捕捉 中調整），可在分析模式下開啟該錄製時，點擊 MoCap 下拉選單中的「Reprocess MoCap」按鈕。\n已開啟但不含 MoCap 資料之錄製的無標記動作擷取設定\n正在對已開啟的錄製進行動作擷取處理\n已開啟且含有 MoCap 資料之錄製的無標記動作擷取設定\n疑難排解 若您在使用 Swing Catalyst 動作擷取（MoCap）系統時遇到問題，請參考以下常見問題及其解決方案：\n1. MoCap 功能不可用\n問題：動作擷取功能無法存取。\n解決方案：\n授權驗證：請確認您擁有有效的 Swing Catalyst Pro 或 Pro+ 訂閱，因為 MoCap 需要這些授權類型。\n軟體版本：確認您的 Swing Catalyst 軟體已更新至版本 25.1 或更新版本，該版本包含 MoCap 功能。\n2. 處理速度緩慢\n問題：啟用 MoCap 後，錄製處理時間比預期更長。\n解決方案：\n執行提供者：為您的硬體選擇最佳的執行提供者。\n對於 NVIDIA GPU，建議使用 TensorRT 以獲得最佳性能。\n嘗試為 TensorRT 啟用 FP16（但請注意精確度可能會降低）。 批次大小：在 MoCap 設定中調整批次大小。批次大小 32 為最佳值，但若遇到記憶體問題，可考慮降低批次大小。\n硬體規格：確認您的系統符合建議規格，尤其是 GPU 需求。升級至更強大的 GPU 可提升處理速度。\n3. 骨骼不顯示\n問題：錄製期間骨骼疊加未出現。\n解決方案：\n人物偵測：人物偵測可能失敗。請嘗試關閉再開啟捕捉模式，或停用後重新啟用 MoCap。\n偵測模型：若正在使用 Nano 偵測模型，請切換至 Medium 模型以提升精確度。進行此變更後請重新啟動 SwingCatalyst。\n攝影機設定：確保攝影機依照建議指南正確定位並完成校準。適當的攝影機設定對於精確的人物偵測至關重要。\n4. 動作擷取資料不準確\n問題：擷取的動作資料不準確或不一致。\n解決方案：\n光線條件：在錄製區域維持均勻且分布良好的光線。避免燈光閃爍及強烈陰影，因為這些情況會影響偵測精確度。\n攝影機品質：確保攝影機在錄製期間不會移動，因為移動可能導致追蹤效果不佳。請重新檢視您的取景方式，確認攝影機位置及鏡頭設定是否正確。\n執行提供者設定：若您已啟用 TensorRT 並勾選「FP16 for TensorRT」，請考慮取消勾選，以確認精確度是否有所改善。\n若不準確的情況持續發生，請考慮向我們提交支援工單。 5. 動作擷取處理失敗\n問題：處理失敗\n解決方案：\n執行提供者： 嘗試更換執行提供者。DirectML 具有最佳相容性。\n記憶體消耗： 請確認您未耗盡記憶體。\n開啟 Windows 工作管理員並前往性能索引標籤。\n監控記憶體使用量及 GPU 記憶體使用量，以確認是否即將耗盡記憶體。\n若記憶體不足，請嘗試使用較低的批次大小，或若您正在使用 TensorRT 執行提供者，可嘗試啟用「FP16 for TensorRT」。\n電腦規格： 您的電腦是否符合執行 MoCap 的最低需求？\n降低攝影機幀速率： 降低幀速率可減少需處理的幀數，從而降低系統負擔。\n關閉 MoCap： 嘗試關閉 MoCap 功能，以確認錯誤是否與 MoCap 功能本身無關。\n最後更新：2025-04-14 | 在官方支援網站上檢視",
    "description": "Swing Catalyst 動作擷取（MoCap）是一套功能強大的 2D 無標記動作擷取系統，專為提升您的高爾夫揮桿分析而設計。此功能提供...",
    "tags": [
      "Troubleshooting",
      "Subscription",
      "Licensing",
      "Motion-Capture"
    ],
    "title": "Swing Catalyst 動作擷取使用者指南",
    "uri": "/sc-support/zh-hant/software-features/motion-capture-guide/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "Swing Catalyst 動作擷取 (MoCap) 常見問題 問：什麼是 Swing Catalyst 動作擷取？\n答：Swing Catalyst 動作擷取 (MoCap) 是一種無標記點的 2D動作捕捉技術，透過攝影機與 AI 演算法分析高爾夫動作，無需任何實體標記點或感測器。\n問：主要功能有哪些？\n答：Swing Catalyst 動作擷取提供以下功能：\n智慧人體偵測\n精確的 2D姿態估計，最多可偵測 26 個關鍵點\n近即時姿態視覺化，延遲極低\n帶有關節標記點的骨骼疊加顯示\nCoM（質量中心）視覺化\n關節角度測量\n自訂關節對關節連線視覺化\n特定關節的動作軌跡追蹤\n問：系統需求為何？\n有效的 Swing Catalyst Pro 或 Pro+ 訂閱（版本 25.1 及更新版本）\n符合建議規格的相容電腦\n一台或多台支援的攝影機\n問：此功能在哪個版本中提供？\n答：Swing Catalyst 動作擷取功能於版本 25.1 中提供。\n問：支援哪些攝影機配置？\n最多支援 4 台攝影機同時使用（不含俯視角度）\n相容角度：\n正面右側角度\n正面左側角度\n球道線視角\n注意：不支援俯視角度及自由角度\n問：建議使用哪些顯示卡？\n答：針對多攝影機或高 FPS 設定：\n較新一代且擁有更多 VRAM（8-12GB 或更多）的 NVIDIA 顯示卡通常能提供更佳性能，尤其是在使用 TensorRT 或 CUDA 搭配較大批次大小時。以下列出的 GPU 型號亦包含 NVIDIA 的 Ti、Ti Super 及 Super 變體。\nNVIDIA RTX 3070、3080、3090\nNVIDIA RTX 4060、4070、4080、4090\nNVIDIA RTX 5060、5070、5080、5090（不支援 Swing Catalyst 25.1，僅支援 25.2）\n問：建議的設定為何？\n執行提供者優先順序（NVIDIA）：TensorRT → CUDA → DirectML\nAMD 或 Intel GPU 使用者請使用 DirectML\n批次大小：取決於攝影機數量及電腦的獨立 GPU 記憶體，請參閱我們的支援文章\n可選優化項目：\n啟用 Nano 偵測模型（若非預設值）\nFP16 可進一步提升性能（此選項會降低模型精確度，目前僅適用於 TensorRT） 問：如何優化攝影機設定以獲得最佳效果？\n完成相機校準流程\n確保適當的攝影機對齊與定位（例如：確保受試者置中，且攝影機保持水平）\n維持一致且分佈均勻的照明\n問：若錄製處理速度緩慢，應該怎麼做？\n確認執行提供者的選擇（建議 NVIDIA 顯示卡使用 TensorRT）\n初次 TensorRT 優化可能需要數分鐘；後續錄製將會更快\n考慮啟用 Nano 偵測模型 以提升性能\n問：是否有任何限制？\n答：有的。一般而言，快速動作與複雜姿態偶爾可能導致追蹤錯誤。此功能目前仍持續開發中，相關規格可能有所變動。\n問：如何啟用 MoCap？\n確認您的軟體已是最新版本（版本 25.1 或更新版本）\n在頂部選單列中找到 MoCap 按鈕\n點擊以切換功能開啟/關閉\n注意：MoCap 功能可在捕捉或播放模式下獨立開啟/關閉。\n如需更多資訊，請參閱我們的使用者指南。\n問：支援哪些攝影機？\n答：所有 Swing Catalyst 支援的即時串流攝影機均可使用。請參閱我們的支援攝影機文章。\n問：處理時間大約需要多久？\n答：處理時間在很大程度上取決於硬體配置。\n顯示卡類型、批次大小、執行提供者等因素都會對處理速度產生顯著影響。啟用 MoCap 後，我們估計錄製的處理時間（從觸發錄製到可開啟檔案的時間）將比未啟用時增加約 30-50%。\n若您需要連續進行大量錄製，可先關閉 MoCap 進行錄製，待稍後開啟錄製檔案時再開啟 MoCap，然後執行重新處理步驟。\n問：雖然 MoCap 已啟用且骨骼檢視已開啟，但骨骼卻不顯示、閃爍或偶爾消失。\n答：在此情況下，很可能是人體偵測失敗所致。\n嘗試切換捕捉模式的開啟/關閉\n嘗試切換 MoCap 的關閉/開啟\n嘗試將偵測模型從 Nano 更改為 Medium，詳情請參閱我們的設定說明\n確認您的攝影機已依照我們的建議正確設定\n最後更新：2025-05-16 | 在官方支援網站上查看",
    "description": "問：什麼是 Swing Catalyst 動作擷取？",
    "tags": [
      "Troubleshooting",
      "Subscription",
      "Motion-Capture"
    ],
    "title": "Swing Catalyst 動作擷取常見問題",
    "uri": "/sc-support/zh-hant/software-features/motion-capture-faq/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "簡介 本文說明如何在 Swing Catalyst 中設定及配置動作擷取功能。此功能可能並非所有授權類型皆可使用，請參閱我們的動作擷取常見問題以取得更多資訊。\n需求\n元件需安裝至元件目錄中。 您的電腦需符合我們的 PC 規格建議，其中最重要的是顯示卡須符合我們的建議規格。\n配置 動作擷取設定可在主設定選單的「Video \u0026 Capture」區段中找到。在此您可以選擇或變更執行提供者及批次大小。\n我們建議根據您啟用的攝影機數量，將批次大小設定在 12 至 24 之間。 建議的執行提供者 NVIDIA NVIDIA RTX 3060 或更新款 GPU -\u003e TensorRT\n若 TensorRT 無法運作，請嘗試 CUDA\n其他顯示卡 DirectML 預設值為 DirectML，因為它是相容性最高的提供者，但也是速度最慢的。\n在基準測試中，我們發現 TensorRT 是所有執行提供者中性能最佳的。\nTensorRT 平均速度（比 DirectML 快 35-45%，比 CUDA 快 20-25%）\nCUDA 相較於 DirectML 提供適度的性能提升（平均約 10-12%）\nCUDA 使用的 GPU 記憶體（VRAM）顯著多於 TensorRT，若您使用 CUDA，請嘗試降低批次大小\n元件下載 若您選擇尚未安裝的元件，系統將提示您下載。\n若要使用 TensorRT 或 CUDA，您需要先下載相應元件。\nnote: 此功能僅適用於 25.2 版本。\n建議的批次大小 根據我們的測試，較大的批次大小可提升性能。針對一般 2-3 台攝影機的配置，我們建議批次大小設定在 16 至 24 之間。若您同時使用其他需要圖形資源的軟體，嘗試較小的批次大小可能更為有利。最終最佳的批次大小可能取決於您的工作流程，以及除 Swing Catalyst 之外還有哪些程式正在執行。\n進階設定 執行提供者設定下方為進階設定，您可以在此變更偵測模型或啟用「FP16」。\n將偵測模型從 Medium 改為 Nano，可降低顯示卡的記憶體使用量並提升性能，但代價是準確度會降低。\n若您難以獲得良好的偵測效果，請嘗試將模型改為 Medium，重新啟動 Swing Catalyst 後再試一次。\n預設偵測模型為 Nano\n「FP16 for TensorRT」預設為未勾選\nFP16 使用 FP16 可降低記憶體使用量並提升性能（但代價是準確度會降低）。\n在測試中，我們發現 FP16 可將性能提升 20-35%。\n與預設的 FP32 相比，它在不同錄製之間可能產生較不一致的結果。若您遇到性能問題或記憶體不足的情況，值得嘗試此選項。\n性能比較 TensorRT（紫色）、CUDA（粉紅色）及 DirectML（綠色），由左至右排列。Y 軸（FPS）代表動作擷取模型每秒可處理的幀數，與您攝影機的幀速率並無直接關聯。\n性能指標（FPS）代表每秒處理的幀數，數值越高表示處理速度越快。如上圖所示，CUDA 與 TensorRT 的性能幾乎呈線性關係。例如，從一台攝影機增加至兩台，性能幾乎減半。此性能下降在較新款的 NVIDIA 顯示卡上較不明顯。\n最後更新：2025-05-16 | 在官方支援網站上檢視",
    "description": "本文說明如何在 Swing Catalyst 中設定及配置動作擷取功能。此功能可能並非所有授權類型皆可使用，請參閱我們的[動作擷取常見問題](__PH5__)以取得更多資訊。",
    "tags": [
      "Troubleshooting",
      "Fox-Camera",
      "Licensing",
      "Motion-Capture"
    ],
    "title": "Swing Catalyst 動作擷取設定",
    "uri": "/sc-support/zh-hant/software-features/motion-capture-settings/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "SwingCatalyst 動作擷取工具使用者重要聲明\n感謝您選擇我們的動作追蹤解決方案進行高爾夫揮桿分析。為確保您獲得最佳使用體驗，並充分了解本工具的功能與限制，請仔細閱讀以下重要聲明：\n準確性與可靠性\n量化測試有限：我們的動作追蹤系統僅經過有限的量化測試。因此，其分析的準確性與可靠性在某些應用情境下可能無法達到專業標準。\n預訓練模型：本工具使用未針對高爾夫揮桿分析進行專項優化的預訓練模型（RTMPose 與 RTMDet）。因此，動作追蹤結果可能存在不準確或不一致的情況，尤其是在模型訓練資料不支援的相機視角下。如需進一步了解預訓練模型，請參閱以下參考資料：\nRTMDet（人物偵測）：2212.07784\nRTMPose（人物身體關鍵點）：2303.07399、mmpose/projects/rtmpose at main · open-mmlab/mmpose · GitHub 預訓練模型的限制\n通用訓練資料：底層模型以通用 Dataset 進行訓練，可能無法捕捉高爾夫揮桿特有的細微動作與生物力學特性。\n姿態估計誤差：高爾夫揮桿中常見的快速動作與複雜姿態，在某些情況下可能導致姿態估計與動作追蹤出現誤差（請參閱下方「環境與技術限制」）。\n電腦規格（最低需求）：\n請參閱 SwingCatalyst 動作擷取常見問題\n環境與技術限制\n相機品質：動作追蹤的效果高度依賴視訊輸入的品質。低解析度、晃動或模糊的影片會顯著降低準確性。\n光線條件：光線不足或不均勻，可能對高爾夫揮桿的動作與姿態偵測及追蹤產生不良影響。\n相機視角：本工具針對正面角度與目標線視角進行了優化。偏離這些角度可能導致分析準確性下降。由於俯視或後視角度會造成大量身體關鍵點被遮擋，不建議使用此類視角拍攝高爾夫球手。\n遮擋身體關鍵點：被遮擋的身體關鍵點與可見的身體關鍵點相比，偵測精確度較低。使用者在解讀被遮擋身體關鍵點的位置時應謹慎。\n目標線視圖與 Launch Monitor 的 DLP 投影機：DLP 投影機偶爾會影響目標線視圖中動作擷取模型的性能。在此類設置中，充足的光線條件對於防止動作擷取模型出現錯誤至關重要。\n僅限 2D 推論：SwingCatalyst 動作擷取工具僅在所選相機視角中提供 2D 推論。工作階段之間的相機設置偏差可能影響結果的比較。在比較高爾夫揮桿試驗時，應使用相同的相機設置。\n使用者責任\n專業建議：本工具僅供資訊參考與休閒娛樂使用，不應取代專業教練指導、教學或生物力學分析。\n結果驗證：使用者在根據本工具的輸出結果對其揮桿或訓練計畫進行任何調整之前，應自行獨立驗證分析結果的準確性。\n隱私與資料安全\n資料處理：本工具處理的影片與資料，可能在您明確同意的情況下儲存以供分析使用。\n資料儲存與刪除：除非經明確同意，我們不會在分析所需期間之外儲存您的影片或個人資料。\n第三方存取：未經您的明確同意，我們不會與第三方共享您的資料。\n使用者同意：使用本工具即表示您同意依據我們的隱私政策處理您的資料。\n免責聲明\n風險自負：使用本工具的風險由您自行承擔。對於分析結果的不準確，或根據工具輸出結果所做的任何決定，我們概不負責。\n保固限制：本工具以「現狀」提供，不提供任何明示或默示的保固，包括但不限於準確性、可靠性或適合特定用途之保固。\n更新與改進\n持續開發：我們的動作追蹤工具持續開發中。功能、特性與性能可能隨時變更，恕不另行通知。\n不保證定期更新：雖然我們致力於改進本工具，但我們不保證定期提供更新或功能強化。\n智慧財產權\n第三方模型與授權：本工具整合了 RTMPose 與 RTMDet 模型，這些模型受其各自的開源授權條款約束。使用者在使用本工具時必須遵守這些授權條款。\n使用者內容權利：您保有您影片內容的所有權。使用本工具即表示您授權我們僅為提供分析服務之目的處理您的內容。\n適當使用\n個人使用與商業使用：\n法律合規：使用者有責任確保其對本工具的使用符合所有適用的地方、州、國家及國際法律法規。\n技術支援與聯絡資訊\n協助：如您在使用本工具時遇到任何問題或有疑問，請聯絡我們的支援團隊。\n聯絡方式：[請在此填入聯絡資訊]\n繼續使用我們的高爾夫揮桿分析動作追蹤工具，即表示您已閱讀、理解並同意這些聲明。\n最後更新：2025-03-05 | 在官方支援網站上檢視",
    "description": "SwingCatalyst 動作擷取使用者的重要安全與準確性聲明",
    "tags": [
      "Troubleshooting",
      "Licensing",
      "Motion-Capture"
    ],
    "title": "SwingCatalyst 動作擷取工具使用者重要聲明",
    "uri": "/sc-support/zh-hant/software-features/motion-capture-disclosures/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤",
    "uri": "/sc-support/zh-hant/tags/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "TrackMan 連線問題疑難排解指南 您遇到了以下問題：\nTrackMan 已連線且在 TPS 中顯示資料，但 SwingCatalyst 未被觸發，且 SwingCatalyst 內沒有任何資料。\n重新啟動 TrackMan 裝置本身。\n確認您是否在 TPS 中收到資料，若未收到，請再次檢查校準設定。\n確認 TPS 設定中已啟用「Enable SDK Output」/「Legacy SDK」。\n在 SwingCatalyst 9.7.8 與 9.7.9 版本中，此問題已進一步改善。若您已按照上述指示操作但仍無效，請確保您使用的是 9.7.9 或更新版本，這有助於減少延遲問題。\nSwingCatalyst Launch Monitor 延遲補償 若您已收到資料但 SwingCatalyst 未觸發錄製，請嘗試將「Trigger delay」值更改為 1400。\nTrackman 3e 您也可以透過裝置的網頁介面確認「Legacy SDK」是否已啟用。您可以從 TPS 設定進入網頁介面，強制切換為操作員模式，並在擊球準備中確認相關設定。\n若 SDK 輸出已在 TPS 及裝置上完成設定，但您仍未收到資料，請嘗試使用名為 Hercules 的工具連線至裝置或 SDK。\n監控裝置 / TPS 軟體的輸出：\n確保 TPS 正在執行並從裝置接收資料。\n下載並執行 Hercules。\n切換至 TCP Client 分頁。\n輸入以下 IP 與連接埠，然後按一下連線。\nWiFi 與 USB IP 位址 Trackman 4\n有線網路：不支援。\nUSB 位址 169.254.0.1 連接埠：52950\nWiFi 位址 172.30.20.1 連接埠：52950\n未知位址來源：169.254.88.214\nTrackman 3e：\nUSB 位址 169.254.0.1 連接埠：52950\nWiFi 位址 172.30.20.1 連接埠：52950\nTrackman 2：\n直接連線至 127.0.0.1 上的 TPS SDK 伺服器，連接埠：52950 若在 Hercules 中正確連線，按下連線按鈕後您應會看到以下輸出。\n若未看到上述輸出，請嘗試重新啟動 TrackMan 裝置本身，因為 TrackMan Legacy SDK 目前未輸出資料。\n若您能成功連線，您應會收到資料，以及在追蹤到揮桿後隨即出現的揮桿資料。\n這與 SwingCatalyst 所接收的資料相同，是確認 TPS 及 TrackMan 是否確實在傳送資料的好方法。\n若您無法連線，請檢查防火牆設定。若是透過 WiFi 連線，TrackMan 可能被識別為公用網路，這在某些防火牆設定下可能造成問題；請嘗試關閉公用網路的防火牆後再次確認，現在是否能收到資料？若可以，請確保 TPS 及 Swing / Motion Catalyst 已在 Windows 防火牆中設為允許。\n檢查 SwingCatalyst 的日誌檔案：\nC:\\ProgramData\\Swing Catalyst\\logs\\log.txt 若您在日誌中看到以下訊息，表示 TrackMan OEM Service 正在執行，需要將其停用。\nLaunchMonitorNetworkClientBase.OnTryConnectCompleted(): Successfully connected to [Trackman] on [127.0.0.1:8000].\n最後更新：2024-11-13 | 在官方支援網站上檢視",
    "description": "您遇到了以下問題：",
    "tags": [
      "Troubleshooting",
      "Usb-Camera",
      "Force-Data",
      "Launch-Monitor"
    ],
    "title": "TrackMan 未觸發 SwingCatalyst 的技術疑難排解",
    "uri": "/sc-support/zh-hant/hardware/trackman-troubleshooting/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Troubleshooting",
    "uri": "/sc-support/zh-hant/tags/troubleshooting/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: Usb-Camera",
    "uri": "/sc-support/zh-hant/tags/usb-camera/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "疑難排解（最常見問題） 最常見的問題與相機線纜、連接方式、USB 延長器等有關。\n本文旨在協助您解決問題，或縮小問題的可能原因範圍。\n接收資料不足 / 裝置未同步（時鐘偏移） 接收資料不足（Swing / Motion Catalyst 未取得足夠的視訊資料以完成捕捉） 可能的原因包括幀丟失。（請參閱下方的掉幀說明以了解疑難排解步驟）。\n硬體限制或資源限制，請檢查是否有其他高負載應用程式正在執行。\n若使用筆記型電腦且以電池供電，請嘗試連接充電器，錯誤是否消失？若是，變更電源計畫（調整為高性能）可能有所幫助。\n軟體未收到足夠的資料，表示所接收的視訊資料與電腦時鐘不同步。 依據相機類型，可嘗試不同的解決方式。「裝置未同步」的錯誤通常緊隨「接收資料不足」之後出現，但若您只看到「裝置未同步（時鐘偏移）」，請嘗試重新啟動捕捉模式，或重新啟動電腦。\n長時間讓系統停留在捕捉模式下可能會造成此問題。系統在捕捉模式啟動（或重新啟動）時會重設時鐘，但若長時間保持在捕捉模式中，相機時鐘與電腦時鐘將開始產生偏移。\n網路攝影機使用者的最後手段：嘗試在進階相機設定 –\u003e 選項標籤中啟用「手動時間戳」。\n掉幀 Q：什麼是掉幀？\nA：掉幀是指從相機接收到的視訊幀在不同程度上遭到遺失。\n根據掉幀數量的多寡，對錄製的視訊可能造成嚴重影響。在多相機環境中，這種情況尤其不理想，因為畫面將會出現不同步的現象，且所記錄活動類型的關鍵時刻可能會缺失。\n掉幀的原因 USB3 相機連接至 USB 2.0 連接埠。\n使用設計不良的線纜或延長線纜。\n超過建議的線纜長度（USB3 為 5 公尺）。\nUSB3 相機連接至與其他裝置共用的 USB 集線器，導致頻寬不足。\n相機使用的頻寬超過系統可用頻寬。\n由於其他應用程式正在執行，導致系統資源不足。\n如何修復掉幀問題 針對 USB 相機，我們建議嘗試降低幀速率（以及/或裝置連結吞吐量——適用於 FLIR 相機），以減少頻寬消耗。\n疑難排解步驟：\n若使用多台相機，請嘗試拔除或停用部分相機，系統是否仍回報掉幀？ 若此方法有幫助，可能表示存在性能問題或頻寬資源不足的情況。請嘗試降低兩台相機的幀速率，確認穩定性是否有所改善。\n關閉其他對 CPU 及顯示卡負載較高的軟體，以釋放系統資源。\n嘗試降低幀速率：（FLIR Blackfly S 範例）\n嘗試降低「裝置連結吞吐量」，請參閱下方「降低相機頻寬」說明。\n檢查線纜狀況，相機是否連接至 USB 集線器或延長器？線纜是否過度彎折或有明顯損傷？請嘗試直接連接至電腦。\n電腦是否符合建議的規格？若不符合，也許您使用的相機數量超出系統可承載的範圍。\n不同 USB 線纜的品質有所差異，某些內建 USB 3.0 控制器也可能造成問題。\n由於 USB3 的設定相對複雜，我們建議遵循大型知名機器視覺相機製造商的建議。詳細內容請參閱我們的建議 USB 元件文章：recommended-usb3-components.md\n降低相機頻寬消耗 單獨降低幀速率，或搭配 Region Of Interest (ROI) 一同使用，可減少相機的頻寬消耗，有效降低或消除掉幀情況。\n例如，USB 3.0 的額定傳輸速度為 5Gb/s，即 625 MB/s。\n一台解析度為 1920 x 1200、幀速率為 150 FPS 的 USB 3.0 相機，每台約需使用 345MB/s 的頻寬。因此，按照我們對多相機設定的建議，為每台相機配置獨立的 USB 3.0 控制器卡（大多數情況下）非常重要。在許多情況下，筆記型電腦無法同時驅動兩台全高清高 FPS 的 USB3 相機。\n另一種方式是利用 Region of Interest（通常稱為 ROI），此方法通常與降低吞吐量搭配使用效果更佳。\n如何得知相機正在消耗多少頻寬？ 您可以使用以下公式：資料速率 = 解析度 × 幀速率 × 位元深度。\n在大多數情況下，位元深度為 8 位元。\n資料速率 MB/s 解析度（寬 x 高） 幀速率 位元深度（每像素位元數） 30.7 640x480 100 8 92.1 1280x720 100 8 131.1 1280x1024 100 8 207.4 1920x1080 100 8 Region Of Interest (ROI)\nnote: 支援的相機：Swing Catalyst Fox、FLIR Blackfly S\n使用 Region of Interest（或感興趣區域）有助於減少相機的頻寬消耗並提升 FPS，也可用於降低掉幀數量。\n請參閱我們關於如何使用 Region Of Interest 的文章。\n未接收到任何資料 這表示 Swing Catalyst 未收到任何視訊影像或可處理的資料。\n此類錯誤的可能原因包括：\n線纜或連接不良：請嘗試拔除相機，並將其連接至不同的 USB 連接埠。\n設定錯誤：（尤其是網路攝影機和 DirectShow 相機）。請檢查曝光設定，若已取消 Auto 並將曝光值設定得非常高，幀速率可能會大幅下降。\n發生錯誤 此類錯誤常發生於相機正被其他應用程式使用的情況下。\n網路攝影機尤其容易被第三方軟體佔用，請嘗試關閉其他程式後重試。若錯誤持續發生，請嘗試重新啟動電腦。\n相機未顯示在相機設定清單中 若相機未出現在相機清單中，表示相機未被偵測到或連接不正確。\n若相機未顯示在相機清單中，最可能的原因是 Windows 未識別該裝置，或相機正被其他應用程式使用。請嘗試拔除相機後重新連接。\n該相機可能不受 SwingCatalyst 支援。\n對於 The Imaging Source 相機：若已安裝製造商的驅動程式，可能需要先將其解除安裝才能正常使用。\n乙太網路（網路）/ GigE 相機可能需要進行 IP 設定（請在我們的說明中心搜尋適用於該型號或製造商的相關文章）。\n連接問題（相機斷線） USB 3 容易發生連接問題。這些問題最常見的原因是 USB 3.0 延長器品質不佳、整體線纜過長，或線纜因過度彎折而受損。\n其他 視您的硬體而定，開啟銳化和降噪濾波器不一定是最佳選擇，關閉這些功能將降低部分 CPU 與 GPU 的使用量。您可以在進階相機設定的濾波器標籤中找到相機濾波器。更多關於濾波器的資訊請參閱：improving-image-quality.md\n最後更新：2024-12-11 | 在官方支援網站上檢視",
    "description": "最常見的問題與相機線纜、連接方式、USB 延長器等有關。",
    "tags": [
      "Troubleshooting",
      "Gige-Camera",
      "Usb-Camera",
      "Flir"
    ],
    "title": "USB3 相機疑難排解",
    "uri": "/sc-support/zh-hant/cameras-video/usb3-troubleshooting/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 標籤",
    "content": "",
    "description": "",
    "tags": [],
    "title": "標籤 :: User-Guide",
    "uri": "/sc-support/zh-hant/tags/user-guide/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "什麼是力圖表階段 本文介紹 10.2 版本中的新功能。\n適用軟體版本：Motion Catalyst 與 SwingCatalyst。\n版本：10.2\n捕捉所需條件：力量板 / Motion Plate / Dual Motion Plate。\n播放所需條件：包含力資料的錄製檔案。\n我目前使用的是哪個版本的軟體？\n相關文章：\n多重力圖表\n使用新圖表庫\n什麼是階段？ 所有運動或體育活動都包含數個動作階段或過渡。\n某些活動的階段比其他活動更多，且部分術語專屬於特定運動或練習項目。\n這些階段是任何運動或體育活動的核心組成部分，在判斷動作效率或識別技術缺陷方面扮演著重要角色。每個階段的計時至關重要，例如在深蹲跳或反向動作跳等活動中，重點在於下半身的爆發力與垂直跳躍能力。\n我們在圖表中以白色垂直線標示每個階段，以識別各階段在時間軸上的位置。\n階段高亮顯示 每個階段均以不同的強調色彩標示，讓您能輕鬆區分各階段。\n這些階段適用於「力」軸與「壓力中心」軸的資料框。若書籤有所變更，這些階段的位置也會隨之改變。\n反向動作跳的範例：\n選項 您可以透過點擊資料框旁的齒輪圖示，並取消勾選「高亮顯示階段」選項，來關閉階段高亮顯示功能。\n關閉高亮顯示階段後的範例： 最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "本文介紹 10.2 版本中的新功能。",
    "tags": [
      "Motion-Plate",
      "Pressure-Data",
      "Force-Data"
    ],
    "title": "力圖表階段",
    "uri": "/sc-support/zh-hant/software-features/force-graph-phases/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何在 Swing Catalyst 中設定 GigE 攝影機 本文說明如何設定 GigE 攝影機以搭配 Swing Catalyst 使用。 GigE Vision 是機器視覺攝影機的介面標準。Swing Catalyst 透過授權 USB 加密狗支援 GigE Vision 標準。\nSwing Catalyst 同時支援來自不同製造商的多種千兆乙太網路攝影機。\nSwing Catalyst 品牌：Fox \u0026 Lynx。\nFLIR（Spinnaker SDK）。\nAVT、IDS、Point Grey（舊版 / 舊型 SDK 整合）。\n透過第三方授權支援其他 GigE Vision 攝影機。\n有關我們所支援攝影機的詳細資訊，請參閱此文章：supported-cameras.md\n如需最準確的建議，請參閱您的攝影機製造商的設定說明文章。\n本文分為以下幾個章節：\n網路介面卡\n建議的介面卡\nPoE 介面卡\n不支援的介面卡\n網路介面卡設定\nIP 位址設定\n選用設定\nJumbo 幀\n中斷調節\n接收緩衝區\n疑難排解\n建議 建議的網路介面卡 若要安裝及設定 GigE 攝影機，您的電腦需要有一個或多個可用的網路埠，請確認您有正確類型的 PCIe 插槽。一般來說，大多數雙埠網路卡需要 1 個 x4 PCIe 插槽。\n我們建議使用以下其中一款網路卡，這些型號均已由製造商測試並驗證可正常運作：\nIntel Pro 1000 PT 雙埠（PCIe x4，2 個埠）\nIntel Pro 1000 PT 四埠低輪廓（PCIe x4，4 個埠）\nIntel Pro 1000 PT（PCIe x1，1 個埠）\nIntel CT（PCIe x1，1 個埠）\n我們透過網路商店販售的網路卡採用 Intel 芯片，並已通過機器視覺攝影機的使用驗證：https://shop-world.swingcatalyst.com/products/poe-dual-network-card\nPoE 網路卡 建議型號：\nSwing Catalyst 品牌雙埠或四埠網路卡（PCIe 2x 或 4x）\nAdlink GIE72/74 雙埠或四埠網路卡\nAdlink GIE64 四埠網路卡（PCIe x4，4 個埠）\n請注意，PoE 網路卡需要從電腦電源供應器取電，可能需要 SATA 轉 4-pin Molex 連接器 / 轉接頭。\n您也可以使用其他千兆網路卡，但請注意該網路卡必須支援 Jumbo 幀 / Jumbo 封包。基於相容性考量，我們通常不建議使用 Intel 以外芯片組的網路卡。\n不支援的介面卡 以下是我們曾遇到問題且通常不建議使用的網路卡：\nQualcomm Killer / Etherkiller e2200 網路卡系列。\nRealtek 網路卡\nStarTech 網路卡。\n部分 Realtek 網路介面卡不支援中斷調節控制。\n在某些情況下，停用中斷調節有助於解決掉幀問題。\n每張網路介面卡連接多台攝影機 由於現今販售的攝影機幀速率比以前更高，佔用的頻寬也更多，我們通常不再建議此做法。\n最佳方式是為每台攝影機配置一張專用網路介面卡。\n網路介面卡設定 若要設定網路介面卡，請前往「控制台」-\u003e「網路和網際網路」-\u003e「網路和共用中心」，然後點選左側的「變更介面卡設定」。\n將網路卡設定為接受「Jumbo 幀（9K）」\n安裝驅動程式，並確認接受安裝「濾波器」驅動程式（注意：每家攝影機製造商的濾波器驅動程式各不相同，請確認您安裝並啟用了適合您攝影機類型的版本）。\n啟用中斷調節並將速率設為「極高」或「高」。\n停用網路卡上除 IPv4 及濾波器驅動程式以外的所有網路模組。\n設定範例：\n我們已取消勾選未使用 / 不必要的項目，此步驟並非強制要求。\nIP 位址設定 我們建議在攝影機和網路介面卡上均使用靜態 IP 設定，以確保最佳穩定性。\n在變更每張網路介面卡的 IP 位址之前，請先設定攝影機上的 IP 位址。例如，對於正面視角右側攝影機，請確認攝影機已設為使用靜態 IP，並依照以下建議將 IP 設為 10.0.1.10。請儲存攝影機上的變更後，再對網路介面卡進行設定。\n本文為通用說明文章，攝影機 IP 設定的詳細步驟請參閱我們的攝影機專屬說明文章。\n兩台 GigE 攝影機連接至雙埠網路卡的設定範例：\n網路介面卡 1 連接至正面視角右側攝影機。 介面卡 IP：10.0.1.1 攝影機 IP：10.0.1.10 子網路遮罩：255.255.255.0\n網路介面卡 2\n連接至球道線視角攝影機。 介面卡 IP：10.0.2.1 攝影機 IP：10.0.2.10 子網路遮罩：255.255.255.0\n選用 取消勾選不必要的項目：\n若取消勾選項目後，請確認點選「OK」，然後返回網路介面卡內容。\n進階網路介面卡設定 Jumbo 幀：啟用 Jumbo 封包 / Jumbo 幀，並確認將其設為 9000 位元組以上。 中斷調節：若有提供，請設為「高」或「極高」。 接收緩衝區：將接收緩衝區設為最大值。 疑難排解 掉幀 降低每台攝影機的幀速率可能有助於避免或減少掉幀情況。\n您是否使用了建議的網路卡？若否，可能是網路卡本身造成問題。請聯繫我們的銷售團隊，確認您擁有合適的網路設備。\n網路卡設定不正確。請確認每張網路介面卡均已啟用 9kB Jumbo 幀。請參閱我們關於建議設定的支援文章\n若使用超過 2 台攝影機，請將 GEV SCPD 設為 150（請參閱攝影機設定中「Device / Link」區段下的設定）。\n確認連線速度為 1000 Mbps 而非 100 Mbps（請參閱攝影機設定中「Device / Link」區段下的「Device Link Speed」）。\n連線速度為 100 Mbps： 若連線速度為 100Mbps 而非 1000Mbps，您所使用的網路線可能品質不佳或已損壞，或網路介面卡可能不支援千兆速度。請嘗試更換網路線。\n嘗試將攝影機設定重設為預設值，然後再次檢查攝影機設定中「Device / Link」區段下的連線速度。\n從 Windows 控制台檢查網路介面卡的狀態。\n注意：速度應為 1.0 Gbps（1000Mbps），而非 100Mbps。\n透過使用 Region Of Interest（ROI）進一步減少掉幀： 使用 Region of Interest（或感興趣區域）可縮小整體影像尺寸並提升 FPS，同時也有助於降低頻寬使用量，進而減少掉幀情況（請參閱上方說明以了解如何使用 ROI）。\n連線問題（攝影機斷線）： 檢查網路線纜。\n若攝影機使用外接電源，請檢查電源連接狀況。\n其他問題： 視您的硬體而定，啟用銳化與降噪濾波器可能並非最佳選擇，關閉這些功能將可降低部分 CPU 及 GPU 使用量。您可以在進階攝影機設定的濾波器分頁中找到攝影機濾波器。更多關於濾波器的資訊請參閱：improving-image-quality.md\nJumbo 幀相容性 並非所有網路介面卡都支援 9KB Jumbo 幀。建議使用網路介面卡所支援的最高 Jumbo 幀 KB 大小，但一般而言，最好使用支援 9KB 的網路介面卡以提升性能。\n範例： 多台攝影機透過交換器連接至網路卡（NIC）。 並非所有網路交換器都支援 9KB Jumbo 幀，若網路卡（NIC）設定為使用 9KB（或超過交換器可處理的封包大小），將導致封包遺失，進而造成 Swing Catalyst 中出現掉幀情況。\n許多交換器支援 Jumbo 幀（通常會在規格中註明），但並非所有交換器都支援 9KB Jumbo 幀，您常會發現設備僅支援最高 4KB。\n例如，若您將攝影機連接至僅支援 4KB Jumbo 幀的交換器，而網路介面卡卻設定為 9KB Jumbo 幀，將會造成問題。\n您可以使用命令列工具 ping 來測試網路介面卡的性能（如截圖所示）：\n此處我們以 9000 位元組（9KB）的封包大小對網路介面卡進行 ping 測試。若請求逾時，表示該介面卡可能不支援 9KB Jumbo 幀。\n最後更新：2025-04-11 | 在官方支援網站上檢視",
    "description": "GigE Vision 是機器視覺攝影機的介面標準。Swing Catalyst 透過授權 USB 加密狗支援 GigE Vision 標準。",
    "tags": [
      "Troubleshooting",
      "Gige-Camera",
      "Usb-Camera",
      "Flir"
    ],
    "title": "千兆乙太網路與 GigE Vision 攝影機網路建議",
    "uri": "/sc-support/zh-hant/cameras-video/gige-network-setup/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "室內解決方案的建議照明\n流明與勒克斯建議值：\n一般建議的流明值為 30,000 流明，但實際需求取決於工作室的大小。\n請盡可能使用勒克斯（lux）測量值，而非流明。勒克斯能更精確、更真實地呈現所需的光照量，以及拍攝出良好畫面所需的光線強度。\n視訊分析的建議勒克斯測量值：\n髖部高度水平方向：1100–1300 勒克斯 學生腳下地板：2300 勒克斯\n在無法避免陽光照射的安裝環境中，建議在門口方向加裝更多燈具，以減少逆光剪影問題。然而，由於太陽的勒克斯值遠高於 LED 燈具所能產生的光量，要完全消除剪影效果並不可行。\n色溫\n常見色溫範圍的使用範例：\n2700K - 住宅、餐廳、飯店大廳、精品店\n3000K - 圖書館、辦公區域、零售商店\n4100K - 展示間、書店、辦公區域\n5000K - 博物館、珠寶店、醫院\n5600K - 用於模擬戶外環境\n適合的 LED 色溫類型可能因安裝環境而異。\n3000K 至日光色溫皆可使用，但工作室採用 2700–3000K 也相當普遍。\n面板式 LED 燈具\n適合半戶外安裝環境，或需要大量光源的安裝場合。\nnote: 部分面板燈是為一般照明用途設計，其舒適度不如專為攝影與視訊用途設計的燈具。\n較高功率的 LED 面板需要通風，請注意這類燈具會產生相當多的熱量。\n連結：Stairville 100W LED Power-Flood Pro 6k kevlin\n連結：Stairville 200W LED Power-Flood Pro 6k kelvin\nYellowRiver YR-W0360S（3Wx60PCS 純白色）LED 面板：\n可透過詢價方式購買，依製造時程不同，前置作業時間通常需要 2–3 週或更長。\nnote: 我們不支援 DMX512 標準，因此這些燈具無法透過 SwingCatalyst 進行調光。\n室內工作室燈具\n以下為持續性光源，適用於攝影與視訊用途，通常能產生更均勻的照明效果，且對眼睛較為舒適。可安裝於三腳架上。\n一般來說，其亮度不如泛光燈。\nVarytec VP-1 DMX Video BiLight Panel（90W）：\nhttps://www.thomann.de/intl/varytec_vp_1_dmx_video_bilight_panel.htm\n內附柔光濾波器（可滑動套在 LED 上方的塑膠濾波器，用於柔化光線），能營造出更均勻的照明區域，但方向性不如配備可調式遮光板的面板燈。\n替代方案：\nAputure Amaran HR672S Daylight LED Spot Light（可於 B\u0026H Photo Video 購買）\n燈具應放置在哪裡？\n這個問題難以一概而論，因為答案取決於安裝類型。\n若安裝環境中有投影機（如下圖所示），建議使用 LED 聚光燈（光束角度較窄），將光線集中照射於地板與高爾夫球手，而非嘗試照亮較大範圍的地板區域。\n如圖所示，燈具以 45 度角安裝，後方燈具的角度則略為陡峭，這樣能形成良好的照明分布，但相對地，投影機的畫面會因此顯得非常模糊。\n這些都是需要仔細考量的重要因素。我們優先考量照亮展示空間，而接受投影機畫面較為模糊的結果；在這種情況下，兩者兼顧確實相當困難。\nSwingCatalyst 於 2017 年 PGA 展的展示攤位（使用 4 盞 Aperture LED 燈）：\n在這種情況下，我們可以輕鬆再增加兩到三塊面板，以便進一步降低快門速度。\n最後更新：2025-12-19 | 在官方支援網站上檢視",
    "description": "Swing Catalyst 工作室與車庫球灣攝影機安裝的照明建議",
    "tags": [],
    "title": "工作室與車庫球灣安裝的建議照明方式",
    "uri": "/sc-support/zh-hant/cameras-video/recommended-lighting/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 入門指南",
    "content": "簡介 本支援文章旨在介紹 Swing Catalyst Home。\n正在尋找入門指南？入門指南。\n什麼是 Swing Catalyst Home？ Home 是 Swing Catalyst 軟體針對家用市場所推出的版本。它擁有較少的專業功能，例如不支援錄製課程功能，並設有使用者數量限制。\nHome 最多支援兩台即時攝影機，以及 Foresight 或 FlightScope Launch Monitor。\nHome 與 Swing Catalyst Pro+ 及 Pro 的差異 Swing Catalyst Home 針對家用使用者設計，價格遠低於專為專業使用者設計的 Swing Catalyst Pro 或 Pro+。\n功能比較表： 版本 繪圖工具 支援攝影機數量 錄製課程 群組支援 使用者限制 感測板支援 Launch Monitor\nPro+ 是 最多 4 台 是 是 無 是\n是\nPro 是 最多 2 台 是 是 無 否\n是\nHome Lite 部分* 1 台攝影機 否 否 5 位使用者 否 僅限 Foresight\nHome 部分* 最多 2 台 否 否 5 位使用者 否* 是\nLite 是 無 是 是 無 否 否\n新款雙壓力板受 Home 版本支援，此版本不支援其他壓力板。 Home 中可使用的繪圖工具如下 繪圖工具類型 Home 版本是否支援\n線條工具 是\n線條粗細 是\n圓形工具 是\n角度工具 是\n管理訂閱 如需管理透過我們的商店購買的訂閱，請參閱：\n../account-setup/cancel-subscription.md\n最後更新：2024-06-10 | 在官方支援網站上檢視",
    "description": "本支援文章旨在介紹 Swing Catalyst Home。",
    "tags": [
      "Pressure-Data",
      "Launch-Monitor",
      "Subscription"
    ],
    "title": "什麼是 Swing Catalyst Home？",
    "uri": "/sc-support/zh-hant/getting-started/what-is-sc-home/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "簡介 本支援文章旨在說明 Swing Catalyst 和 Motion Catalyst 中的書籤是什麼，以及其用途。Motion Catalyst 和 Swing Catalyst 之間存在一些差異，但書籤的運作方式與功能的基本原理相同，因此本文適用於兩套軟體。\nMotion Catalyst 中反向跳躍錄製的範例截圖\n什麼是書籤？ 書籤用於標示錄製中的關鍵時間點。對於特定的運動與活動類型，書籤對應至該活動的特定階段，或僅用於標示動作的開始與結束。\n以反向跳躍（如圖所示）為例，這些階段包括：減重動作、煞車、推進、起跳和落地。\n仔細查看上方截圖，可以看到播放時間軸上方有數個箭頭，每個箭頭（即書籤）對應至所錄製活動類型的不同階段。\n可用書籤的數量取決於活動類型。某些活動類型的書籤數量多於其他活動類型。此外，對於某些可從力資料中識別階段的活動類型，書籤會自動設定。我們正持續改善此功能，因此以下清單可能會有所變動。\n目前透過關鍵指標自動設定書籤的運動與活動類型如下：\n運動 活動類型 健身 反向跳躍 健身 深蹲跳 健身 等長中段大腿上拉 健身 動態與靜態平衡 健身 上身平板支撐 跳台滑雪 棒球 打擊 書籤位置會針對每筆錄製儲存於資料庫中，並儲存於任何匯出的錄製（含資料的錄製）檔案中。\n如何設定書籤？ 若要變更或手動設定書籤位置：\n按下「書籤」按鈕以「解鎖」書籤。\n選取後，可透過拖曳箭頭來變更書籤位置。\n完成後，請務必透過取消選取「書籤」圖示來「鎖定」書籤，以退出「編輯書籤」模式。\n若要重設位置，請按一下「重設 A」（或 B）按鈕（顯示於書籤按鈕左側）。\n灰色書籤表示尚未設定或尚未變更。\n書籤也會以垂直線的形式顯示於資料圖表中，標示錄製中各階段在時間上的位置（圖表的 X 軸）：\n提示：第一個和（或）最後一個書籤的位置決定了資料框中顯示的資料量。第一個書籤之前和最後一個書籤之後的持續時間取決於活動類型和運動，但手動調整此設定有助於檢視錄製的特定部分。這對於在「自由動作」活動類型下進行的錄製尤其實用，因為該類錄製的時長最長可達 30 秒。\nnote: 我們僅是變更「在時間上」所檢視的範圍，實際上不會以任何方式變更任何已儲存的資料。\n如需有關如何檢視及操作圖表的詳細資訊，請參閱本文。\n為什麼要設定書籤？ 為了便於在錄製之間進行播放同步，我們建議設定書籤。\n例如，假設您想並排檢視兩位不同使用者執行反向跳躍的兩筆錄製，並希望針對特定階段同步播放。\n按一下「同步」按鈕。\n選取您希望同步的階段／書籤。\n按下播放。\nnote: 可用書籤的數量及階段名稱會依運動和活動類型而有所不同。\n以兩次高爾夫揮桿同步書籤至擊球點的範例：\n此操作適用於任何運動或活動類型。如需「比較模式」的詳細資訊，請參閱我們使用者指南的「版面配置」章節。\n最後更新：2024-06-07 | 在官方支援網站上檢視",
    "description": "本支援文章旨在說明 Swing Catalyst 和 Motion Catalyst 中的書籤是什麼，以及其用途。Motion Catalyst 和 Swing Catalyst 之間存在一些差異……",
    "tags": [
      "Force-Data",
      "Database"
    ],
    "title": "什麼是書籤？",
    "uri": "/sc-support/zh-hant/software-features/bookmarks/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何對 FLIR Blackfly S 進行韌體升級 本文說明如何升級 FLIR Blackfly S GigE BFS-PGE-04S2C-CS 的韌體。\nWarning: 若相機產品型號與以下不符，請勿進行韌體升級：BFS-PGE-04S2C-CS 需求： Spinaker SpinView 軟體（詳情請參閱 flir-blackfly-gige-setup.md）。\nFLIR Blackfly S BFS-PGE-04S2C-CS 相機。\n下載韌體更新，雙擊 zip 檔案，然後點擊「解壓縮全部」以解壓縮 ez2 檔案。\n啟動 SpinView（在 Windows 開始選單中輸入 SpinView），點擊 SpinView 圖示。\n在您想要更新的相機上按右鍵，然後點擊：Update Device Firmware（更新裝置韌體）。\n若尚未下載韌體檔案，請先下載：\nhttps://cloudfront.swingcatalyst.com/files/bfs_ge_imx287_2005.0000.066.000.zip 並解壓縮 zip 檔案。\n選擇您已下載的韌體檔案。\n點擊「開始」，然後點擊「是」\n舊版韌體連結：https://cloudfront.swingcatalyst.com/files/bfs_ge_imx287.zip\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "本文說明如何升級 FLIR Blackfly S GigE BFS-PGE-04S2C-CS 的韌體。",
    "tags": [
      "Gige-Camera",
      "Flir"
    ],
    "title": "升級 FLIR Blackfly S 的韌體",
    "uri": "/sc-support/zh-hant/cameras-video/flir-firmware-upgrade/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "支援哪些 Launch Monitor？ Swing Catalyst 可與多種 Launch Monitor 整合，涵蓋雷達及相機等不同技術。\nnote: Swing Catalyst 目前僅支援與高爾夫用途的 Launch Monitor 整合。\nMake / Brand Model Integration Type Comment Help Center article\nForesight\nGCQuad, GCHawk,\nGC3\n直接連線\n如何在 Swing Catalyst 中使用 Foresight GC3 / Bushnell Launch Pro\nForesight QuadMAX, Falcon 直接連線 適用於 24.1 及更新版本 如何在 Swing Catalyst 中使用 Foresight GC3 / Bushnell Launch Pro\nForesight GC2 / GC2 + HMT 直接連線 在 10.1 及更新版本中預設為停用 如何在 Swing Catalyst 中使用 Foresight GC2 \u0026 HMT\nForesight GC2（模擬器整合） FSX 2020 軟體 適用於 FSX 2020 或更早版本。僅支援 GC2，不適用於其他 Launch Monitor。 如何在 Swing Catalyst 中使用 Foresight GC2 \u0026 HMT\nBushnell Launch Pro / BLP 直接連線\n如何在 Swing Catalyst 中使用 Bushnell BLP\nFlightScope X1, X2, X2 Elite, X3, Xi, Xi+ FlightScope 軟體 FlightScope 軟體 v11 或更早版本 如何在 Swing Catalyst 中使用 FlightScope\nFlightScope Mevo+ X2, X2.1, X2 Elite \u0026 X3 Xi \u0026 Xi Plus Xi TP Xi 範圍 直接連線 僅能連線至一部裝置。若 Swing Catalyst 已連線，FS Golf 將無法同時連線。 如何在 Swing Catalyst 中使用 FlightScope Mevo+\nFull Swing Golf FS Golf, Pro Studio, E6 1.6 直接連線\n如何在 Swing Catalyst 中使用全揮杆 Golf\nTrackman 1, 2, 3, 3e \u0026 4 TPS 軟體 整合功能僅限現有客戶使用 如何在 Swing Catalyst 中使用 Trackman\n最後更新：2026-01-06 | 在官方支援網站上檢視",
    "description": "Swing Catalyst 可與多種 Launch Monitor 整合，涵蓋雷達及相機等不同技術。",
    "tags": [
      "Launch-Monitor"
    ],
    "title": "支援的 Launch Monitor 列表",
    "uri": "/sc-support/zh-hant/hardware/supported-launch-monitors/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "為了獲得最佳體驗，我們建議使用我們專為 Swing Catalyst 設計的高速相機。請造訪我們的官方網站，了解我們提供的相機選項。\n概覽 Swing Catalyst 支援兩種類型的相機來捕捉揮桿影片：\n即時串流相機（直接連接至您的電腦，進行即時捕捉）\n匯入式影片裝置（另行錄製後再匯入）\n1. 即時串流相機 這些相機直接連接至您的電腦，讓您能夠捕捉即時影片，並自動與其他資料來源（例如 Pressure Plate 或 Launch Monitor）進行同步。它們非常適合在揮桿工作階段中提供即時的詳細回饋。\n即時串流相機的優點 即時分析： 立即檢視並分析您的揮桿動作。\n資料同步： 相機與感測板等其他裝置之間具備良好的同步效果。\n多角度捕捉： 最多可從四台相機同時錄製（視授權方案而定）。\n即時串流相機的類型 A. 消費級相機 消費級相機廣泛普及、易於設置，且通常價格較為親民。雖然這類相機容易取得，但在分析能力方面通常較為有限，因為它們的幀速率普遍較低（通常低於 60 FPS），可能無法捕捉到高爾夫揮桿等快速動作的細節。如果您剛入門，這類相機是一個負擔得起的選擇，但可能缺乏進階分析與專業使用所需的精準度和配置彈性。\n範例： 標準 USB 網路攝影機\nDragon USB 2 相機 注意： 這些相機雖然可正常使用，但可能無法提供深入揮桿分析所需的細節。\nB. 機器視覺相機（高速相機） 機器視覺相機經過優化，能以更高的幀速率和精準度進行高品質分析。我們提供的相機可以超過 200+ FPS 的幀速率錄製，能夠捕捉到低 FPS 相機所遺漏的細節。這些相機還配備了全域快門技術，可消除逐行快門失真（因快速移動而導致的物體變形），確保每個影格的清晰度與準確性。\n我們推薦的型號：\nSwing Catalyst Fox Camera（USB）\nSwing Catalyst Lynx Camera（GigE）\n這些型號專為搭配 Swing Catalyst 使用而設計，為揮桿分析提供最佳的同步效果與清晰度。\n支援的第三方型號：\nFLIR 相機\n推薦：Blackfly S 系列。\n支援 Spinnaker SDK 的相機極有可能與 Swing Catalyst 相容。\n其他相容相機（如 AVT 和 IDS）在技術層面上受到支援，但我們團隊對其測試與維護的程度不及原廠相機和 FLIR 相機。這意味著雖然部分 AVT 和 IDS 相機可能可以正常運作，但其性能或可靠性可能不如 Swing Catalyst 相機或 FLIR 型號。\n對於工作室安裝環境，或線材長度超過 5 公尺的情況，我們建議使用乙太網路（GigE）相機，因為它們能提供最佳的長期穩定性。\n2. 匯入式影片裝置 如果您偏好另行錄製影片後再匯入，Swing Catalyst 支援來自常見錄製裝置的影片：\niOS 或 Android 版 Swing Catalyst 應用程式\n來自智慧型手機的影片（iOS 和 Android）\n手持數位相機\n任何以相容格式儲存影片的裝置\n匯入影片的優點 靈活使用： 可在任何地點錄製並於稍後回顧，特別適合在球場上錄製。\n裝置多樣性： 可使用您已擁有的相機。\n如何匯入影片 錄製您的揮桿動作（使用您的裝置）。\n將影片傳輸至您的電腦。\n將影片匯入 Swing Catalyst 進行分析。\n入門指南 確認您的授權方案： 您的 Swing Catalyst 授權方案決定了您可以使用多少台即時串流相機。\n考量您的需求：\n初學者： 消費級相機價格實惠，但可能無法捕捉所有細節。\n深入分析： 高速機器視覺相機（如 Fox 或 Lynx）非常適合進階分析。\n確認相容性： 如果您擁有第三方相機，請確認其與 Swing Catalyst 的相容性。\n設置您的相機：\n即時串流： 請依照設置說明進行最佳串流配置。\n匯入影片： 請確保以 Swing Catalyst 支援的格式進行錄製。\n需要協助？ 我們的團隊隨時為您解答有關相容相機或設置的任何問題。\n說明中心\n申請報價\n**其他諮詢 **\n最後更新：2024-10-30 | 在官方支援網站上檢視",
    "description": "Swing Catalyst 支援兩種類型的相機來捕捉揮桿影片：",
    "tags": [
      "Gige-Camera",
      "Usb-Camera",
      "Flir",
      "Lynx-Camera"
    ],
    "title": "支援的相機",
    "uri": "/sc-support/zh-hant/cameras-video/supported-cameras/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "Swing Catalyst 平衡板提供 2 年保固，涵蓋重新校準及正常使用造成之瑕疵修復。建議您簽署延伸服務協議（ESA），以確保平衡板在整個使用壽命期間維持最佳性能。我們建議您在保固到期前簽署 ESA。\n請注意：2019 年 3 月 1 日之後購買的平衡板享有 2 年保固，此日期之前購買的板子則為 1 年保固。\nESA 定價\n簡介\n為什麼我需要 ESA？\n運作方式為何？\n如果我不續約會怎樣？\n條款\n安裝\n使用與保養\n保留包裝\n保固\n支援\n申請重新校準或維修的 RMA\n平衡板已涵蓋於 ESA 中\n平衡板未涵蓋於 ESA 中\n運送\n形式發票範本\n運費範例\n服務中心\n費用為何？如何註冊？\n請聯繫您所在地區的經銷商以了解定價及註冊方式。\nhttps://www.swingcatalyst.com/contact-us\n請注意，若您現有的保固或 ESA 已過期後才申請，將會收取額外費用。請參閱如果我未申請或未續約會怎樣？\n簡介 為什麼我需要 ESA？ 平衡板由一組高精度壓力傳感器組成。由於壓力傳感器的特性，它們在經過一段時間後需要重新校準（通常每年一次），此時間可能因使用情況及環境因素而有所不同。\n只要您持有有效的 ESA，我們（透過製造商）將確保平衡板維持最佳運作狀態。ESA 涵蓋重新校準、瑕疵修復及正常使用造成的磨損零件更換。若磨損程度達到嚴重程度，製造商將提供全新翻新產品替換，或提供大幅折扣的升級方案（如適用）。\n運作方式為何？ 若您需要將平衡板送回進行維修或重新校準，您必須先申請退貨授權（RMA）。若 RMA 獲得批准，我們將指示您如何將平衡板運送至我們的服務中心進行檢查。若服務內容涵蓋於保固及 ESA 條款之內，我們將承擔所有與工藝及材料相關的費用。我們也會免費為您更換全新的品牌標誌墊。通常平衡板將於 2 週內寄回。\n閱讀更多關於運送的資訊。\n如果我未申請或未續約會怎樣？ 若您的保固或 ESA 在申請或續約 ESA 前已過期，將會收取額外費用。請聯繫您所在地區的經銷商以了解定價及註冊方式。\nhttps://www.swingcatalyst.com/contact-us\n若您的平衡板未涵蓋於 ESA 中，請參閱未涵蓋於 ESA 的重新校準與維修。維修費用可能相當昂貴，因此持有有效的 ESA 是確保您的平衡板在剩餘使用壽命中維持最佳性能的經濟實惠且可預期的方式。\n條款\n安裝\n請參閱平衡板擊球準備指南。\n使用與保養\n將平衡板存放於安全、乾淨且乾燥的環境中，避免直接日曬。直接日曬和極端溫度可能影響數據讀取，並可能對設備造成損壞。\n為確保傳感器的準確性與使用壽命，請勿長時間將重物放置於平衡板上。\n請隨時保持平衡板清潔，避免碎屑和污垢。您可使用軟刷及非酸性、非腐蝕性清潔劑（如 Windex）清潔平衡板。\n我們建議每兩週使用洗衣機清洗一次品牌標誌墊，這將延長墊子的使用壽命。\n保留包裝\n請保留平衡板的原始包裝。在重新校準、維修保養的情況下，您將需要原始包裝才能安全地將平衡板寄回我們的服務中心。\n保固 Initial Force AS 保證設備在一（2）年期間內不存在材料或工藝上的任何瑕疵。保固自購買日起生效。保固適用於所有依原始設計目的購買、安裝及使用的平衡板客戶。上述保固僅涵蓋正常使用下產生的瑕疵，不包括因誤用、濫用、疏忽、改裝、電力問題、未依產品說明使用、天災，或由 Initial Force AS 或其授權第三方服務提供商以外人員進行不當安裝或維修所導致的故障或損壞。Initial Force AS 保留以功能相當的全新或可用二手零件替換的權利。\n支援\n如果您在入門使用上遇到任何問題或疑問，我們將盡力協助您。\n在我們的說明中心尋找協助 聯繫您所在地區的經銷商\n申請重新校準或維修的 RMA 在將平衡板運送至我們的服務中心之前，您必須取得退貨授權（RMA）號碼。\n平衡板已涵蓋於 ESA 中 申請 RMA 號碼\n若 RMA 獲得批准，我們將說明後續步驟\n我們通常將於 2 週內寄回您的平衡板\n平衡板未涵蓋於 ESA 中 若您的 ESA 已過期或問題不在 ESA 條款涵蓋範圍內，我們將提供重新校準及維修服務。請注意，在我們的服務中心檢查平衡板之前，我們無法預估維修或重新校準的費用，且客戶須承擔雙向運費。\n申請 RMA 號碼\n若 RMA 獲得批准，我們將說明後續步驟\n當我們的服務中心收到平衡板後，將調查問題並提供工藝、零件及回程運費的預估費用\n若您不接受此費用，您仍須支付檢查費用並承擔運費\n運送\n在將平衡板運送至我們的服務中心之前，您必須取得退貨授權（RMA）號碼。\n您須對平衡板抵達我們服務中心時的狀況負責。\n因此，我們建議在將平衡板運送至我們的服務中心時重複使用原始包裝。若您沒有原始包裝，我們建議使用堅固的紙箱，添加大量緩衝材料，並在紙箱所有側面標示「易碎品」。請拍攝平衡板及包裝的照片，以備平衡板在運送過程中損壞或遺失時使用。您須自行負責運送保險及任何當地稅費。\n平衡板包裝範例：\n平衡板懸浮於紙箱內的硬質泡棉中，頂部也放置保麗龍以保護平衡板。若您在沒有原始箱子的情況下運送，請嘗試使用具有類似保護效果的紙板箱運送。\n請注意，若您居住在美國以外的國家，您需要熟悉本國有關維修和修繕貨運的程序及文件要求（各國要求不同）。確保貨物符合所有當地要求是您的責任。\n說明 申請 RMA 號碼\n列印 RMA 批准文件並隨貨附上\n在包裹外側寫上 RMA 號碼\n使用充足的緩衝材料和保護措施，盡可能重複使用原始包裝\n若向國外寄送，請聯繫當地海關機關了解相關程序。在適當情況下使用我們的形式發票範本，並確保將出口原因申報為「維修保養」。\n保險為您的責任\n請確保取得包裹的追蹤號碼並提供給我們\n若有任何問題，請先聯繫我們以避免代價高昂的失誤\n形式發票範本 從美國以外地區寄送時，您需要附上形式發票，以申報貨物為暫時出口至其他國家，從而避免海關關稅。我們提供範本供您方便使用，但我們建議您聯繫當地海關機關，並熟悉相關程序及文件要求。\n通常，至少應附上 3 份簽署副本。\n範本（PDF）\n範本（DOCX，適用於 Word 2007 或更新版本）\n範本（DOC，適用於 Word 2003 或更舊版本）\n運費範例 以下價格僅供參考。實際價格將依您的所在地點、運送快遞公司及運送方式而有所不同。範例含雙向運費。\n服務中心\n美國\n英國、歐洲\n泰國、亞洲\n澳洲\n北美洲\nUSD 76\nEUR 306\nUSD 550\nUSD 710\nFedEx Ground\nUPS Expedited\nUPS Expedited\nUPS Expedited\n平衡板重量：28.7 磅 / 13 公斤 平衡板 2 尺寸：41.3 x 22.8 x 3.5 英寸 / 105 x 58 x 9 公分\nHS Code: 9031.80.98\n回程 HS Code: 9081.10.00\n服務中心\n北美洲 SensorEdge / Swing Catalyst Service Center\n140 Littleton Rd., Suite 220, Parsippany, NJ 07054\nUSA\n最後更新：2024-05-29 | 在官方支援網站上檢視",
    "description": "平衡板由一組高精度壓力傳感器組成。由於壓力傳感器的特性，它們在經過一段時間後需要重新校準...",
    "tags": [
      "Troubleshooting",
      "Balance-Plate",
      "Pressure-Data",
      "Force-Data"
    ],
    "title": "平衡板保固與ESA",
    "uri": "/sc-support/zh-hant/hardware/balance-plate-warranty/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "執行校準工具 為了使用您的平衡板，它需要一個校準文件。每個平衡板都有專屬的校準文件，因此沒有兩個文件是相同的。如果您尚未安裝校準文件，您的平板很可能也尚未完成保固登記。本文說明如何取得校準文件及登記平板的流程。\n本文適用於消除不必要的雜訊以及改善平衡板 3 及以上版本的壓力分佈。\n平衡板由 2048 個高精度壓力傳感器組成，可能需要使用 Sensor Edge 工具對平板進行歸零，以確保最佳精確度。本文是關於如何對平衡板進行歸零設定的逐步教學。\n重要！ ** **\n此流程分為兩個部分\n第 1 部分：使用 Sensor Edge 工具取得您平板的最新校準文件。\n第 2 部分：在 Swing Catalyst 中安裝該校準文件。請務必閱讀本支援文章的全部內容。\n第 1 部分：使用 SE 工具取得校準文件 下載校準工具\n若提示安裝驅動程式，請點擊「是」。\n將平板連接到電腦。\n請確保 Swing Catalyst 軟體已關閉，若 Swing Catalyst 正在執行中，SE 工具將無法偵測到您的平板。\n開啟新安裝的 SE 工具\n請按照以下說明操作。\n請確保您的電腦已連接顯示器或電視，以便您在站上平衡板時能看到螢幕畫面。\n若您已安裝舊版本，請先透過新增或移除程式將其解除安裝。\n點擊「開始」：\n點擊「開始」後，工具將自動嘗試掃描裝置；若未找到您的平板，請點擊下拉選單並選擇您的平衡板。\n點擊「掃描」 選擇與您平板序號相符的裝置，然後點擊「下一步」。\n登記您的平衡板 已填寫登記資訊的範例 填寫完保固及服務所需的必要資訊後，點擊「繼續」。\n如可行，請選擇一個攝影機並將其對準平衡板，然後點擊「下一步」。\n攝影機並非必要，即使未偵測到攝影機，您仍可繼續進行。\n請確保移除平衡板上的地毯及任何其他物品，以確保讀數不受任何外部因素影響。 執行校準流程 在踏上平板之前，工具會先收集數據，以建立用於比較的基準線。\n請確保在工具指示您踏上平板之前，不要不小心站上平板。\n站位說明 請務必按照工具所示的方式站上平板。\n深色腳印表示您目前應站立的位置，灰色腳印表示您下一步應站立的位置。\n請依照每個步驟操作，因為這對啟動平板的所有區域非常重要。\n完成錄製 若您對錄製結果不滿意，例如操作有誤，您可以點擊「重新開始」輕鬆重頭來過。\n若您希望繼續，請點擊「繼續」。\n點擊「儲存」按鈕，然後點擊「傳送」按鈕\n在將數據傳送給製造商審查之前，請輸入大概的體重和使用狀況。\n在備註欄中，您可以說明平板的問題，例如左腳感應較弱或其他疑慮。\n製造商希望收集此數據的原因是為了進一步改善重新校準演算法，以提供更精確的感測器讀數。\n輸入資訊並點擊「傳送」：\n完成後，校準文件將儲存至您的「文件」資料夾，請按「否」，然後關閉工具。\n第 2 部分：安裝校準文件 繼續執行以下步驟 啟動 Swing Catalyst，並在主選單中前往「設定」–\u003e「硬體」。 平板應會自動被偵測到，若未偵測到，請參閱疑難排解章節。\n點擊「設定…」按鈕以開啟設定對話框。\n感測板設定 前往「站姿感測器」分頁，然後點擊「瀏覽並安裝」。 前往您儲存校準文件的目錄，例如：C:\\User\\YourUsername\\Documents，選擇您剛從工具儲存的 mxd 文件，然後點擊「開啟」。 安裝完成後，系統將會通知您，您可以點擊 OK 關閉視窗。\n您的平衡板現在應已準備就緒可以使用。 在「揮桿分析」中開始一個新的工作階段，並在擷取揮桿時驗證您在「壓力與站立數據」資訊框中能取得壓力讀數。\n注意：在大量使用後，可能需要重新執行平衡板的校準，這可透過點擊 Swing Catalyst 設定中的「診斷」按鈕來完成，該按鈕將會啟動 SE 工具。\n疑難排解 平衡板未被識別或未顯示為已連接： 請確保裝置已被 Windows 識別。 開啟 Windows 裝置管理員。如何開啟？\n確認 Sensor Edge 裝置顯示在連接埠 (COM 和 LPT) 下方\n若未顯示或出現警告符號，請嘗試重新安裝驅動程式，並將裝置重新連接至不同的 USB 連接埠。\n將裝置連接至電腦上不同的 USB 連接埠。\n若使用 USB 延長線，請嘗試不使用延長線，直接將裝置連接至電腦。\n重新啟動 Swing Catalyst。\n重新啟動電腦。\n若您已嘗試上述所有步驟，但 Swing Catalyst 中仍顯示未連接，請聯絡我們的支援團隊。\n校準文件未成功安裝 您從 Sensor Edge 工具取得的校準文件可能損壞，或文件已遭損毀，請嘗試再次執行工具並安裝新的校準文件。若仍無法解決，請聯絡我們的支援團隊。 即使執行了工具，平板上仍有雜訊 雜訊可能由多種因素造成：\nSwing Catalyst 中安裝了錯誤的校準文件或未安裝校準文件。\n大量使用： 即使是大量使用的平板，也應經常執行校準工具，建議每月至少一次。\n直接暴露於陽光下。\n感測器本身的磨損。\n若信噪比不夠良好，工具可能無法濾除雜訊，此情況下平板將需要透過 RMA 進行重新校準。製造商將手動檢查工具所產生的工作階段，以評估是否能加以改善。\n若製造商無法解決問題，且平板仍在保固期內或擁有 ESA（延伸服務協議），則可在提供 RMA 的情況下將平板寄回製造商。\n硬體不相容問題 部分 AMD 300 系列晶片組（AMD Ryzen 1700 / 2700 系列）與 USB 1.1 裝置之間存在已知問題。具體表現為平衡板每秒僅能取得 75 個樣本，而非正常的約 145 個樣本。我們建議使用 USB 2.0 集線器，以使平衡板能以完整的取樣率進行串流。\n目前尚未發現 AMD 300 系列晶片組與 USB 3.0 裝置搭配使用時有任何已知問題。\n最後更新：2025-11-13 | 在官方支援網站上檢視",
    "description": "為了使用您的平衡板，它需要一個校準文件。每個平衡板都有專屬的校準文件，因此沒有兩個文件是相同的。如果您沒有...",
    "tags": [
      "Troubleshooting",
      "Usb-Camera",
      "Balance-Plate",
      "Pressure-Data"
    ],
    "title": "平衡板校準與診斷",
    "uri": "/sc-support/zh-hant/hardware/calibration-diagnostics/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "揮桿階段與關鍵點 為了幫助將高爾夫揮桿分解為各個部分，我們定義了四個階段和四個關鍵點，詳述如下。關鍵點（以粗體標示）在 SwingCatalyst 中顯示為時間軸上的書籤。\n站姿準備階段** - **對準球的準備姿勢，身體幾乎或完全沒有動作。 揮桿起始 - 球桿開始離開球的時間點。\n後揮階段 - 將球桿頭向上並遠離球移動。 後揮頂部 - 球桿反向並開始朝球移動的時間點。\n下揮桿階段 - 將球桿頭向下朝球移動。 擊球 - 球桿與球之間發生接觸的時間點。\n跟揮階段 - 從擊球到完成高爾夫揮桿的時間。 揮桿結束 - 高爾夫揮桿被視為完成的時間點，幾乎或完全沒有動作。\n資源：平衡板資料指南 揮桿速度與節奏資料方塊 根據在 SwingCatalyst 中設定的書籤計算揮桿速度與節奏。有助於識別揮桿過快或後揮過於急促的情況。\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "為了幫助將高爾夫揮桿分解為各個部分，我們定義了四個階段和四個關鍵點，詳述如下。關鍵點（以粗體標示）在 SwingCatalyst 中顯示為...",
    "tags": [
      "Balance-Plate"
    ],
    "title": "平衡板資料手冊",
    "uri": "/sc-support/zh-hant/hardware/balance-plate-data/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "本文介紹 10.2 版中新增的體重測量功能。\n適用軟體版本：Motion Catalyst 及 Swing Catalyst。\n版本：10.2\n所需硬體：Force Plates / Motion Plate / Dual Motion Plate。\n我目前使用的是哪個版本的軟體？\n為何需要測量體重？ 舊版軟體會在背景自動測量體重，大多數情況下運作良好，但對於高爾夫或棒球等特定運動，球員在擊球前往往會四處移動。這可能導致體重測量結果不準確。\n每當我們收集力資料時，都希望能將其與產生該力量的使用者相對應。\n資料的有效性對我們及我們的使用者而言至關重要。為了進一步提升資料分析的品質，在開始工作階段前進行一次快速的體重測量是必要的，以避免體重相關數據出現潛在誤差。\n使用全新體重測量功能時，您需要在工作階段開始時靜止站立數秒。測量完成後，結果將儲存並在整個工作階段中對所選使用者持續有效。\n若工作階段已停止，或您更換了使用者，則需要重新測量。\n除非點擊「體重」下拉選單，否則體重不會在任何地方明確顯示。\n此要求僅適用於擁有力量板的用戶，例如：Dual Motion Plate、Motion Plate、Dual Force Plate 或單一 Force Plates。\n如何進行體重測量 進入捕捉模式後，此流程將自動開始。請靜止站立數秒，測量結果將自動儲存至該使用者的本次工作階段。\n我們建議在測量時手持球桿／球棒，並在更換球桿或球棒後重新進行測量。\n測量體重 為確保測量能如預期運作，您的力量板配置必須正確設定且力量板運作正常。\n體重測量在捕捉模式下進行。執行活動類型的使用者必須親自完成體重測量。\n測量將自動開始。請務必保持靜止，否則程序需要更長時間才能完成。\n測量完成後，對話視窗將自動消失。您現在可以開始錄製。\n您可以編輯每次錄製的體重，或從下拉選單中重新進行測量。\n最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "舊版軟體會在背景自動測量體重，大多數情況下運作良好，但對於高爾夫或棒球等特定運動，球員在擊球前往往會四處移動……",
    "tags": [
      "Motion-Plate",
      "Force-Data"
    ],
    "title": "全新體重測量功能",
    "uri": "/sc-support/zh-hant/software-features/body-weight-measurement/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何安裝並在 Swing Catalyst 中使用 FLiR Blackfly S 相機 本支援文章說明如何在 Swing Catalyst 9.4 中設定 FLiR Blackfly S 相機。\n前言 Swing Catalyst 9.4 已整合對 FLiR Spinnaker SDK 所支援相機的功能。\n較舊的相機型號，如 Point Grey Chameleon、Point Grey Grasshopper 及 Point Grey Blackfly，同樣受 Spinnaker 支援，且相機設定現已整合於 Swing Catalyst 之中，這意味著您不再需要開啟 FlyCap2 來變更相機設定！\n實際性能可能因相機、電腦及設定方式而有所不同。我們強烈建議透過當地的 Swing Catalyst 經銷商或直接向 Swing Catalyst 購買相機，我們的相機型號建議及電腦建議可能會因使用情境而有所差異。\n這是為了確保您的電腦硬體與您所使用的相機相容。\nBlackfly S 相機入門文章： FLIR Blackfly S GigE\nFLIR Blackfly S USB\nPoint Grey FlyCap 2 舊版文章（Swing Catalyst 9.3 及更早版本）： Point Grey / FLIR GigE Blackfly\nPoint Grey / FLIR USB\n已測試的相機型號 USB： BFS-U3-16S2C-CS* 注意：USB 相機已在實驗室環境中進行測試。由於穩定性問題，我們通常不建議使用 USB 相機。 乙太網路（GigE）*： BFS-PGE-04S2C-CS\nBFS-PGE-16S2C-CS\nBFS-PGE-13Y3C-C\n已知限制：目前在 9.4 測試版中，我們尚未提供設定／固定 IP 位址的功能，此操作必須透過 AdapterConfigGUI 工具程式完成（請參閱 FLIR Blackfly S GigE 設定指南）。 相關主題與建議 建議的電腦規格\n建議的 USB 3.0 元件\nGigabit Ethernet / GigE 網路建議\n如何查看您的電腦規格\n我使用的是哪個版本？\n最後更新：2021-06-18 | 在官方支援網站上檢視",
    "description": "本支援文章說明如何在 Swing Catalyst 9.4 中設定 FLiR Blackfly S 相機。",
    "tags": [
      "Troubleshooting",
      "Gige-Camera",
      "Usb-Camera",
      "Flir"
    ],
    "title": "在 Swing Catalyst 中使用 FLIR Blackfly S（Spinnaker）相機",
    "uri": "/sc-support/zh-hant/cameras-video/flir-spinnaker-cameras/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何在 Swing Catalyst 中使用 FLIR Blackfly S USB 相機 本文介紹如何在 Swing Catalyst 中設定和配置相容 Spinnaker 的 USB 相機。\n部分較舊的型號也受到支援，例如 Chameleon USB 3.0 和 Grasshopper USB 3.0，本文可作為這些相機的參考指南。不同型號之間在可用設定和功能上存在差異，因此本文內容可能與您畫面上所見不完全相同。\n注意：Spinnaker 僅支援 Swing Catalyst 9.4 及更高版本。我目前執行的是哪個版本？\n本文分為以下幾個部分 實體硬體設定（相機與鏡頭）。\n軟體配置（相機配置）。\n如何提升影像品質。\n疑難排解提示。\n相關主題與建議： 我們強烈建議您在購買相機或電腦系統之前，先熟悉我們的相關建議。USB 3.0 可能存在穩定性問題，通常並不是我們（Swing Catalyst）針對固定式相機安裝所建議的選項。\n建議的 USB 3.0 元件\n建議的電腦規格\n在 Swing Catalyst 中設定 FLIR Blackfly S GigE\n舊版文章：在 Swing Catalyst 中設定 Point Grey Blackfly GigE（適用於舊版 Swing Catalyst）\n入門指南：硬體設定 使用相機隨附的 4 顆黑色十字頭螺絲，將腳架轉接座固定至相機本體。\n拆開鏡頭包裝，並確保移除塑膠鏡頭蓋。\n取下相機的感光元件保護蓋：\n將鏡頭安裝至相機\n鎖緊固定螺絲，將線纜固定至相機：\n調整相機鏡頭：\n此鏡頭由上至下共有三個調整項目：\n對焦（向 ∞ 符號方向調整，可使背景中較遠的物體更清晰對焦）\n光圈（Iris 調整，用於控制通過鏡頭的進光量，光圈越小，影像越銳利）\n變焦（調整鏡頭為廣角或望遠）\n入門指南：驅動程式安裝 驅動程式可從我們的下載頁面 下載。\n請依照安裝精靈的指示操作。\n選擇「Camera Evaluation」\n若您使用的是 USB 相機，請取消勾選「I will use GigE Cameras」核取方塊。\n驅動程式安裝現已完成。只要您已安裝 Swing Catalyst 9.4 或更高版本，您的相機現在應會出現在 Swing Catalyst 的相機設定中。\n在 Swing Catalyst 設定中配置您的相機 請確認相機已連接至電腦，且相機背面的 LED 燈呈綠色閃爍狀態。\n啟動 Swing Catalyst，然後點擊「設定」-\u003e 「相機」。 Spinnaker 相機會以 Spinnaker 標示（在此範例中，我們連接了一台 USB 相機和一台 GigE 相機，我們要配置的是 BFS-U3 型號，U3 代表 USB3）。\n點擊「進階…」\n進階相機設定視窗會顯示所有可能對您有幫助的設定，讓我們逐一了解每個設定。 您在上方看到的設定為相機預設值，請注意大部分設定都設為 Auto，我們可以調整這些設定，以便更好地控制用於運動分析的影像品質。\n變更幀速率： 勾選「啟用幀速率控制」核取方塊後，您即可手動設定幀速率；若未勾選此方塊，幀速率基本上會設為 Auto（注意：此相機的最高幀速率為 226 FPS。若要達到最高幀速率，所有設定均需設為手動）。\n幀速率可能受到快門速度及裝置連結傳輸量設定的限制。\n變更曝光時間（快門速度）： 除非在戶外日光下拍攝，否則建議使用手動曝光，因為自動曝光模式下，影片很可能因模糊而不適合運動分析。為減少模糊，我們建議曝光時間低於 2ms（2000μs），在充足照明條件下，曝光時間應低於 1ms（1000μs）。\n若要在高爾夫揮桿過程中清晰捕捉球桿動作，曝光時間應更低，建議嘗試 400 或 200。\n影像的亮度取決於快門速度、Gain 設定、鏡頭光圈以及現有光源的多寡。\n變更相機 Gain： 在光線變化的環境中，將 Gain 設為 Auto 較為理想；但若處於室內環境，將 Gain 設為手動則是更好的選擇。\ndB 值越高，影像越亮，但隨之而來的雜訊也越多，可能使整體影像品質看起來較差。有時為了降低快門速度以獲得清晰的逐幀影像（例如擊球時的球桿、棒球棒等），適度提高 Gain 值而犧牲一些雜訊是值得的。\n變更 Gamma 和黑色階：\n黑色階可視為一種亮度調整方式，其對應相機感光元件上任何像素所能返回的最小值。\n增加黑色階數值可使影像變亮。\n我們建議保留預設值。\n有關提升影像品質的更多詳細資訊，請參閱此篇含對比圖片的支援文章：improving-image-quality.md\n變更相機白平衡：\n通常我們建議將此設定保留為 Auto（連續），但若要達到最高幀速率，也需要將此功能關閉。\n白平衡會影響影像的色溫，若白平衡偏差過大，影像效果會不理想，通常會使影像偏紅或偏綠。\n啟用自動白平衡會犧牲部分幀速率，使幀速率從相機最高的 226 FPS 降至 200 FPS。\n裝置連結傳輸量： 我們建議保留預設設定，但降低此值可在 FPS 降低的情況下減少掉幀。\n套用 Region Of Interest（ROI）：\nRegion of Interest 是一種縮小影像尺寸的方法，同時也能減少每張影像所需的頻寬。透過縮小影像尺寸，由於整體像素讀取需求較小，可以提高幀速率。\n縮小高度和寬度對幀速率和降低頻寬需求有正面效果。\n若要變更 Region of Interest，可將高度滑桿向左拖曳以縮小影像高度。\n由於我們已變更影像高度，現在也可以調整 Y 偏移量，這對於因影像尺寸縮小而無需實際移動相機的情況非常有幫助。\n若返回「相機」分頁並查看幀速率，現在會看到最高幀速率可設定為 288（這是因為我們透過縮小相機感光元件高度套用了 Region of Interest）。\n疑難排解 USB 3.0 的使用可能較為棘手。例如，某些 USB 線纜效果優於其他線纜，且特定的 USB 3.0 控制器可能會造成問題。請參閱我們的建議 USB 元件文章以獲取詳細資訊：recommended-usb3-components.md\n掉幀：\n降低每台裝置的裝置連結傳輸量可能有助於避免掉幀。若降低幅度足夠大，傳輸量將會影響幀速率。\n尤其在多相機設定中，降低傳輸量可以幫助穩定系統，代價是每秒幾幀的損失。\n例如，USB 3.0 的宣稱傳輸速度為 5Gb/s，即 625 MB/s。\n一台解析度為 1920 x 1200、以 150 FPS 運作的 USB 3.0 相機，每台相機約使用 345MB/s。因此，依照我們的建議，在多相機設定中（大多數情況下）為每台相機配備專用的 USB 3.0 控制卡非常重要。\n另一種方法（通常可與降低傳輸量搭配使用）是利用 Region of Interest，通常稱為 ROI。\nRegion Of Interest（ROI）：\n使用 Region of Interest（或感興趣區域）可縮小整體影像尺寸並提升 FPS，同時也有助於降低頻寬使用量，進而減少掉幀（請參閱上文了解如何使用 ROI）。\n此外，USB 線纜對於實際接收的幀速率也是一個重要因素，如以下文章所述：recommended-usb3-components.md\n連線問題（相機斷線）：\nUSB 3 容易出現連線問題。這些問題最常見的原因是 USB 3.0 延長器品質不佳、線纜總長度過長，或是線纜因過度彎折而損壞。\n若您的相機反覆斷線：\n檢查線纜與連接埠，嘗試重新連接相機。\n若上述方法無效，請嘗試將相機連接至其他 USB3 連接埠。\n若您連接了多台相機，請拔除部分相機，問題是否有所改善或解決？\n若第 2 和第 3 點仍無法解決問題，可能表示存在資源問題或硬體不相容的情況。\n若您使用的是 USB3 延長線纜，請嘗試不使用任何延長器或 USB Hub，直接連接相機。\n若問題仍持續存在，請考慮在我們的說明中心建立支援工單，在這種情況下，我們通常會建議嘗試使用較短的線纜，例如將 5 公尺的線纜縮短至 3 公尺。\n狀態指示 LED\nLED 說明 建議 不亮 無電源，或 LED 處於啟用狀態，或 LED 處於無錯誤的錯誤狀態 檢查線纜是否已連接至電腦，嘗試其他線纜和 USB 連接埠 綠色閃爍（閃爍 1 次） 相機以 USB 1 速度運作 檢查 USB3 連接埠連線，檢查線纜是否損壞，嘗試不使用 USB 延長器 綠色閃爍（閃爍 2 次） 相機以 USB 2 速度運作 同上 綠色閃爍（閃爍 3 次） 相機以 USB 3 速度運作 無問題 快速綠色閃爍 韌體更新進行中 - 穩定綠燈 已開始擷取影像／相機使用中 - 綠色與紅色交替閃爍 錯誤 嘗試重新啟動相機電源，嘗試其他 USB 連接埠或線纜 連接相機時應閃爍 3 次，若只閃爍 1 次或 2 次，可能表示 USB 線纜或相機所連接的 USB 連接埠存在問題。\n其他問題：\n依據您的硬體狀況，開啟銳化和降噪濾波器可能並非最佳選擇，關閉這些功能將減少部分 CPU 和 GPU 使用量。您可以在進階相機設定的濾波器分頁中找到相機濾波器。有關濾波器的更多資訊，請參閱：improving-image-quality.md\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "本文介紹如何在 Swing Catalyst 中設定和配置相容 Spinnaker 的 USB 相機。",
    "tags": [
      "Troubleshooting",
      "Gige-Camera",
      "Usb-Camera",
      "Flir"
    ],
    "title": "在 Swing Catalyst 中設定 FLIR BlackFly S USB",
    "uri": "/sc-support/zh-hant/cameras-video/flir-blackfly-usb-setup/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何在 SwingCatalyst 中使用 FLiR Blackfly S（GigE）機器視覺相機 本文介紹如何在 SwingCatalyst 中使用相容 Spinnaker 的 GigE Vision 相機。\n部分較舊的型號亦受支援，例如 Blackfly GigE（非 S 系列），可作為相應相機的參考指南。各型號之間在可用設定與功能上存在差異，因此本文內容可能與您畫面上顯示的略有不同。\n注意：Spinnaker 僅在 SwingCatalyst 9.4 及更新版本中受支援。\n相關主題與建議： 我們強烈建議您在購買相機或電腦系統之前，先熟悉我們的建議事項。建議為您的相機系統配置專用網路卡。\nGigabit Ethernet 與 GigE Vision 建議事項\n建議的電腦規格\n在 SwingCatalyst 中設定 FLiR Blackfly S USB\n如何確認我正在執行哪個版本的 SwingCatalyst？\n如何為 Blackfly / Blackfly S GigE 設定靜態 IP\n本文分為以下幾個章節 實體硬體設定（相機與鏡頭）。\n軟體設定（IP 配置）。\n軟體設定（相機配置）。\n如何提升影像品質。\n疑難排解提示。\n相關主題與建議： 我們強烈建議您在購買相機或電腦系統之前，先熟悉我們的建議事項。USB 3.0 可能存在穩定性問題，通常不是我們（SwingCatalyst）針對固定相機安裝所建議的方案。\n建議的 USB 3.0 元件\n建議的電腦規格\n在 SwingCatalyst 中設定 FLIR Blackfly S GigE\n舊版文章：在 SwingCatalyst 中使用 Point Grey Blackfly GigE（適用於較舊版本的 SwingCatalyst）\n開始使用：硬體設定 使用相機隨附的 4 顆黑色十字頭螺絲，將腳架轉接座固定於相機機身。\n拆開鏡頭包裝，並確保移除鏡頭的塑膠保護蓋\n移除相機上的感光元件保護蓋：\n將鏡頭安裝至相機\n調整相機鏡頭：\n此鏡頭由上至下有三個調整環：\n對焦（向 ∞ 符號方向調整，可使背景中較遠的物體對焦清晰）\n光圈（Iris 調整，控制通過鏡頭的進光量，光圈縮小可獲得更銳利的影像）\n變焦（調整鏡頭的廣角或望遠焦段）\n安裝雙埠網路卡 重要：網路卡必須依照建議事項進行配置。\ngige-network-setup.md\n開始使用：驅動程式安裝 點擊下載驅動程式（若使用 Chrome，請右鍵點擊並選擇「另存連結為」）\n下載完成後，點擊執行檔並依照安裝精靈的指示操作。\n選擇「Camera Evaluation」。\n保持勾選「I will use GigE Cameras」選項。\nIP 配置 驅動程式安裝完成後，系統應會提示您執行 AdapterConfigGUI。若未出現提示，可至以下路徑找到該工具：C:\\Program Files\\FLIR Systems\\Spinnaker\\shortcuts\\utilities\nAdapter 配置工具的介面如下所示：\n點擊「Start」並選取所有「Intel(R) 82574L」介面卡。\n點擊「Smart Config」，工具將自動完成後續配置。\n在 SwingCatalyst 設定中配置您的相機 確認相機已連接至電腦，且相機背面的 LED 燈正在閃爍綠色。\n啟動 SwingCatalyst 並點擊「設定」-\u003e「相機」。 Spinnaker 相機在相機清單中會顯示 Spinnaker 字樣。\n點擊「進階…」\n「進階相機設定」視窗會顯示所有可能用到的設定選項，讓我們逐一了解各項設定。\n上方顯示的設定為預設相機設定，請注意大多數設定均為 Auto 模式，我們可以變更這些設定，以便更好地控制運動分析的影像品質。\n變更幀速率：\n勾選「Frame rate control enable」（幀速率控制啟用）核取方塊，即可手動設定幀速率；若取消勾選，幀速率實際上會設為 Auto（注意：此相機的最大幀速率為 78 FPS。若要達到最大幀速率，所有設定均需調整為手動模式）。\n幀速率可能受快門速度及裝置連結傳輸量設定的限制。在此情況下，若要達到完整幀速率，需要提高傳輸量（詳情請見後續說明）。\n變更快門速度：\n除非在戶外陽光下拍攝，否則建議使用手動快門速度；若使用 Auto 模式，視訊影像很可能過於模糊，無法用於運動分析。為減少模糊，我們建議快門速度低於 2ms（2000μs），在充足光源下快門速度可低於 1ms（1000μs）。\n視訊影像的亮度取決於快門速度、Gain 設定、鏡頭光圈以及可用光線量的綜合效果。\n變更相機 Gain：\n在光線變化的環境下，將 Gain 設為 Auto 較為理想；但若在室內固定環境中，將 Gain 設為手動會是更好的選擇。\ndB 值越高，影像越亮，但同時也會產生更多雜訊，可能使整體視訊品質下降。有時為了將快門速度降低以獲得逐幀清晰的物體影像（例如擊球時的球桿、棒球棒等），適當提高 Gain 值以換取較多雜訊是值得的。\n變更 Gamma 與黑色電平：\n黑色電平可視為一種亮度調整方式，其值對應相機感光元件上任何像素所能回傳的最小數值。\n提高黑色電平數值可使影像變亮。\n我們建議保持預設值不變。\n如需更多關於提升視訊影像品質的詳細資訊，請參閱這篇附有對比照片的支援文章：improving-image-quality.md\n變更相機白平衡：\n通常我們建議將此設定保留為 Auto（連續），但若要達到最大幀速率，也需要將其關閉。\n白平衡會影響視訊影像的色溫，若白平衡偏差過大，影像看起來會很不自然，通常會使影像偏紅或偏綠。\n啟用 Auto 白平衡後，幀速率會有所犧牲，使其降至 200 FPS 而非相機最大值 226 FPS。\n裝置連結傳輸量：\n在 GigE 相機上，裝置連結傳輸量與封包大小相互關聯，也就是說，若要使用最大傳輸量，封包大小需設定為 9000。若要達到完整幀速率，必須完成此設定。\n套用 Region of Interest（ROI）：\nRegion of Interest 是一種縮減影像尺寸的方式，同時也可降低每張影像所需的頻寬。透過縮小影像尺寸，可以提高幀速率，因為整體像素讀取需求較小。\n縮減高度和寬度對提升幀速率及降低頻寬需求均有正面效果。\n若要變更 Region of Interest，可將高度滑桿向左拖曳以縮減影像高度。\n由於我們已變更影像高度，現在也可以調整 Y 軸偏移量，這在因影像尺寸縮小而無需實際移動相機的情況下非常有用。\n返回「相機」頁籤並查看幀速率，您會發現最大幀速率現在可設定得更高，這是因為我們透過縮減相機感光元件的高度套用了 Region of Interest。\n疑難排解 請參閱我們的 GigE Vision / Gigabit Ethernet 建議事項：\ngige-network-setup.md\n**注意：**我們建議所有使用 Blackfly BFS-PGE-04S2C 型號的使用者更新每台相機的韌體：\nFLIR 提供的韌體更新說明：http://softwareservices.flir.com/BFS-U3-50S5-BD2/latest/Family/Firmware.htm\n韌體檔案下載：https://flir.app.boxcn.net/s/jr65evml5bkuqnh29sx49lm3clf7nr0k\n掉幀：\n儘管大多數 GigE 相機非常可靠，但依據網路設定和相機配置的不同，可能需要微調設定以避免掉幀。\n請確認封包大小設定為 9000，這對於良好的性能至關重要，否則很可能發生掉幀。同樣重要的是，網路介面卡也需設定為使用 9kB Jumbo Frames，以確保相機與網路介面卡的設定一致。\n一台解析度為 1440 x 1200、幀速率 78 FPS 的 GigE 相機，每台約使用 134MB/s 的頻寬。因此，在多相機設定的情況下（大多數情況），依照我們的建議配備專用網路控制卡非常重要。若您是透過我們購買 GigE 相機，將會附有一張 PCI Express 雙埠網路卡供安裝。\n我們通常不建議在同一網路介面卡上運行超過一台相機。\n濾波器驅動程式：\n..\nRegion of Interest（ROI）：\n使用 Region of Interest（或感興趣區域）可縮減整體影像尺寸並提升 FPS，同時也有助於降低頻寬使用量，進而減少掉幀情況（請參閱上方關於如何使用 ROI 的說明）。\n其他問題：\n依據您的硬體狀況，開啟銳化與降噪濾波器可能並不理想，關閉這些濾波器可減少部分 CPU 與 GPU 的使用量。您可以在「進階相機設定」的「濾波器」頁籤中找到相機濾波器設定。更多關於濾波器的資訊請見：improving-image-quality.md\n狀態指示燈說明 LED 含義 建議措施 無燈光 未供電、LED 處於非啟用狀態，或 LED 處於無錯誤的錯誤狀態 嘗試拔除相機後重新連接；若問題持續，請檢查線纜或電源 閃爍綠色（1 次） 裝置已配置為使用連結本地位址（LLA） 無問題 閃爍綠色（2 次） 持久性 IP 位址 裝置已配置為使用持久性 IP 閃爍綠色（3 次） DHCP IP 位址 裝置已配置為使用 DHCP（通常不建議，我們建議設定靜態／持久性 IP） 常亮綠色 擷取已開始 相機正在串流視訊 快速閃爍綠色 韌體更新中 韌體更新正在進行 綠色與紅色交替閃爍 一般錯誤 相機處於錯誤狀態，請嘗試重新啟動相機電源 最後更新：2025-05-07 | 在官方支援網站上檢視",
    "description": "本文介紹如何在 SwingCatalyst 中使用相容 Spinnaker 的 GigE Vision 相機。",
    "tags": [
      "Troubleshooting",
      "Gige-Camera",
      "Usb-Camera",
      "Flir"
    ],
    "title": "在 SwingCatalyst 中設定 FLIR BlackFly S GigE",
    "uri": "/sc-support/zh-hant/cameras-video/flir-blackfly-gige-setup/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "使用多重力量圖表 本文涵蓋 10.0 及更高版本中的功能。\n適用軟體版本：Motion Catalyst 與 Swing Catalyst。\n版本：10.0 - 10.2\n僅適用於以資料為中心及詳細資料的版面配置。\n所需硬體：力量板 / Motion Plate / Dual Motion Plate，或含有力資料的錄製。\n我使用的是哪個版本的軟體？\n相關文章：\n使用新圖表庫\n力量圖表階段\n多重力量圖表資料框 多重力量圖表資料框是一個具備部分新功能的資料框。\n它的行為與現有圖表相同，您可以用相同的方式與圖表互動（詳情請參閱上方文章「使用新圖表庫」）。\n主要功能包括：\n合併資料檢視，所有力資料集中於一個資料框中。\n點擊圖表時顯示數值標註，標註會跟隨滑鼠游標移動。\n可切換每個來源的顯示與隱藏。\n系統會分別記住您在以資料為中心及詳細資料版面配置中的來源選擇。\n支援階段醒目提示。\n多重力量資料框在詳細資料版面配置中的範例\n以資料為中心版面配置的範例：\n請注意部分來源已取消選取。透過點擊紅色箭頭所指示的選單，即可輕鬆切換顯示狀態。\n已關閉的來源其顏色將比已啟用的來源更為暗淡。\n數值標註 點擊圖表時，將在滑鼠游標所在位置顯示對應數值的標註。\n最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "本文涵蓋 10.0 及更高版本中的功能。",
    "tags": [
      "Motion-Plate",
      "Force-Data"
    ],
    "title": "多重力量圖表",
    "uri": "/sc-support/zh-hant/software-features/multiple-forces-graph/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何升級或降級 Fox 或 Lynx 攝影機的韌體 前置條件：\n一台 Fox 或 Lynx 攝影機。\nMVS 軟體套件。\n您想要升級或降級的攝影機型號所對應的韌體檔案。\n已知正常／問題韌體版本概覽，請至韌體下載處下載韌體。\n型號 韌體下載 受影響的韌體版本 已知正常的韌體版本 Fox 下載 V1.6.3 201222_551351 V1.6.3 220416_798858 Lynx 下載 3.3.1 220915 3.3.0 220408 MVS 軟體可從以下位址下載：https://cloudfront.swingcatalyst.com/drivers/MVS_STD_3.4.1_220407.zip\n升級韌體 從上方表格下載您想要更新或降級的攝影機韌體，並解壓縮 zip 檔案。\n安裝 MVS 軟體（若尚未安裝）\n安裝完成後，執行 MVS 應用程式。已連接的攝影機應會顯示在左側清單中。若攝影機已列於清單中，請點擊頂部工具列中的「Tool」，並選擇「Firmware Updater」。\nFirmware Updater 應用程式 請注意型號名稱與韌體版本，3.3.1 是已知無法正常運作的韌體版本（如上方表格所示）。\n勾選「Model Name」左側的核取方塊以選擇您要更新的攝影機，然後點擊右上角的「資料夾」圖示，瀏覽至您解壓縮韌體的資料夾。\n選擇韌體檔案並點擊「OK」。「Select Update File」視窗將會關閉，您即可在 Firmware Updater 軟體中點擊「Update」繼續進行。\nNote: 可以同時更新多台攝影機，但它們必須屬於相同類型／型號。請選擇您要更新的韌體檔案。\n最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "如何在 Swing Catalyst Fox 和 Lynx 攝影機上升級或降級韌體",
    "tags": [
      "Lynx-Camera",
      "Fox-Camera"
    ],
    "title": "如何升級或降級 Fox / Lynx 韌體",
    "uri": "/sc-support/zh-hant/cameras-video/fox-lynx-firmware/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "簡介 本支援文章說明如何使用 Boot Camp 在您的 Apple Mac 上執行 Swing Catalyst。\nBoot Camp 讓您可以使用您自備的 Microsoft Windows 安裝光碟，在 Mac 電腦的獨立分割區中安裝 Windows。\n安裝完成後，您可以在 Mac 電腦上選擇使用 Windows 或 Mac OS X。\n注意：Swing Catalyst 無法在 Apple 硬體（搭載 ARM 架構的 Apple M1 / M2 CPU）上執行。\n本文章主要供舊版參考，內容已過時。\n適用範圍 使用 Mac OS（10.5 至 10.11）的使用者 建議需求 Apple Mac（10.5 至 10.11）\n一片空白 CD 或 USB 儲存裝置，用於建立 Windows Boot Camp 支援軟體（木桿）安裝媒體。\n安裝磁碟上至少需有 16 GB 的可用空間（適用於 32 位元），若安裝 64 位元 Windows 則需 20 GB。\n正版 Microsoft Windows\n請注意，並非所有 Mac 都能透過 Boot Camp 執行 64 位元 Windows，且只有搭載 Intel 處理器的 Mac 才能使用 Boot Camp。\n安裝 若要在 Apple 筆記型電腦或桌上型電腦上使用 Swing Catalyst，您需要 Mac OS 版本 10.5 至 10.11。\nSwing Catalyst 需要 Windows 環境，支援 Windows Vista、7、8.1 及 Windows 10。\n為獲得最佳使用體驗，我們強烈建議使用 Windows 7 64 位元版本。\n建議使用 Boot Camp 輔助程式來安裝 Windows。Boot Camp 可讓您在同一台電腦上雙重開機 Mac OS 與 Windows，方便您輕鬆切換兩套作業系統。\n在啟動 Mac 時按住 Option（Alt）鍵，即可在 Microsoft Windows 與 Mac OS X 之間切換。\n預設作業系統為 Mac OS X，但您可以在 Windows 的「啟動磁碟控制台」或 Mac OS X 的「啟動磁碟」偏好設定中輕鬆變更預設啟動磁碟。\n請前往 http://support.apple.com/manuals/#bootcamp 尋找與您的 Mac 對應的使用手冊。\n您也可以參閱 Boot Camp 常見問題解答 http://support.apple.com/kb/HT4818，其中可能有助於解決您遇到的問題。\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "本支援文章說明如何使用 Boot Camp 在您的 Apple Mac 上執行 Swing Catalyst。",
    "tags": [
      "Usb-Camera"
    ],
    "title": "如何在 Apple Mac 上執行 Swing Catalyst",
    "uri": "/sc-support/zh-hant/account-setup/run-on-mac/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "簡介 本篇支援文章將說明如何在 Swing Catalyst 中設定與配置 BodiTrak 2 Vector 感測板。技術上，本文也適用於較舊款的 BodiTrak 16x25 \u0026 16x27（BT 型號）。\n系統需求 具備可用 USB 連接埠的電腦。\nSwing Catalyst 9.7 或更新版本，並支援感測板功能。\n以下支援感測器對照表中列出的其中一款型號。\nWindows 10 或 11 64 位元（x64）（注意：不支援 ARM 或 x86 架構）。\n支援哪些感測器？ 我們支援以下型號，請注意部分型號已停產。截至 2024 年，我們並不支援 BodiTrak 的全部感測器型號。\n型號 / 型號編號 行 x 列 尺寸（寬 x 高）cm\nBT7150 16x25 71 x 45.5\nBT（原型機？） 16x27 75.6 x 44.8\nBT2-1632-500 16x32 94 x 47\nBT2-1625-500 16x25 73 x 47\nBT2-1625-500 16x25 71 x 45.5\n如需平臺校正相關事宜，請聯繫 BodiTrak 支援團隊。\n驅動程式安裝 驅動程式安裝由 Windows 自動完成。\n若您的系統尚未安裝任何 BodiTrak 軟體，且感測器未顯示為已連接或未被識別，請聯繫 BodiTrak 支援團隊。\n可能的問題來源：\nUSB 連接線。\n與電腦的連接。\n請參閱我們的疑難排解章節以取得更多提示。\n配置 以下步驟並非絕對必要，但有助於確認感測器已被偵測並在 Swing Catalyst 中正常運作。\n啟動 SwingCatalyst，並前往「設定」-\u003e「硬體」。\n感測板應會被自動偵測（若未自動偵測，請嘗試從下拉選單中手動選擇 BodiTrak 2 Vector）。\n確認其已開啟（否則整合功能將無法運作）。\n若要開啟感測器配置對話框，請點擊「Configure…」。\n注意：若無法連接至感測器或收到錯誤訊息，請參閱我們的疑難排解章節 感測板設定 您可以在感測板設定視窗中檢視即時數據、套用旋轉，以及查看其他感測器資訊（例如序號）。\n中間的大白點表示壓力中心（CoP）， 這是衡量您身體平衡狀態的指標。\n當您保持平衡時，CoP 將位於雙腳之間的中央位置；當身體向前或向後傾斜時， CoP 會相應地向前或向後移動。 將重心向左或向右移動，將使 CoP 向左或向右偏移。\n每個足部印記下方各有兩個較小的點，代表每隻足部的 CoP， 顯示各足部區域內的壓力中心。 兩點之間的連線則表示您站立的平面。\n旋轉（如何旋轉、鏡像或翻轉壓力數據） 點擊「Rotate Stance Data」按鈕即可旋轉感測板的方向。點擊此按鈕可將數據旋轉 180 度，如需更進階的設定，請參閱「進階」選項。\n點擊「進階」即可存取進階旋轉設定：\n若要垂直翻轉數據，可點擊「翻轉」。\n疑難排解 請注意：\n如需任何支援、維修或退貨申請，請聯繫 BodiTrak。\n本疑難排解章節旨在協助您識別並解決在使用 Swing Catalyst 搭配感測器時可能遇到的問題。\n數據顯示翻轉，即使墊子方向擺放正確 您可以在感測板設定中垂直翻轉數據，請參閱旋轉。 BodiTrak 感測器未被識別或未顯示為已連接： 若 BodiTrak 軟體正在執行，可能會阻止對感測器的存取。同樣地，BodiTrak DataPort 是一項可能在您的系統上執行的服務，會阻止 Swing Catalyst 連接至感測器。\n確認沒有任何 BodiTrak 軟體正在執行。\n停止 BodiTrak DataPort 服務。\n停止服務：點擊 Windows 開始功能表按鈕並輸入「服務」，點擊「服務」應用程式，找到「BodiTrak Data Port」，按右鍵並選擇停止。\n若要停止服務，請按下 Windows 開始功能表的 Windows 圖示，然後輸入「服務」。\n開啟服務應用程式，找到 BodiTrak DataPort，按右鍵並點擊停止。\n停止該服務可能會導致其他使用 BodiTrak 的應用程式無法正常運作，但將允許 Swing Catalyst 連接至感測器。\n若未安裝 BodiTrak DataPort，請繼續執行以下疑難排解步驟。\n開啟 Windows 裝置管理員。如何開啟？ 確認 BodiTrak 裝置出現在 USB Serial Devices 底下。 **\n若未出現，或顯示警告符號，請嘗試將裝置重新連接至不同的 USB 連接埠。\n將裝置連接至電腦上的其他 USB 連接埠。\n若使用了 USB 延長線，請嘗試不透過延長線直接將裝置連接至電腦。\n重新啟動 Swing Catalyst。\n重新啟動電腦。\n若您已嘗試上述所有步驟，且裝置在 BodiTrak 軟體中可正常運作但在 Swing Catalyst 中無法使用，您可以聯繫我們的支援團隊。\n感測墊上的雜訊 / 校準問題 長期大量使用後，感測器可能需要重新校準，請聯繫 BodiTrak 支援團隊。\n感測器與頂部墊子蓋之間可能存在異物，請確認感測器周圍沒有雜物。\n檢查感測器底部下方是否有異物頂住墊子底部。\n足部印記不清晰 若足部印記不清晰，這可能與感測器對低壓力值處理方式的校準有關。可能是感測器校準不正確或需要重新校準。\nSwing Catalyst 不會對從 BodiTrak 感測器接收到的數據進行任何額外的濾波處理，但若您的足部印記在 Swing Catalyst 中顯示效果與其他程式中使用您的 BodiTrak 墊子時不同，歡迎透過我們的服務中心建立支援票單，我們將嘗試進行調查。\n最後更新：2024-06-07 | 在官方支援網站上檢視",
    "description": "本篇支援文章將說明如何在 Swing Catalyst 中設定與配置 BodiTrak 2 Vector 感測板。技術上，本文也適用於較舊款的 BodiTrak 16x25 \u0026 16x27（BT 型號）。",
    "tags": [
      "Troubleshooting",
      "Usb-Camera",
      "Pressure-Data"
    ],
    "title": "如何在 Swing Catalyst 中使用 BodiTrak 感測器",
    "uri": "/sc-support/zh-hant/hardware/boditrak-sensors/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何在 Swing Catalyst 中使用 Dragon USB 2.0 攝影機 本文介紹如何在 Swing Catalyst 中設定及使用 Dragon USB 2.0 攝影機。\n此攝影機不需要安裝任何外部驅動程式。\n如需疑難排解，請參閱本文底部的疑難排解章節。\n連接攝影機 將攝影機連接至您的電腦，然後啟動 Swing Catalyst。\n在主選單中，點擊「設定」按鈕（位於畫面左下角，以齒輪圖示標示），然後點擊「攝影機」。\n設定\n成功偵測到的攝影機將自動顯示在攝影機清單中\n為了使用攝影機，我們首先需要指定一個攝影機角度。\n攝影機現已啟用，並已指定攝影機角度。 攝影機設定 變更攝影機設定。\nnote: 一般情況下無需進行此操作，除非您希望變更白平衡或 Gamma。曝光預設設為 Auto，在大多數使用情境下應已足夠。\n視您的照明環境而定，可能需要變更曝光設定。\n點擊「進階」\nnote: Auto 僅適用於特定屬性，例如白平衡、曝光和對焦。\n若您進行了任何錯誤的變更，可點擊「還原預設值」來恢復預設設定。\n疑難排解 幀速率偏低： 幀速率可能因攝影機的曝光設定而降低。\nDragon 攝影機預設為自動曝光，若光線不足，每幀的曝光時間將會較長，攝影機將無法穩定提供每秒 120 幀的幀速率。\n若曝光時間過長，幀速率將會降低，且錄製畫面會較為模糊。\n這與您在黑暗環境中用手機拍照時的情形相同——影像可能會出現殘影，這是由於長時間曝光所致（為補償照明條件不足）。\n在充足的室內照明或戶外環境下，您應能達到約 120 FPS。\n掉幀問題： 若攝影機發生掉幀（即未能提供應有的 FPS），可能會產生視覺瑕疵。 請確保攝影機直接連接至電腦，最好連接至電腦背面的 USB 連接埠之一。\n您可能需要嘗試不同的 USB 連接埠以找到最適合您的選項。一般建議避免使用桌上型電腦正面的 USB 連接埠，因其性能較差（通常會提供較低的幀速率）。\n選擇不同的媒體類型 通常 DirectShow 和 Swing Catalyst 會自動選擇最佳媒體類型，無需手動變更，但在某些情況下可能需要進行調整：\n若您的網路攝影機支援 60 FPS（解析度為 1920x1280），但您只能獲得 30 FPS\n與其他應用程式相比，視訊解析度顯得較小或較差。\n若要覆蓋自動選擇的媒體類型，請勾選「覆蓋媒體類型」核取方塊，並從下拉清單中選擇格式。\n請注意，選項清單通常相當龐大且不易理解。請尋找幀速率和解析度數值，並選擇您認為最佳的組合。若您遇到掉幀問題，可以嘗試降低解析度。\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "本文介紹如何在 Swing Catalyst 中設定及使用 Dragon USB 2.0 攝影機。",
    "tags": [
      "Troubleshooting",
      "Usb-Camera"
    ],
    "title": "如何在 Swing Catalyst 中使用 Dragon（120 FPS）USB 2.0 攝影機",
    "uri": "/sc-support/zh-hant/cameras-video/dragon-usb2-camera/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "簡介 本篇支援文章將說明如何在 Swing Catalyst 中設定 Foresight GCQuad / GCHawk。GCQuad 可同時與 FSX 及 Swing Catalyst 搭配使用。\n系統需求 電腦需具備可用的 USB 連接埠或 WiFi（與網際網路連線分開）。\nSwing Catalyst 8.0 或更新版本\nnote: 若您打算在 Swing Catalyst 中使用 HD 攝影機，建議您單獨執行 FSX（即不與 Swing Catalyst 同時執行），或在另一台電腦上執行。\n請確認您至少配備 NVidia GeForce 1080 或更高規格的顯示卡，且電腦符合 Foresight 的建議規格。\n安裝步驟 透過 USB、WiFi* 或乙太網路連接 GCQuad。\n在 Swing Catalyst 設定 -\u003e 硬體中選擇 Foresight GCQuad。\n確認 Launch Monitor 已開啟，並勾選「作為觸發器使用」。\n* 若透過 Wi-Fi 連線，請務必備有其他網際網路連線方式，因為使用 GCQuad 前必須透過網際網路進行驗證。\n* 若 GC Hawk 無法匯入球桿資料，請確認韌體已更新至最新版本。\n* SwingCatalyst 不支援以推桿模式作為觸發器。\n疑難排解 Foresight GCQuad 未顯示為已連線或未觸發 重新啟動 Foresight GCQuad / GCHawk 電源。\n確認電腦有偵測到 Foresight GCQuad。它將會在「本機」下顯示為大量儲存裝置。\n若裝置未顯示，請嘗試將其連接至電腦上的其他 USB 連接埠。\n若透過 WiFi 連線，請確認您可透過其他方式存取網際網路，或使用獨立的 WiFi 無線網路卡。與 GCQuad 的連線必須是專用連線。\n確認 GCQuad 的 LED 燈為綠色而非藍色。若為藍色，表示球桿追蹤已關閉。球桿追蹤必須開啟才能正常運作。詳情請參閱 Foresight GCQuad 使用手冊：https://www.foresightsports.com/sites/default/files/files/GCQuad_User_Manual.pdf\n重新啟動 Swing Catalyst。\n重新啟動電腦。\n若您已嘗試上述所有步驟，但 Swing Catalyst 仍顯示未連線，請聯絡 support@swingcatalyst.com。\n最後更新：2022-06-23 | 在官方支援網站上檢視",
    "description": "本篇支援文章將說明如何在 Swing Catalyst 中設定 Foresight GCQuad / GCHawk。GCQuad 可同時與 FSX 及 Swing Catalyst 搭配使用。",
    "tags": [
      "Troubleshooting",
      "Usb-Camera",
      "Force-Data",
      "Launch-Monitor"
    ],
    "title": "如何在 Swing Catalyst 中使用 Foresight GCQuad",
    "uri": "/sc-support/zh-hant/hardware/foresight-gcquad/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "簡介 本支援文章說明如何設定和使用 IDS uEye USB 相機的實際操作細節。\n點擊此處 查看安裝詳情\n若需使用 GigE（網路 IDS 相機），請參閱此文章：ids-ueye-gige.md\n適用範圍 開始使用 IDS uEye USB 相機與 Swing Catalyst。 相機說明 uEye USB 相機由三個獨立元件組成：\n相機本體\n鏡頭\nUSB 線材\n相機 相機本體沒有任何實體調整功能，所有設定均透過軟體控制。\n鏡頭 隨附的鏡頭有 3 個調整環，從相機端由內而外依序為：\n變焦\nIris\n對焦\n變焦／對焦 在可變焦（變焦）鏡頭上，變焦環與對焦環需相互配合，因此同時微調這兩個調整環有助於達到良好的對焦與縮放效果。\nIris Iris 調整環決定進光量（即「開口大小」）。\n縮小 Iris 會使影像變暗，但可藉由增加景深（「對焦」範圍）來提升對焦效果。\n若影像曝光過度（例如在非常晴朗的戶外），建議縮小 Iris。\n軟體設定 在 SwingCatalyst 中，所有相機設定均可透過「相機設定」中的「進階」按鈕進行調整，該選項位於主選單的「設定 - 相機」下。\n點擊「進階」按鈕後，進階相機設定對話框將會顯示。\n對於 uEye 相機，有幾項重要設定可決定相機的關鍵特性：\n像素時脈 像素時脈本質上是一個「速度」設定，提高此值將增加可用的最大幀速率，但若設定過高可能導致掉幀。\n幀速率 幀速率設定支援自動與手動兩種配置方式。\n建議使用手動設定，因為自動模式會停用其他自動功能，例如自動 Gain。\n曝光快門 低快門速度對於捕捉快速動作並減少動態模糊至關重要。\n對於高爾夫揮桿，建議最大曝光時間不超過 2ms（毫秒），以獲得清晰的影像。\n若需非常銳利的影像，曝光設定 0.5ms 是個好選擇，但需要充足的光源，僅建議於戶外使用。\n可將曝光快門設為自動模式，並透過「Max」自動參數設定上限，此選項可讓相機在不同光線條件下自動調整，同時維持良好的影像品質。\nGain Gain 可提升影像亮度，但同時也會在影像中引入更多雜訊。\n在大多數情況下，建議使用自動 Gain，讓相機自行調整。\n白平衡 建議將白平衡設為 Auto，以讓相機自動調整影像的色彩平衡。\n若影像中的色彩顯示不正確，請使用手動設定來微調紅、綠、藍參數。\n最大化每秒幀數 (FPS) 您的最大 FPS 會因電腦規格而有所不同。當發生掉幀時，表示系統無法處理所有資料，需要降低速度。\n以下是幫助您最大化相機性能的逐步操作程序。\n前往主選單 -\u003e 設定 -\u003e 相機。\n點擊 uEye 相機上的「進階」按鈕。\n在進階設定對話框中，切換至「相機」索引標籤。\n點擊影片預覽面板中的「播放」按鈕以開始串流即時影像。\n將「速度（像素時脈）」滑桿向右拖曳，直到您看到掉幀計數器開始增加（右下角）。\n將滑桿稍微向左拖曳，直到不再發生掉幀，並留有一定餘裕。例如，若您發現在 38 時停止掉幀，則將其設定為 35。\n一旦找到在不丟失幀的情況下幀速率盡可能高的速度，即完成設定。\n疑難排解 掉幀／播放時影像「不穩定」 若相機發生掉幀，可能是電腦的 USB 匯流排無法滿足相機的頻寬需求。\n請嘗試降低速度（像素時脈），直到相機不再掉幀。\n完全無法對焦（影像非常模糊） 若您完全無法對焦相機（使用對焦調整環），請確認相機與鏡頭之間是否裝有金屬環。\n該金屬環為 CS 轉 C 接環轉接環，當相機與鏡頭均為 CS 接環時，不需要使用此轉接環。\n升級至 Windows 10\n請注意，使用 Windows 更新升級至 Windows 10 時存在已知問題。若您在嘗試升級至 Windows 10 時遇到錯誤或「藍色螢幕」，您需要先透過「程式和功能」解除安裝 IDS 軟體，然後在升級完成後從我們的下載頁面重新安裝驅動程式。\n資源：\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "本支援文章說明如何設定和使用 IDS uEye USB 相機的實際操作細節。",
    "tags": [
      "Troubleshooting",
      "Gige-Camera",
      "Usb-Camera"
    ],
    "title": "如何在 Swing Catalyst 中使用 IDS uEye USB 相機",
    "uri": "/sc-support/zh-hant/cameras-video/ids-ueye-usb/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何在 Swing Catalyst 中使用 Point Grey 機器視覺相機 Warning: 請注意，以下說明適用於舊版 Swing Catalyst 或特定舊款 Point Grey 相機。請參閱我們的新版文章 注意：相機控制設定僅限於 FlyCapture（Point Grey 軟體）。\n支援的相機類型：GigE、Firewire 以及支援 FlyCap2 SDK 的 USB 2.0 / 3.0。\n有關 GigE 相機設定，請參閱此文章：point-grey-flir-gige.md\n驅動程式可在此處取得：https://swingcatalyst.com/drivers\n注意：本文不支援 FLiR Spinnaker SDK。請改參閱 Blackfly S / Spinnaker 相關文章：flir-spinnaker-cameras.md\n步驟： 開啟 Point Grey FlyCap2 應用程式。\n確認相機已在 Point Grey 軟體中被偵測到。 點擊「Configure Selected」，將會彈出一個新視窗，這裡是我們設定相機參數的地方。有關使用 FlyCapture2 的詳細說明，請參閱 Point Grey 相機說明文件。 如何變更快門速度及其他相機設定 在快門設定下，確保取消勾選 Auto 選項，並設定快門速度（我們建議揮桿分析時使用 2ms 或更短）。儲存設定請參閱步驟 4。\n視情況可能也需要調整幀速率，您可以取消勾選 Auto 並設定為所需的幀速率，然後依照步驟 4 操作。\n在相機設定中，若您處於靜態照明環境（例如室內），請確保取消勾選曝光與 Gain 的 Auto 選項。\n為獲得最佳影像品質，我們不建議將 Gain 設定至最大值，因為這會在影像中引入更多雜訊。\n儲存相機設定 前往「Advance Camera Settings」，在「Memory Channel」下確認已設定為 Channel 1，然後點擊「Save」。\n關閉 Point Grey FlyCap 軟體，並確認相機已顯示於 Swing Catalyst 中。 其他選項：\n您也可以在「Custom Video Modes」下變更 Region of Interest／感興趣區域\n此處我們透過將影像裁切至 800x800 像素來套用 Region of Interest。\n在某些情況下，此設定可提高您的幀速率，因此可能有所助益。\n完成後請記得儲存（請參閱步驟 3）。\n注意：若您發生掉幀情況，可能需要依據您的系統設定及相機（無論是 USB 或 GigE）降低封包大小。有關 GigE 的說明，請參閱此文章：\npoint-grey-flir-gige.md\n最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "注意：相機控制設定僅限於 FlyCapture（Point Grey 軟體）。",
    "tags": [
      "Gige-Camera",
      "Usb-Camera",
      "Flir"
    ],
    "title": "如何在 Swing Catalyst 中使用 Point Grey / FLiR USB 相機",
    "uri": "/sc-support/zh-hant/cameras-video/point-grey-flir-usb/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "本文說明如何將 Swing Catalyst 連接至 TrackMan，並將發球監測數據與影片一同儲存。若要啟用整合功能，TrackMan 軟體必須與 Swing Catalyst 同時運行。\nnote: 若要在 Swing Catalyst 中使用 TrackMan，您需要一台支援串流影片的攝影機。（請參閱支援的攝影機）\n安裝：TrackMan Pro/Launch 4.0.9 將 TrackMan 裝置連接至電腦\n啟動 TrackMan Pro 或 TrackMan Launch，並進入擊球追蹤畫面\n啟動 Swing Catalyst，並在開始選單中前往 設定 - 硬體\n啟用 Launch Monitor 整合功能\n選擇 TrackMan\n安裝：TrackMan Performance Studio 支援版本 2.2-4.0\n將 TrackMan 裝置連接至電腦\n啟動 TrackMan Performance Studio\n在開始選單中進入 設定 畫面（圖1：齒輪符號）\n啟用 SDK Output（圖2）\n前往 開始 並點選 Shot analysis\n啟動 Swing Catalyst，並在開始選單中前往 設定 - 硬體\n啟用 Launch Monitor 整合功能\n選擇 TrackMan\n安裝：搭配 TM3e 或 TrackMan 4 的 TPS 開啟 TrackMan 3e 裝置電源\n在 Windows 中連接至 TrackMan WiFi 網路，或改用 USB 連接線連接。\n除第1步外，請依照上述安裝指南的相同步驟操作\n圖1：在 TrackMan Performance Studio 中啟用 SDK 輸出。\n搭配 TrackMan Pro/Launch/Performance Studio 使用 Swing Catalyst 請先啟動 TrackMan 軟體，並進入擊球追蹤畫面。\n啟動 Swing Catalyst 並捕捉揮桿動作。\n開啟已錄製的揮桿，即可在影片旁的數據框中檢視擊球數據。\n若一切安裝正確，系統現在應會自動捕捉 TrackMan 擊球數據，並將其與影片一同儲存。\n攝影機設定 在某些情況下，TPS 軟體可能會鎖定系統上的攝影機，導致 Swing Catalyst 軟體無法使用這些攝影機。\n未來版本的 TPS 軟體可能會新增設定選項以停用此行為，但在此之前，TrackMan 提供了以下暫時解決方案：\n開啟 TPS 軟體，並記下攝影機清單中顯示的確切攝影機名稱。\n找到以下檔案並以記事本開啟：\nC:\\ProgramData\\TrackMan\\VideoManagement\\ExcludeCameras.TMConfig\n將攝影機名稱新增至檔案中。若有多台攝影機，請將所有名稱各自新增於獨立的一行。\n疑難排解 確認 TrackMan 已在 TPS 中被識別並成功連接。\n確認已在 Swing Catalyst 硬體設定選單中啟用 Launch Monitor 並選擇 TrackMan。\n確認 Swing Catalyst 的 Launch Monitor 設定下方已勾選「trigger」。\n若仍未觸發，請檢查 TPS 的設定，並確認「SDK Output」已啟用。\n嘗試重新啟動 TrackMan 裝置。\n若您已接收到數據且 Swing Catalyst 顯示已連接，但未觸發，請嘗試重新啟動電腦。\n已觸發但延遲過長：請嘗試在 Launch Monitor 設定中調整延遲補償，建議值約為 1500ms；此數值視球的種類以及雷達是在室內或室外使用而有所不同。\n若您在 Swing Catalyst 中仍未收到任何數據：\n嘗試重新啟動 TrackMan 裝置，並重新確認 SDK 輸出是否已啟用。\n嘗試停用 Windows 防火牆，若此方法有效，請為 TPS 和 Swing Catalyst 新增例外規則。\n確認 TrackMan OEM 服務是否正在運行，若是，請停用它並再次嘗試。有關 Windows 服務的更多資訊，請參閱：http://www.7tutorials.com/what-are-windows-services-what-they-do-how-manage-\n查看我們的進階疑難排解步驟。\n最後更新：2024-06-03 | 在官方支援網站上檢視",
    "description": "如何連接並設定 TrackMan Launch Monitor 以搭配 Swing Catalyst 使用",
    "tags": [
      "Troubleshooting",
      "Usb-Camera",
      "Launch-Monitor"
    ],
    "title": "如何在 Swing Catalyst 中使用 TrackMan",
    "uri": "/sc-support/zh-hant/hardware/trackman-setup/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "注意：USB 攝影機已在實驗室環境中進行過測試。 連接攝影機 從設定選單啟用攝影機。 點擊齒輪圖示。\n設定選單 請注意，攝影機整合類型會被標示出來，例如 DirectShow、Spinnaker：\n若攝影機被正確偵測到，將會自動出現在攝影機清單中。\n若要使用攝影機，需為其指定一個攝影機角度，請點擊「Disabled」圖示並選擇一個角度，然後將「OFF」開關切換為「ON」以啟用攝影機。\nDragon 攝影機已啟用，並被指定為正面視角右側攝影機（表示它從右側面向使用者）。\n進階攝影機設定 進階攝影機設定讓您能夠更改攝影機名稱、鏡像與旋轉、裁切，以及調整視訊影像並進行設定變更。\n注意：Auto 僅適用於某些屬性，例如白平衡、曝光和對焦。\n若您進行了任何錯誤的變更，可以點擊「Restore defaults」還原為預設值。\n疑難排解 幀速率偏低： 幀速率可能因攝影機的曝光設定而降低。\n大多數攝影機預設為 Auto 曝光，若光線不足，每幀的曝光時間將會較長，導致攝影機無法提供最大幀速率。\n若曝光時間過長，幀速率將會降低，且錄製的影像會較為模糊。\n掉幀問題： 若攝影機發生掉幀情況（即無法達到應有的 FPS），可能會產生視覺瑕疵。 請確保攝影機直接連接至電腦，理想情況下請連接至電腦背面的 USB 連接埠之一。\n您可能需要嘗試不同的 USB 連接埠，以找到最適合您的那一個。一般而言，應避免使用桌上型電腦正面的 USB 連接埠，因為其性能較差（通常會提供較低的幀速率）。\n選擇不同的媒體類型 通常 DirectShow 和 Swing Catalyst 會自動選擇最佳媒體類型，無需手動更改，但某些情況或場景確實需要進行此操作：\n若您的網路攝影機在 1920x1280 解析度下支援 60 FPS，但您實際只獲得 30 FPS\n與其他應用程式相比，視訊解析度顯得較小或較差\n您遇到掉幀或接收到的資料不足的情況。\n某些格式比其他格式使用更少的頻寬。若攝影機支援 RAW8、GREY8 或其他 8 位元影像格式，這些格式優於任何 RGB 或 MPEG 類型的媒體類型，因為它們所需的頻寬大幅減少。\n最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "請注意，攝影機整合類型會被標示出來，例如 DirectShow、Spinnaker：",
    "tags": [
      "Troubleshooting",
      "Usb-Camera"
    ],
    "title": "如何在 Swing Catalyst 中使用網路攝影機（DirectShow 整合）",
    "uri": "/sc-support/zh-hant/cameras-video/web-camera-directshow/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "本支援文章說明如何在 Swing Catalyst 中設定與配置 Basler 攝影機。\nnote: 若要在 Swing Catalyst 中使用 Basler 攝影機，您需要 Halcon USB 加密狗及授權。請聯絡 contact@swingcatalyst.com 購買授權。\nHalcon 安裝與配置說明請參閱：\nhalcon-setup.md\n重要事項：\n請確認已安裝 MVTec Halcon 驅動程式濾波器，若未安裝，攝影機將無法正常運作。同時請確認取消勾選其他已安裝的濾波器驅動程式，例如 Basler 濾波器驅動程式。\n請確認 Swing Catalyst 在 Windows Defender 防火牆中已允許私人網路與公用網路的存取。\n範例：\n設定攝影機的 IP IP 設定\n每個攝影機和乙太網路卡（NIC／網路介面控制器）應設定為不同子網路（及子網路遮罩）上的靜態 IP。\nnote: NIC IP 是您電腦上網路介面卡的 IP 位址，cam ip 是攝影機的 IP 位址。「…」表示一個範圍，這只是您可以設定的 IP 範例。\n單一或多攝影機設定（搭配一個或多個網路卡／介面卡）的範例：\nCameras on network adapter 1: nic ip: 10.0.1.1 cam ip: 10.0.1.10 … 10.0.1.20 subnet mask:255.255.255.0\nCameras on network adapter 2: nic ip: 10.0.2.1 cam ip: 10.0.2.10 … 10.0.2.20 subnet mask: 255.255.255.0\nCameras on network adapter 3: nic ip: 10.0.3.1 cam ip: 10.0.3.10 … 10.0.3.20 subnet mask: 255.255.255.0\nCameras on network adapter 4: nic ip: 10.0.4.1 cam ip: 10.0.4.10 … 10.0.4.20 subnet mask: 255.255.255.0\n首先，我們需要設定攝影機的 IP，這可透過 Pylon IP Configurator 完成。\n按下鍵盤上的開始功能表按鈕，輸入 pylon ip，IP Configurator 應該會出現。如果未出現，可能是您尚未安裝該軟體。\n若要安裝 Pylon 軟體，請參閱：https://www.baslerweb.com/en/sales-support/downloads/software-downloads/，並搜尋：pylon 5.1.0 Camera Software Suite Windows。\n點選攝影機，然後選擇 Static IP\n依照上方範例設定攝影機的 IP 位址與子網路遮罩。\nnote: 若您使用多個攝影機，您需要\n透過 Halcon 配置 Basler GigE 攝影機\n在 Swing Catalyst 中，前往「設定」索引標籤，再進入「攝影機」。\n點選「進階」。\n前往「配置」索引標籤。 啟用 GtlNumBuffers 核取方塊，並輸入 200 作為數值。 設定 Basler GigE 攝影機：\n讓我們來看看如何設定曝光時間、快門速度及幀速率。\nNOTE: 如果您無法檢視設定，或在 Swing Catalyst 中出現錯誤，請檢查 Windows 防火牆設定。請嘗試關閉防火牆，以確認是否為防火牆封鎖了 Swing Catalyst 存取攝影機。\n若設定正常且可順利串流，請確認 Swing Catalyst 在 Windows Defender 防火牆中已允許公用網路與私人網路的存取。\n展開 AcquisitionTrigger 索引標籤，輸入最大（或更低）幀速率，然後點選「Enable Acquisition Frame Rate」。這將允許您自行定義幀速率。注意：幀速率可能受曝光值限制。\n設定曝光值\n對於靜態環境（例如室內工作室），通常最好使用手動曝光。全自動曝光可能導致幀速率改變，進而造成影像不穩定。在此情況下，我們不使用自動曝光，以便自行控制。一般建議曝光時間低於 2000（2ms）。\n設定增益值\n與曝光類似，在靜態／室內照明條件下，將增益設定為手動模式最為合適。曝光越高，影像顆粒感越強，且視訊編碼所需的時間也會比低增益時更長。\n若要設定手動增益，請將 Gain Auto 從「Continuous」改為「Off」，然後暫停再播放播放功能以重新載入設定。透過修改 Gain（Raw）中的數值來設定增益值。\n變更影像大小、感興趣區域、Region of Interest 及其他設定\n在某些情況下，您可能希望縮小影像大小，以聚焦於視訊影像的特定區域，例如在擊球瞬間詳細檢視球桿與球的狀況。\n這可透過感興趣區域（AOI）以及 ROI（Region of Interest）來實現。使用此功能縮小整體影像大小，同時也能提升幀速率。\n將設定儲存至攝影機\n將設定儲存至攝影機非常重要。若未執行此步驟，您所有的配置將會遺失。\n請確認設定「Default Set Selector」與「Default Startup Set」。系統提供多種使用者設定組可供選擇，理論上您可以在每個設定組中儲存不同的設定。例如，您可以選擇「User Set 1」作為預設值，再點選「User Set Save」將目前的設定儲存至該設定檔。\n最後更新：2022-10-10 | 在官方支援網站上檢視",
    "description": "每個攝影機和乙太網路卡（NIC／網路介面控制器）應設定為不同子網路（及子網路遮罩）上的靜態 IP",
    "tags": [
      "Troubleshooting",
      "Gige-Camera",
      "Usb-Camera",
      "Licensing"
    ],
    "title": "如何在 Swing Catalyst 中設定 Basler GigE 攝影機",
    "uri": "/sc-support/zh-hant/cameras-video/basler-gige-setup/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "本指南說明如何在 Swing Catalyst 中設定電子郵件帳戶，以便分享課程。\n您可以在「設定」的「一般」標籤下找到電子郵件分享設定。選取「自訂」選項按鈕，並填入您的電子郵件地址與密碼。注意：您可能需要查閱或聯繫您的電子郵件服務供應商，以取得外寄 SMTP 伺服器地址。這是傳送外寄電子郵件的必要條件。\n請注意，連接埠號碼與外寄 SMTP 伺服器會因服務供應商而異。如需更多資訊，請聯繫您的電子郵件服務供應商。\n常見的外寄 SMTP 連接埠為 25、465 或 587。 SSL/TLS 可選。\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "如何設定電子郵件分享功能，以便將揮桿錄製傳送給學生",
    "tags": [],
    "title": "如何在 Swing Catalyst 中設定電子郵件分享",
    "uri": "/sc-support/zh-hant/software-features/email-sharing/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何設定 Point Grey GigE 攝影機以與 SwingCatalyst 搭配使用 有關攝影機設定的配置，請參閱此文章：point-grey-flir-usb.md\n本文說明如何設定攝影機與網路卡的 IP 位址。\n注意：攝影機支援有限，攝影機控制僅限於 FlyCapture（Point Grey 軟體）。\n相容網路卡及其配置：\n請參閱：gige-network-setup.md\n注意：有關 Spinnaker SDK 支援的攝影機，請參閱我們的 Spinnaker 文章。\n注意，性能重要提示： 若您使用 Intel 網路卡，請下載並安裝 Intel 驅動程式，這樣您將可以設定中斷調節速率，而使用 Windows 驅動程式時此選項可能無法使用。\n直接跳至 IP 配置請點擊此處\n重要事項：\nRegion of Interest (ROI) 無法在 Blackfly BFLY-PGE-03S3C 攝影機上使用。\n我們建議每台攝影機使用一個專用網路卡（連接埠）。\n設定您的 Point Grey / FLIR GigE 攝影機：\n需求： 從我們的網站安裝 Point Grey Flycap 軟體：https://www.swingcatalyst.com/drivers\n我們推薦的其中一款網路卡\n網路卡已安裝並正常供電。\n攝影機已連接至網路卡。\n注意： 安裝 Flycap 時，請確認已勾選 Point Grey Image Filter 驅動程式的核取方塊。\n安裝網路卡 如需安裝網路卡，請參考此處提供的步驟：https://www.wikihow.com/Install-a-PCI-Card，FLiR 雙埠網路卡的安裝步驟大致相同。\n\u003c\u003e使用 GigE Configurator 工具設定 IP 位址 我們需要為網路卡（連接埠）及連接的攝影機配置 IP 位址。\n讓我們先從設定網路卡開始！\n開啟 Point Grey GigE Configurator 應用程式。可在以下路徑找到：C:\\Program Files\\Point Grey Research\\FlyCap2 Viewer\\bin64 開啟 Point Grey GigE Configurator 應用程式並點擊攝影機。 請注意攝影機連接至哪個網路卡（請見紅色標示處）。\n在我們的案例中，攝影機連接至 Ethernet 9。\n如上方截圖左側清單所示，點擊「網路卡」列表中的 Ethernet 9。\n設定網路卡的 IP 位址：\n按照下方截圖修改 IP 位址和子網路遮罩，然後點擊「Set IP address / Subnet」，再點擊「Yes」和 OK。\n現在我們已完成第一個網路卡的 IP 位址設定。下一步是最佳化網路卡設定。\n最佳化網路卡 如下方截圖所示，請注意紅色標示的數字 MTU\n我們需要增大此數字。依照下方標示區域點擊「Open Network Connections」。\n點擊「進階」索引標籤，找到「Jumbo Packet」並將值設定為 9014 Bytes。\n變更中斷調節設定\n將「Interrupt Moderation」設定為「Enabled」\n點擊「Interrupt Moderation Rate」並將值設定為「Extreme」。\n重要：若您要使用超過 2 台攝影機，可能需要將「Interrupt Moderation」設定為「Disabled」，以避免掉幀。\n設定攝影機的 IP 位址 點擊清單中可用的攝影機（在我們的案例中只連接了一台攝影機，因此可確認是正確的攝影機）。\n請輸入以下 IP（注意，我們正在設定連接至上述 Ethernet 9 的攝影機 IP 位址）：\n點擊「Set IP Address / Subnet」，再點擊「Yes」然後 OK。\n在 FLiR GigE Configurator 左側清單中找到您剛才設定 IP 位址的攝影機，並點擊它。\n設定 IP 位址指派配置\n此步驟非常重要，因為我們需要讓攝影機的 IP 位址變更具有持久性，否則攝影機在斷電後將會遺失其配置。\n取消勾選「DHCP」並勾選「Persistent IP」\n點擊「Copy from Current」，然後點擊「Set IP Address / Subnet」\n驗證封包大小\n讓我們驗證封包大小（MTU）是否設定正確。\n點擊「Discover Maximum Packet Size」，應顯示 9000。\n點擊「Test Camera Connection」以確認連線是否正常運作，以及是否能從攝影機接收資料。\n設定超過 1 台攝影機 現在您已配置好一台攝影機和一個網路卡，可以重複上述步驟來配置多台攝影機。\n參考上述步驟和截圖，我們已設定好攝影機和 Ethernet Adapter 9 的 IP，設定多台攝影機的程序相同，只需使用不同的 IP 即可。\n為簡化說明，我們將其稱為 Ethernet Adapter 1、2、3，依此類推⋯\nEthernet Adapter 1： IP：10.0.1.1 Subnet：255.255.255.0\nCamera 1： IP：10.0.1.10 Subnet：255.255.255.0 Ethernet Adapter 2： IP：10.0.2.1 Subnet：255.255.255.0 Camera 2： IP：10.0.2.10 Subnet：255.255.255.0\nEthernet Adapter 3： IP：10.0.3.1 Subnet：255.255.255.0\nCamera 3： IP：10.0.3.10 Subnet：255.255.255.0\nEthernet Adapter 4： IP：10.0.4.1 Subnet：255.255.255.0\nCamera 4： IP：10.0.4.10 Subnet：255.255.255.0\n在 SwingCatalyst 中使用攝影機 在 SwingCatalyst 中使用 Point Grey 攝影機，只需設定攝影機角度並點擊啟用即可。點擊「播放」按鈕確認攝影機是否正常運作。\n所有攝影機配置均需透過 Point Grey 的 FlyCapture 軟體完成。\n如何變更快門速度及其他攝影機設定 啟動 Point Grey Flycap2 軟體，並前往「Camera Settings」。\n在「shutter」（快門）下，確認已取消勾選 Auto。 對於室內攝影棚等靜態環境，通常最好使用手動曝光。全自動曝光可能導致幀速率改變，並造成影像不穩定。\n在本案例中，我們未使用自動曝光，因為我們希望自行控制。一般建議曝光時間低於 2000（2ms）。 若要儲存設定，請參閱步驟 3。\n有時也可能需要調整幀速率，您可以取消勾選 auto 並設定為您所需的幀速率，然後執行步驟 3。\n有時也可能需要調整幀速率，您可以取消勾選 auto 並設定為您所需的幀速率，然後執行步驟 3。\n設定 Gain 值\n與曝光類似，在靜態/室內照明條件下，建議將 Gain 設定為手動模式。曝光越高，影像雜訊越多，且視訊編碼所需時間也比低 Gain 設定更長。\n若要設定手動 Gain，請取消勾選 Auto。\n請參閱此文章了解如何設定攝影機：point-grey-flir-usb.md\n疑難排解與進一步最佳化\n若您出現掉幀，或 FLiR / Point Grey 攝影機同步問題，請在 Flycapture2 -\u003e Custom Video modes 下檢查封包大小。\n您可以嘗試將封包大小從最大值 9000 調低至較小的值。視您的 CPU 而定，最佳值可能因電腦而異。\n若在一個網路卡上使用 2 台攝影機，建議將封包延遲設定為：9500。\n請記得前往「Advanced Camera Settings」，並按照攝影機設定文章的說明將設定儲存至 bank 1，** point-grey-flir-usb.md**\n請記得在「Memory Channels」下點擊儲存，並確認已選取 Channel 1！\n若您未取得任何影像或在 SwingCatalyst 中收到錯誤，請嘗試變更封包大小並儲存至 bank 1（如上圖所示）\n4 台攝影機設定掉幀問題：\n在某些 4 台攝影機的設定中，建議關閉中斷調節，或將中斷調節速率從「extreme」改為「low」。若調節速率較高，中斷次數將受到抑制，從而降低 CPU 負載。然而，中斷發生的頻率越低，主機的 ACK 回應越可能出現延遲。若您以較快的幀速率串流影像，這可能導致封包遺失。\n根據您的系統選擇不同的調節速率，可改善網路及系統性能。\n您可以在此文章的「Interrupt Moderation Rate」章節中了解更多詳情： https://www.flir.com/ support-center/iis/machine- vision/application-note/ troubleshooting-image- consistency-errors/ 。\n如需更詳細的資訊，請參閱 FLiR / Point Grey 關於掉幀的支援文章：https://eu.ptgrey.com/tan/10899\n請參閱 https://www.ptgrey.com/support/downloads/10113/ 以取得 Point Grey 針對 Blackfly 攝影機型號的技術參考手冊。\n進一步最佳化網路卡\n接收緩衝區\n建議將此值設定為盡可能高的數值。這有助於在使用多台攝影機或較高解析度 GigE 攝影機時避免掉幀。\n透過網路交換器使用兩台攝影機： 請注意，僅支援 Blackfly BFLY-PGE-03S3C（90FPS）攝影機。使用其他攝影機可能導致掉幀。\n重要：網路交換器必須支援 9KB Jumbo Frames（大多數網路交換器均支援此功能），我們推薦使用：https://www.netgear.com/support/product/GS105.aspx 交換器或類似 GS105 型號的交換器。\n若要使用網路交換器，請務必按照下方截圖將「Packet Delay」設定為 9500。\n將「Packet Delay」設定為 9500 後，前往「Advanced Camera Settings」並儲存至 bank 1，如攝影機設定文章所說明，** point-grey-flir-usb.md**\n設定「Packet Delay」有助於改善在一個網路卡上使用兩台 Blackfly 03S3C 攝影機時的掉幀問題。\n更多有關多台攝影機設定的詳細資訊可在此處找到：https://www.ptgrey.com/tan/10351\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "在 SwingCatalyst 中設定 Point Grey / FLIR GigE Blackfly 攝影機的指南。",
    "tags": [
      "Troubleshooting",
      "Gige-Camera",
      "Usb-Camera",
      "Flir"
    ],
    "title": "如何在 SwingCatalyst 中設定 Point Grey / FLIR GigE（Blackfly）攝影機",
    "uri": "/sc-support/zh-hant/cameras-video/point-grey-flir-gige/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "如何設定多個顯示器\n本支援文章說明如何在 Windows 中設定及配置多個顯示器、如何在 SwingCatalyst 中設定回饋螢幕、多個顯示器的使用情境，以及如何在多台顯示器之間導覽和移動視窗。\n如何在 Windows 中設定多個顯示器：\n請確認您的電腦支援連接多個顯示器。部分電腦或筆記型電腦有所限制，例如最多只能連接 2 台顯示器。 若需連接兩台以上的顯示器，您需要一張具備足夠輸出埠數量的顯示卡；或者，若您只需鏡像畫面，也可以使用 HDMI 分配器來達成（詳見下方說明）。\n確認您擁有連接顯示器所需的線材。目前最常見的連接類型為：HDMI、DVI 或 Display Port，後者通常需要轉接頭。大多數電腦都具備 HDMI 埠，但部分筆記型電腦配備的是 Mini HDMI 或 Display Port。 請務必確認您所使用的連接埠類型，以便在需要時準備合適的轉接頭。\n將顯示器連接至電腦，然後在桌面上按滑鼠右鍵，選擇「顯示設定」。 若顯示器已成功被偵測，畫面中應會顯示一台以上的顯示器。\n若要將該顯示器設為主要顯示器，請勾選「將此設為我的主顯示器」核取方塊。\nNote: 建議將主要顯示器設定為顯示器 1（即顯示卡的第一個輸出埠）。\n若要將桌面延伸至副顯示器，請在「多部顯示器」下方選擇對應選項。\n請注意，若您連接的顯示器解析度較高或較低，畫面顯示可能會略有差異。DPI 也可能不同，導致文字顯示比您習慣的更大或更小。請盡量使用建議的解析度。\n在 Windows 中設定好多台顯示器後，請確認顯示器的方向正確（例如，放在右側的顯示器在設定中也應位於右側）。正確設定方向對導覽操作非常有幫助，尤其是在使用兩台以上顯示器時。\nNote: Windows 7 的顯示設定介面有所不同，但整體流程相同。 如何在 SwingCatalyst 中使用多個顯示器：\n相關支援文章：如何設定回饋螢幕\nSwingCatalyst 會在上次執行時所在的顯示器上啟動。若您希望將 SwingCatalyst 移至其他顯示器，請點選並拖曳標題列。\n使用範例：啟用回饋螢幕後，您可以透過獨立的地板顯示器，即時向高爾夫球手提供回饋。\n以下是安裝了多個回饋螢幕的 SwingCatalyst 工作室範例：\n兩台地板顯示器透過 HDMI 分配器進行鏡像，將訊號一分為二。其中一條 HDMI 線連接至電腦顯示卡的 HDMI 輸出埠。\n以下是 SwingCatalyst 搭配獨立視窗中的檔案總管一同執行的範例：\n將電視掛在牆上，非常適合用來顯示 Launch Monitor（如 TrackMan）的球數據，並可與 SwingCatalyst 並排同時執行：\n移動視窗時，請點選並按住視窗，然後將滑鼠指標拖曳至您希望移動的位置，如下圖所示：\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "如何在 SwingCatalyst 中設定多個顯示器",
    "tags": [
      "Launch-Monitor"
    ],
    "title": "如何在 SwingCatalyst 中設定多個顯示器",
    "uri": "/sc-support/zh-hant/software-features/multiple-displays/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "本技術支援文章說明如何將 AVT GigE 攝影機連接至電腦、如何設定系統，以及使用 GigE 攝影機的硬體需求。\n硬體需求 要擊球準備並安裝 GigE 攝影機，您的電腦需要有一個或多個空閒的網路連接埠。\n我們建議使用以下其中一款網路卡，這些網路卡均經製造商測試並驗證可正常運作：\nIntel Pro 1000 GT（PCI，1 個連接埠）\nIntel Pro 1000 PT（PCIe x1，1 個連接埠）\nIntel CT（PCIe x1，1 個連接埠）\nIntel Pro 1000 PT Dual Port（PCIe x4，2 個連接埠）\nIntel Pro 1000 PT Quad Port Low Profile（PCIe x4，4 個連接埠）\n也可以使用其他大多數千兆網路卡，但請注意網路卡必須支援「巨型幀」（Jumbo Frames）。\n若您希望使用兩台以上的攝影機，在某些情況下可能還需要使用千兆網路交換器。 大多數千兆交換器均可使用，但請務必確認交換器同樣支援巨型幀。\nNetgear GS105 千兆交換器 5 埠 硬體安裝與驅動程式 有關 Allied Vision Tech（AVT） 攝影機，請參閱本頁底部的製造商文件（第 19-26 頁）。\n最重要的步驟如下：\n從 https://www.swingcatalyst.com/drivers 下載驅動程式\n安裝驅動程式，並確保接受安裝「濾波器」。\n設定網路卡以接受「巨型幀（9K）」\n停用網路卡上除 AVT 濾波器及 IPV4 以外的所有網路模組\n如果您不確定如何執行上述任何步驟，請參閱上方連結的製造商指南，其中包含詳細說明所有步驟的完整指引。\n連接 GigE 攝影機 若要連接單台 GigE 攝影機，只需使用一般的 CAT5e/6 RJ45 網路線，將攝影機直接連接至千兆網路卡/連接埠即可。\n若您希望連接兩台以上的攝影機，可使用多張網路卡，或在某些情況下使用網路交換器將多台攝影機連接至單一網路卡。\n使用網路交換器僅在某些情況下可行（即所有攝影機的總頻寬不超過一個千兆連接埠的頻寬），如不確定您的情況是否適用，請聯絡我們。\n將 2 台攝影機連接至單一網路卡/連接埠 在某些情況下，可以將 2 台攝影機連接至單一網路卡/連接埠。\n目前支援以下攝影機型號：\nAVT Manta G-033/G-034/G-046\nAVT Prosilica GC650\n以下範例示範如何使用 2 台千兆網路交換器，將 4 台攝影機連接至 2 張千兆網路卡/連接埠：\n為乙太網路介面卡設定靜態 IP 一旦攝影機已指定靜態 IP 位址，您需要為計劃使用的網路介面卡設定靜態 IP。此設定必須與每台已連接的攝影機相符。\n這表示若您拔除攝影機並將其連接至不同的乙太網路介面卡，除非重新設定，否則將無法正常運作。\n警告： 以下提及的「乙太網路介面卡」編號並非網路介面卡的實際名稱，僅作說明用途。請依照每台攝影機逐一設定各網路介面卡，例如若您有兩台攝影機已連接，請依序進行設定，並參考乙太網路介面卡 1 和 2 的表格，請勿更改未連接已識別攝影機的網路介面卡設定。\n在已連接攝影機上方的乙太網路介面卡上按滑鼠右鍵。\n點選「NIC Settings」。\n啟用巨型幀（Jumbo Frame）。\n將接收緩衝區（Receive Buffers）設為最大值。\n將傳輸緩衝區（Transmit Buffers）設為最大值。\n點選「Internet Protocol Properties」中的「Open」。\n依照下表設定網路介面卡。\n各乙太網路介面卡的建議靜態 IP 設定 以下為靜態 IP 位址設定範例，請注意乙太網路介面卡與各攝影機的 IP。\n乙太網路介面卡編號 乙太網路介面卡 IP 子網路遮罩 閘道 已連接攝影機 攝影機 IP 1 10.0.1.1 255.255.255.0 10.0.1.1 1 10.0.1.10 2 10.0.2.1 255.255.255.0 10.0.2.1 2 10.0.2.10 3 10.0.3.1 255.255.255.0 10.0.3.1 3 10.0.3.10 4 10.0.4.1 255.255.255.0 10.0.4.1 4 10.0.4.10 為攝影機設定靜態 IP 請確認您的 Lynx 攝影機已連接。若您是在啟動應用程式後才連接，請將滑鼠移至「GigE」選單並點選重新整理按鈕。\n此程序必須對每一台已設定靜態 IP 的 Lynx 攝影機重複執行。\n請注意，您需要先為攝影機 1 設定靜態 IP，然後依序設定網路卡 1，完成後再依序進行第 2 台，以此類推。此處提及的編號並非網路介面卡的實際名稱（例如「Ethernet 2」），僅作說明用途。\n在清單中的攝影機上按滑鼠右鍵，然後點選「Modify IP」。\n將選項從 DHCP 或 LLA 變更為靜態 IP（Static IP）。\n依照以下說明設定 IP 位址及子網路遮罩。\n每台攝影機的 IP 必須各不相同。\n攝影機的建議靜態 IP 設定 攝影機編號 IP 子網路遮罩 閘道 1 10.0.1.10 255.255.255.0 10.0.1.1 2 10.0.2.10 255.255.255.0 10.0.2.1 3 10.0.3.10 255.255.255.0 10.0.3.1 4 10.0.4.10 255.255.255.0 10.0.4.1 資源：\n最後更新：2024-09-05 | 在官方支援網站上檢視",
    "description": "要擊球準備並安裝 GigE 攝影機，您的電腦需要有一個或多個空閒的網路連接埠。",
    "tags": [
      "Gige-Camera",
      "Lynx-Camera"
    ],
    "title": "如何安裝 AVT Manta/Prosilica GigE 攝影機",
    "uri": "/sc-support/zh-hant/cameras-video/avt-manta-install/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "Swing Catalyst 動作擷取 (MoCap) 元件安裝指南 重要通知 此功能需要特定的授權類型。請查閱我們的常見問題以了解授權詳情。\n如果您已收到用於測試的獨立版本，則無需安裝任何額外元件。\n快速連結 動作擷取常見問題\n動作擷取設定指南\n系統需求\n鏡頭畸變校正指南\n概覽 本指南將引導您安裝必要元件，以優化 SwingCatalyst 動作擷取的性能。這些元件專為 CUDA 及 TensorRT 執行提供程式所需。請注意，DirectML 使用者可略過此安裝，無需安裝任何額外元件。\n系統需求 授權需求 具備動作擷取功能的有效 Swing Catalyst 授權\n儲存需求 C: 磁碟機至少需有 5.9 GB 可用空間\n硬體需求 支援 CUDA 或 TensorRT 的 NVIDIA 顯示卡（GeForce 或 RTX 系列 GPU），例如：\nNVIDIA RTX 3070、3080、3090 系列（最低 6GB 顯示記憶體）\nNVIDIA RTX 4060、4070、4080、4090\nNVIDIA RTX 5070、5080、5090\n其他 NVIDIA 顯示卡亦可能相容。\n安裝流程（SwingCatalyst 25.2 或更新版本） 步驟一：啟動 SwingCatalyst 前往「設定」-\u003e「影像與捕捉」\n在動作擷取區段中，選擇 TensorRT。\n點擊「下載」按鈕。\n步驟二：編譯引擎 下載完成後，系統將載入 TensorRT，此過程可能需要數分鐘，請等待完成（MoCap 按鈕上的旋轉指示圖示將會消失）。\n完成後，進入捕捉模式並進行錄製，這將使 TensorRT 引擎針對您的硬體進行編譯與優化。此過程視硬體而定，可能需要約 10 至 15 分鐘。\n安裝流程（僅限 SwingCatalyst 25.1） 步驟一：下載所需元件 步驟二：執行已下載的安裝程式 執行安裝程式檔案\n前往您的下載目錄並執行安裝程式檔案\n點擊「Install」 安裝元件\n依照螢幕上的指示操作\n元件安裝程式將把必要元件安裝至 C:\\ProgramData\\Swing Catalyst\\components 目錄 安裝參考 元件現已安裝完成。\n若要移除元件，您可從 Windows 設定中的「已安裝應用程式」將其解除安裝。\n最後更新：2025-05-19 | 在官方支援網站上檢視",
    "description": "此功能需要特定的授權類型。請查閱我們的常見問題以了解授權詳情。",
    "tags": [
      "Force-Data",
      "Licensing",
      "Motion-Capture"
    ],
    "title": "如何安裝 Swing Catalyst 動作擷取元件",
    "uri": "/sc-support/zh-hant/software-features/motion-capture-install/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "如何安裝與設定平衡板 3 簡介 本支援文章將說明如何為 SwingCatalyst 設定新的平衡板 3。\n系統需求 電腦須有可用的 USB 連接埠。\nSwingCatalyst 7.1.8 或更新版本。\n安裝 如需安裝詳情，請參閱文章底部附加的 PDF 文件。\n本文涵蓋平衡板 3 與平衡板 3s。\n僅需對您的平衡板執行現場校準？請點擊此處\n警告 AMD 300 系列晶片組（AMD Ryzen 1700 / 2700 系列）與 USB 1.1 裝置之間已發現部分相容性問題。具體而言，使用平衡板時，每秒取樣數僅能達到 75 次，而非約 145 次。建議使用 USB 2.0 集線器，以便平衡板能以完整取樣率進行串流傳輸。\n目前尚未發現 AMD 300 系列晶片組與 USB 3.0 裝置搭配使用時有任何已知問題。\n木桿安裝 從 Windows 開始功能表 - SwingCatalyst - 木桿資料夾中安裝木桿程式。 64 位元 Windows 請執行「Balance Plate #2 Driver Installer (x64)」 32 位元 Windows 請執行「Balance Plate #2 Driver Installer (x86)」 如何確認我使用的是 32 位元或 64 位元 Windows？ 您也可以在 https://www.swingcatalyst.com/drivers 找到相關木桿程式。\n執行校準工具 下載校準工具\n若系統提示安裝木桿程式，請點擊「是」。\n將平衡板連接至電腦。\n開啟新安裝的 SE Utility。\n選擇一個攝影機或網路攝影機，並將鏡頭對準平衡板。\n最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "本支援文章將說明如何為 SwingCatalyst 設定新的平衡板 3。",
    "tags": [
      "Usb-Camera",
      "Balance-Plate"
    ],
    "title": "如何安裝平衡板 3",
    "uri": "/sc-support/zh-hant/hardware/install-balance-plate-3/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "如何安裝與設定新的平衡板 3S 簡介 本支援文章將說明如何設定新的平衡板 3S。\n系統需求 電腦須有可用的 USB 連接埠。\nSwing Catalyst 9.3.0\n本文章同樣適用於平衡板 3 XL 及平衡板 3。\n若您希望校準您的平衡板，請點擊此處。\n安裝 詳細安裝說明請參閱本文章底部的附件 PDF。\n驅動程式安裝 從 Windows 開始功能表 - Swing Catalyst - Drivers 資料夾安裝驅動程式。 若使用 64 位元 Windows，請執行「Balance Plate #2 Driver Installer (x64)」 若使用 32 位元 Windows，請執行「Balance Plate #2 Driver Installer (x86)」 如何確認我使用的是 32 位元還是 64 位元 Windows？ 您也可以在 https://www.swingcatalyst.com/drivers 找到驅動程式。\n執行校準工具 為了使用您的平衡板，需要向製造商進行註冊以取得保固資格。\n完成註冊後，您將收到校準檔案，並需將其安裝至 Swing Catalyst 中。\n步驟\n下載校準工具\n若系統詢問是否安裝驅動程式，請點擊「是」。\n將平衡板連接至電腦。\n開啟新安裝的 SE Utility。\n依照以下說明操作。\n請確保您的電腦已連接顯示器或電視，以便站在平衡板上時能看到畫面。\n點擊「開始」：\n點擊開始後，系統將自動嘗試掃描裝置；若未找到您的平衡板，請點擊下拉式選單並選擇您的平衡板。\n點擊「掃描」 選擇與您平衡板序號相符的裝置，然後點擊「下一步」。\n註冊您的平衡板 已填寫完成的註冊資訊範例 最後更新：2024-08-29 | 在官方支援網站上檢視",
    "description": "本支援文章將說明如何設定新的平衡板 3S。",
    "tags": [
      "Usb-Camera",
      "Balance-Plate"
    ],
    "title": "如何安裝平衡板 3S",
    "uri": "/sc-support/zh-hant/hardware/install-balance-plate-3s/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 入門指南",
    "content": "如果您剛購買了授權，或想要切換至其他授權，以下是安裝授權金鑰的步驟：\n找到您收到的授權金鑰，通常位於購買後收到的授權電子郵件中 選取、按右鍵並複製授權金鑰文字\n啟動 SwingCatalyst，然後點擊左下角的齒輪圖示\n點擊「一般」\n在「授權資訊」下方，點擊 顯示授權設定\n點擊 變更授權\n點擊 從剪貼簿貼上，或手動將授權金鑰貼入文字欄位中\n點擊 安裝\n關閉對話框並確認授權詳細資訊是否正確，若不正確，請再重複一次上述步驟。\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "了解如何在 Swing Catalyst 中安裝或更換授權金鑰",
    "tags": [
      "Licensing"
    ],
    "title": "如何安裝或更換授權金鑰",
    "uri": "/sc-support/zh-hant/getting-started/license-key/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 入門指南",
    "content": "如何安裝或解除安裝 Swing Catalyst 本支援文章說明如何安裝或解除安裝 Swing Catalyst*。\n*適用於：Motion Catalyst。\n在將 Swing Catalyst 安裝至新電腦之前，請確認該電腦符合我們的建議電腦規格／需求。\nNote: Swing Catalyst 不支援 Apple 硬體（Apple M1、M2 或採用 ARM 架構的更新型號）。\n本文章亦假設您擁有有效授權（適用於您希望安裝的版本），並已備妥該授權。\n下載最新版本 您可以從我們的下載頁面取得最新版本的 Swing Catalyst。\n點擊「Download」按鈕。\n安裝程式下載完成後，雙擊該 exe 檔案（通常位於您的「下載」資料夾中）。\n勾選授權合約核取方塊，然後點擊「Install」。\n在提升存取權限的提示視窗中點擊「Yes」。\n安裝完成後點擊「Close」。\n如何解除安裝 Swing Catalyst 前往 Windows 設定。在工作列上的 Windows 圖示上按右鍵 ，然後選擇「設定」。\n在「設定」中，點擊「應用程式」，然後向下捲動直到看見 Swing Catalyst，或在搜尋列中輸入 Swing。\n點擊 Swing Catalyst，然後點擊「解除安裝」。\n點擊「是」並依照螢幕上的指示操作。\n1. 2. 最後更新：2023-12-13 | 在官方支援網站上檢視",
    "description": "本支援文章說明如何安裝或解除安裝 Swing Catalyst*。",
    "tags": [
      "Fox-Camera",
      "Licensing"
    ],
    "title": "如何安裝與解除安裝 Swing Catalyst",
    "uri": "/sc-support/zh-hant/getting-started/install-uninstall/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "如何回復至較舊的軟體版本 本支援文章說明如何安裝舊版 Swing Catalyst。\n如果您是 Beta 使用者，希望安裝先前的穩定版本：\n請在安裝舊版之後，取消勾選「允許 Beta 版本」。 當回復至較舊的軟體版本時，Swing Catalyst 將自動嘗試尋找並載入相符的資料庫版本。每次主要版本發佈時，例如 9.8 -\u003e 10.0、10.0 -\u003e 10.1，資料庫版本都會隨之變更。這表示使用較新版本所製作的任何錄製內容，在舊版本中將無法使用。如果您有重要的錄製內容希望儲存或備份，我們強烈建議在回復軟體版本之前先匯出這些內容。\n因此，在決定回復軟體版本時，請務必將此事項納入考量。\n如何解除安裝 Swing Catalyst 前往 Windows 設定。在工作列上的 Windows 圖示上按右鍵 ，然後選擇「設定」。\n在設定中，點選「應用程式」，然後向下捲動直到看見 Swing Catalyst，或在搜尋列中輸入 Swing。\n點選 Swing Catalyst，然後點選「解除安裝」。\n點選「是」，並依照螢幕上的指示操作。\n1. 2. 安裝舊版本 舊版 Swing Catalyst 可在我們的軟體封存庫中找到。\nhttps://www.swingcatalyst.com/downloads/archives（從下載區向下捲動）：\n點選您希望安裝的版本以下載安裝程式檔案。\n您下載的檔案通常會存放在「下載」資料夾中。\n雙擊您希望安裝的版本，並依照螢幕上的指示操作。\n最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "本支援文章說明如何安裝舊版 Swing Catalyst。",
    "tags": [
      "Database"
    ],
    "title": "如何安裝舊版 Swing Catalyst",
    "uri": "/sc-support/zh-hant/account-setup/install-previous-version/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "簡介 系統需求 電腦須具備可用的 USB 連接埠。\nSwing Catalyst 21.4 及有效授權，且該授權須支援雙壓力板\n開始使用 使用隨附歡迎卡背面的 QR 碼，或點擊此處以註冊您的壓力板。完成註冊後，您將收到一封電子郵件，其中附有您的校準檔案，此檔案是在 Swing Catalyst 中開始使用的必要條件。\n您也可以透過下載此處的校準工具，對雙壓力板進行手動校準，並依照引導步驟產生校準檔案。\n將 .mxd 檔案儲存至您方便存取的資料夾，然後啟動 Swing Catalyst。\n啟動 Swing Catalyst 開啟 Swing Catalyst 軟體，並在「一般設定」與「授權設定」中完成授權登錄。\n在設定中，點選左側欄的「硬體」。雙壓力板應會被自動偵測到。\n按下「設定」–\u003e 「站姿感測器」–\u003e 「瀏覽並安裝」–\u003e 找到並選取您儲存的 .mxd 檔案，然後按一下「開啟」\n如有需要，請使用「翻轉與旋轉裝置」索引標籤，確保壓力熱圖正確反映高爾夫球手的雙腳及壓力中心。\n放置壓力板 為確保壓力數據能正確呈現，請務必確認兩片壓力板相對位置的擺放方式正確無誤。\n請確認：\n連接線置於高爾夫球手後方\n壓力板的擺放方向，須使正面視角右側攝影機能正確讀取「Swing Catalyst」字樣\n使用自訂站距寬度 不同球桿需要不同的站距寬度。透過我們改良的壓力與站姿設定，您可以確保每次揮桿都以正確的站距寬度進行錄製。\n以保護墊作為基礎，您可以選擇以下方式擺放壓力板：\n緊靠在一起——在設定中選擇「窄距」\n置於墊子的外側邊緣——在設定中選擇「寬距」\n自訂間距——測量兩片壓力板邊緣之間的距離\n最後更新：2024-09-03 | 在官方支援網站上檢視",
    "description": "使用隨附歡迎卡背面的 QR 碼，或點擊此處註冊您的壓力板。完成註冊後，您將收到一封電子郵件...",
    "tags": [
      "Usb-Camera",
      "Pressure-Data",
      "Licensing"
    ],
    "title": "如何安裝雙壓力板",
    "uri": "/sc-support/zh-hant/hardware/install-dual-pressure-plate/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "在某些情況下，支援人員會需要您提供特定事件的日誌資訊。\n請注意，只有在支援人員明確要求您以此方式傳送日誌檔案時，才需要執行以下步驟。\n如果您知道發生問題的大約時間，請傳送修改日期最接近問題發生時間的檔案。\n日誌檔案可在以下位置找到：C:\\ProgramData\\Swing Catalyst\\logs\n前往 ProgramData 目錄，在 Windows 檔案總管中輸入 %programdata%，然後按下 Enter。\n開啟 Swing Catalyst 目錄，再開啟 log 目錄。\n複製 log.txt 檔案以及最近一次修改的日誌檔案。\n將其附加至您傳送給支援團隊的支援工單或電子郵件中。\n最後更新：2024-10-22 | 在官方支援網站上檢視",
    "description": "了解如何在 Swing Catalyst 中收集支援所需的日誌檔案",
    "tags": [
      "Troubleshooting"
    ],
    "title": "如何收集支援所需的日誌檔案",
    "uri": "/sc-support/zh-hant/account-setup/collect-logs/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "簡介 在某些情況下，Swing Catalyst 支援團隊需要您的平衡板序號，以便提供正確的校準檔案，或在開始 RMA 流程時需要序號。\n適用範圍 Balance Plate 2\nBalance Plate 3\nBalance Plate 3s\nMotion Plate 5 或 Motion Plate 6 的平衡板元件（Balance Plate 3）。\n相關內容\n平衡板保固與 ESA\n收集平衡板診斷資料\n如何在軟體中找到序號\n您可以透過 Swing Catalyst 軟體找到平衡板的序號，請前往「設定」，選擇「硬體」，然後點選「設定」。\nnote Motion Plate 客戶注意事項：如果您使用的是 Motion Plate 5，請將感測板版本保持設定為 Motion Plate 5，然後依照以下說明繼續操作。\n前往「Sensor Info」標籤頁。序號應列示於「Stance sensor S/N」下方。若未顯示，請拔除平衡板，將 USB 線插入不同的 USB 連接埠，並重新啟動軟體。\n在實體板上找到序號：\n平衡板的序號位於板子底部，如圖所示。\n對於較新型號的平衡板（Balance Plate 3s），序號標示位於板子側面。\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "在某些情況下，Swing Catalyst 支援團隊需要您的平衡板序號，以便提供正確的校準檔案，或在開始 RMA 流程時需要序號，...",
    "tags": [
      "Usb-Camera",
      "Balance-Plate",
      "Motion-Plate"
    ],
    "title": "如何找到您的 Swing Catalyst 平衡板序號",
    "uri": "/sc-support/zh-hant/hardware/find-serial-number/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "簡介 本文是 Swing Catalyst Online 的介紹，旨在展示 Swing Catalyst Online 桌面端所提供的各項功能。\n系統需求 有效的 Swing Catalyst 授權（我的版本是什麼？）\n一個 Swing Catalyst Online 帳號\n網際網路連線\n目錄 本指南分為不同類別與步驟。\n什麼是 Online\n從 Swing Catalyst 桌面軟體檢視 Online\n錄製、課程與巡迴賽揮桿（桌面端）\n網頁介面（Swing Catalyst Online）\n錄製、課程與巡迴賽揮桿（Online）\n上傳影片（Online）\n管理儲存空間\n管理授權\n個人資料\n什麼是 Online Swing Catalyst Online 是連接 Swing Catalyst 桌面軟體與 iOS 及 Android 應用程式的橋樑，也可用於與其他使用者分享錄製內容和課程。\n所有授權均與一個 Online 帳號相連結。\n從 Swing Catalyst 桌面軟體檢視 以下是從桌面端檢視 Swing Catalyst Online 的畫面。\n登入按鈕位於軟體右上角。\n使用您的 Online 帳號憑證登入。\n登入後，「登入」按鈕會改變樣式，以反映您已登入的狀態。\n錄製 Online 檔案總管與一般檔案總管是分開的。\n若要將 Online 上的錄製內容下載至桌面軟體，請點選一個錄製項目，然後點擊「下載」。下載完成後，該錄製內容將出現在一般檔案總管中。\n課程 已分享至 Online 或分享給其他 Online 使用者的錄製課程可在此找到。\n巡迴賽揮桿 所有已購買的巡迴賽揮桿內容將顯示在「巡迴賽揮桿」標籤中。\nSwing Catalyst Online 以下是從網頁瀏覽器檢視 Swing Catalyst Online 的畫面。\n登入畫面\n首頁畫面與收件匣\n檔案總管 所有已與您分享或從桌面軟體上傳的錄製內容均可在此檢視。\n請注意，由他人分享給您的錄製內容上會顯示「分享」圖示。\n橘色的「加號」按鈕為「上傳影片」按鈕，您可透過此按鈕將錄製內容上傳至您的帳號。\n檢視錄製詳細資訊 影片播放器支援可調整的播放速度。\n課程 課程標籤包含您已上傳至 Online 的所有課程，以及他人分享給您的課程。\n您可以分享由您自己建立的錄製內容和課程，即非他人分享給您的內容。\n上傳影片 在檔案總管中點擊「+」圖示，即可輕鬆將錄製內容上傳至 Swing Catalyst。\n刪除影片 若要刪除影片，請點擊檔案總管標籤，然後點選您想刪除的影片，再點擊「刪除」按鈕。注意：刪除已與他人分享的錄製內容，也會同時撤銷接收者對該影片的存取權限。\n儲存空間 將錄製內容或課程上傳至 Online 時，將會佔用您的儲存空間。錄製內容與課程合計最多可免費儲存 50 項。您可在此頁面管理您的儲存配額。\n若您在上傳錄製內容時遇到問題，可能是您的儲存配額已滿。在這種情況下，您需要購買儲存空間升級訂閱方案，或刪除現有錄製內容以騰出空間。\n若您的儲存配額已滿，檔案總管頁面將會顯示警告訊息。\n編輯個人資料 檢視您的授權 所有 Swing Catalyst 授權均與一個 Online 帳號綁定。若您遺失了授權金鑰，可登入 Online 並直接透過「檢視授權」按鈕查看您的授權。\n請注意，若需取消授權，必須透過我們的商店進行操作。\n請參閱我們的文章：如何管理您的訂閱方案。\n最後更新：2026-01-14 | 在官方支援網站上檢視",
    "description": "本文是 Swing Catalyst Online 的介紹，旨在展示 Swing Catalyst Online 桌面端所提供的各項功能。",
    "tags": [
      "Online",
      "App",
      "Troubleshooting",
      "Fox-Camera"
    ],
    "title": "如何使用 Swing Catalyst Online",
    "uri": "/sc-support/zh-hant/software-features/swing-catalyst-online/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "使用新的硬體影片編碼器加速影片處理 在 SwingCatalyst 9.3 及更新版本中，新增了利用電腦顯示卡來加速影片處理的支援功能。\n此功能利用顯示卡上專用於影片編碼的晶片，讓 CPU 無需執行這項高運算量的任務。根據顯示卡和 CPU 的不同，這可以顯著縮短影片編碼時間。不過，變更這些設定也有可能使編碼時間變長。\n標準編碼器為 CPU MPEG-4。\n請使用內建的基準測試功能，以找出最適合您的編碼器。\n支援的顯示卡（h264 編碼器）：\nNVIDIA NVENC：建議使用 GeForce 系列顯示卡，例如 1070、1080、2060、2070、2080 系列。\nIntel QuickSync：大多數較新的 Intel CPU 均內建專用的硬體影片編碼功能，建議使用的 CPU 請參閱我們的建議電腦規格*。\n部分 Intel CPU 不具備內建顯示晶片，因此不支援 Intel QuickSync。 支援 QuickSync 的 Intel CPU 清單：https://ark.intel.com/content/www/us/en/ark/search/featurefilter.html?productType=873\u00260_QuickSyncVideo=True\n不支援 AMD 顯示卡。\n執行編碼器基準測試 NVIDIA NVENC\nIntel QuickSync (QSV)\nMPEG4 (CPU)\n最後更新日期：2025-08-12 | 在官方支援網站上檢視",
    "description": "在 SwingCatalyst 9.3 及更新版本中，新增了利用電腦顯示卡來加速影片處理的支援功能。",
    "tags": [
      "Force-Data"
    ],
    "title": "如何使用 SwingCatalyst 硬體編碼功能",
    "uri": "/sc-support/zh-hant/cameras-video/hardware-encoding/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "簡介 本文旨在示範 Swing Catalyst 10.0 中全新的力向量功能。力向量適用於擁有 Motion Plates（雙板或單板）或 Force Plates（雙板或單板）的用戶。\n力向量在串流視訊或捕捉期間會即時顯示於視訊影像上，在播放時亦可看見。\n透過將地面反作用力以向量（箭頭）的形式疊加呈現於視訊影像上，我們希望讓動作更易於理解。\n支援的硬體： Dual Motion Plate\nMotion Plate 6 及 5。\n雙力量板。\n單力量板\n注意：在任何 SwingCatalyst 軟體中均可檢視含有力向量的錄製內容，無需額外硬體。\n力向量 - 簡介 力向量將地面反作用力顯示於視訊影像上，可在捕捉模式下即時呈現，亦可於播放時顯示。在每個視訊影像（攝影機角度）的右下角有一個圖示，顯示向量在 3D 空間中的座標。\n座標的呈現方式會因攝影機角度而有所不同。\n座標圖示表明 Z 軸為垂直方向，Y 軸與 X 軸為水平方向，使用與力量圖表相同的顏色。\n力向量的力度與現實世界相對應，即（若校準正確）高度為 1 公尺的向量等於 1000 Newton。\n力向量 - 校準 使用力向量前必須進行校準，目的是識別板在視訊影像中的位置。每個攝影機角度只需校準一次。若攝影機或板的實體位置有所變更，則需重新校準。\n請注意，對於舊有錄製內容，每次錄製均需個別校準，此功能不具追溯效果，因為我們無法得知板在視訊影像中的位置。在捕捉模式下進行校準非常重要，如此每次新錄製時系統將自動儲存校準資料。\n在 10.2 及更新版本中，力向量校準可在「Data Visuals」下找到。\n點擊「Set markers!」以開始校準流程。\n點擊板的每個角點以設置標記點。若為雙板，請點擊兩塊板外側的兩個角點。\n對其他攝影機角度重複相同流程。\n若操作有誤，請忽略該錯誤並完成當前角度的流程，然後再點擊角點重新開始。\n完成後點擊「Save」。\n力向量 - 選項 從此下拉選單中，您可存取所有與力向量相關的選項。\n點擊顏色「圖示」以變更顏色。\n選擇不同顏色的示意圖：\n疑難排解 即使校準正確，且我使用的是雙力量板／Motion Plate 設置，力向量仍從同一位置出發。\n若攝影機角度不正確，可能就是此原因所致。\n想像一下，您正從 X 箭頭的方向（見影像右下角的紫色箭頭）觀看下方影像。\n所有力向量均以相同深度呈現。若從側面檢視，看起來將像是從同一位置出發。\n請注意，已建立的錄製內容無法變更攝影機角度。在錄製前確認此設定正確非常重要。\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "本文旨在示範 Swing Catalyst 10.0 中全新的力向量功能。力向量適用於擁有 Motion Plates（雙板或單板）或 Force Plates（雙板或單板）的用戶。",
    "tags": [
      "Troubleshooting",
      "Motion-Plate",
      "Force-Data"
    ],
    "title": "如何使用力向量",
    "uri": "/sc-support/zh-hant/software-features/force-vectors/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "本文說明如何使用麥克風，在擊打高爾夫球時自動觸發錄製。\n適用範圍 Swing Catalyst 4.5 及更新版本\n相關文章 如何將 Launch Monitor 設定為捕捉觸發器 解決方案 啟動 SwingCatalyst，並從設定選單開啟硬體設定。\n若您使用外接麥克風，請先確認已將其連接。\n在「觸發器裝置」區段中，選擇您想使用的麥克風。\n勾選麥克風的核取方塊以啟用。\nSwingCatalyst 現在將在每次偵測到揮桿時，自動觸發影片錄製。\n我們支援大多數麥克風，依使用情境建議將麥克風盡可能靠近球，以便將 mic gain 調低，避免意外觸發。\n已啟用麥克風作為觸發器裝置的範例：\n若要設定麥克風，請按一下「設定」按鈕。\n靈敏度調整 麥克風靈敏度可透過拖曳「等級」索引標籤下的滑桿來調整，或直接在 SwingCatalyst 中調整（前提是您已進入捕捉模式）：\n滑桿越靠左，觸發器的靈敏度越高。\n請調整麥克風靈敏度，並在捕捉模式下進行測試。理想的閾值應能在您大力拍手時觸發揮桿偵測，但在有人於背景交談時不會誤觸發。您可能需要多次嘗試才能找到最佳設定。\n最後更新：2024-02-15 | 在官方支援網站上檢視",
    "description": "我們支援大多數麥克風，依使用情境建議將麥克風盡可能靠近球，以便將 mic gain 調低，避免意外觸發...",
    "tags": [],
    "title": "如何使用麥克風作為捕捉觸發器",
    "uri": "/sc-support/zh-hant/software-features/microphone-trigger/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "本文說明如何使用 Swing Catalyst 遠端支援應用程式，讓 Swing Catalyst 技術支援人員暫時登入您的電腦並控制您的滑鼠與鍵盤。本文假設您是依照 Swing Catalyst 支援人員的指示前來此頁面。\n遠端支援在以下多種情況中非常有幫助：\n解決透過電子郵件或電話難以描述的問題\n加快處理流程——來回寄送電子郵件需要耗費大量時間\n在緊急情況下獲得即時協助\n備註 Swing Catalyst 遠端支援僅提供給擁有有效「支援與更新方案」的客戶。基本支援僅涵蓋電子郵件通訊。\n未經您的許可，我們將無法存取您的電腦，且您可以隨時監看所有操作。此應用程式僅用於協助客戶，並將以負責任的方式使用。\n步驟 1 - 開啟 SwingCatalyst 從主選單進入「說明」，然後點擊「啟動遠端支援」。\n畫面將彈出一個包含 ID 號碼的視窗。請務必在支援人員要求時將該號碼傳送給您的支援代表。\n啟動遠端支援的替代方法 點擊 Windows 開始選單；若您使用的是 Windows 8，請按下鍵盤上的 Windows 標誌鍵。 輸入「remote support」。您應該可以找到 Swing Catalyst Remote Support 應用程式。點擊以執行。\n![remote_support_win8.png](../../assets/images/zendesk/token_hab7g2hzn1jqpci_remote_support_win8.png) 遠端支援應用程式將顯示一個類似下圖的對話視窗。請記下下方的 ID 號碼，共 9 位數。請保持應用程式運行，以便支援人員連線至您的電腦。 步驟 3 - 通知 Swing Catalyst 支援人員 假設您是依照支援人員的指示閱讀本文，請將您在遠端支援應用程式中記下的 ID 告知支援代理人。通常您會透過支援工單提供此 ID。您無需提供任何密碼，只需提供 ID 即可。\n如果您目前沒有進行中的支援工單，您可以聯絡我們的支援團隊建立一個新工單。請說明您需要協助的問題，並附上 ID 以加快處理速度。\n支援代理人將連線至您的電腦，並透過遠端支援應用程式與您溝通。工作階段結束後，您可以自由關閉 Swing Catalyst 遠端支援應用程式。當應用程式未執行時，我們將無法進行連線。\n最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "Swing Catalyst 遠端支援僅提供給擁有有效「支援與更新方案」的客戶。基本支援僅涵蓋電子郵件通訊。",
    "tags": [
      "Troubleshooting"
    ],
    "title": "如何使用遠端支援",
    "uri": "/sc-support/zh-hant/software-features/remote-support/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "本文旨在介紹壓力分佈視頻疊加功能。此功能是力向量功能的伸展，於 Swing Catalyst 及 Motion Catalyst 第 10.1 版本中正式推出。\n適用軟體版本：Motion Catalyst 及 SwingCatalyst。\n版本：10.2\n所需硬體：平衡板或 Motion Plate（或 Dual Motion Plate）。\n我目前使用的是哪個版本的軟體？\n有關力向量的更多詳細資訊，請參閱我們的力向量文章。\n啟用壓力分佈條 與力向量相同，壓力分佈條需要進行校準。\n請注意，在捕捉模式下進行校準與在播放模式下進行校準有所不同。若在捕捉模式下執行校準，校準結果將套用至所有後續錄製。若在播放模式下執行，則僅套用於該特定錄製。因此，我們建議在捕捉模式下進行校準，以便所有新錄製自動套用校準設定。\n在選項中，可以變更壓力分佈條的透明度和顏色。\n此功能與現有的力向量功能非常相似。\n執行新校準 若希望校準結果儲存至新錄製，請確保您處於捕捉模式。\n點擊「Data Visuals」及「Set markers!」。\n使用滑鼠點擊您的平衡板或 Motion Plate / Dual Motion Plate 的每個角點。\n儲存校準結果。\n再次點擊「Data Visuals」，將「Pressure Distribution」切換為「ON」。\n請注意，以下影片僅供示範用途。您應在影片畫面中選取板材的角點。\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "與力向量相同，壓力分佈條需要進行校準。",
    "tags": [
      "Balance-Plate",
      "Motion-Plate",
      "Pressure-Data",
      "Force-Data"
    ],
    "title": "如何使用壓力分佈視頻疊加功能",
    "uri": "/sc-support/zh-hant/software-features/pressure-distribution-overlay/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "簡介 檔案總管提供一個介面，用於瀏覽、選取及管理依工作階段整理的影片錄製內容。本文件說明如何在 25.3 及更新版本中有效導覽並使用檔案總管的所有功能。\n概覽 工具列： 工具列包含各種按鈕，可快速存取檔案總管的所有核心功能。\n使用者清單： 已登錄使用者的清單，並提供搜尋列和排序按鈕等實用功能。\n可下載內容清單： 已下載錄製內容的清單，例如巡迴賽揮桿影片。\n工作階段與錄製： 工作階段清單，可展開以顯示該工作階段的所有錄製內容。\n預覽錄製： 預覽視窗，顯示動態縮圖及錄製的重要資訊。\n匯出清單： 將錄製內容拖放至此處，即可加入匯出清單。錄製內容可匯出為 Take 檔案（便於稍後匯入 SwingCatalyst），或匯出為原始資料 TSV 檔案以供自訂分析使用。\n鍵盤導覽\n檔案總管支援透過錄製縮圖進行完整的鍵盤導覽：\n方向鍵導覽 ↑ - 向上移動一列\n↓ - 向下移動一列\n← - 向左移動一欄\n→ - 向右移動一欄\n頁面導覽 Home - 跳至目前工作階段的第一個項目\nEnd - 跳至目前工作階段的最後一個項目\nPage Up - 向上移動一個可見頁面\nPage Down - 向下移動一個可見頁面\n跨工作階段導覽 當位於工作階段的頂端或底端時，方向鍵會自動導覽至相鄰的工作階段\n導覽進入工作階段時，工作階段將自動展開\n選取行為 檔案總管支援標準的多重選取功能：\n單一選取 按一下 - 選取單一錄製內容\n按兩下 - 開啟所選錄製內容以供檢視\n以滑鼠進行多重選取 Ctrl** + 按一下** - 切換個別項目的選取狀態\nShift** + 按一下** - 從最後選取的項目到所按項目之間選取範圍\n以鍵盤進行多重選取 Shift** + 方向鍵** - 沿導覽方向延伸選取範圍\nCtrl** + 方向鍵** - 導覽而不變更選取狀態\nCtrl** + **A - 選取檔案總管中所有可見的錄製內容\nCtrl** + Shift + **A - 選取目前工作階段中所有可見的錄製內容\nEscape - 清除可見的選取項目\n選取資訊 選取計數器：顯示已選取的總數量及可見的已選取數量\n隱藏的選取項目：指示在已收合或已篩選的工作階段中存在已選取的項目\n視覺回饋：已選取的項目會以邊框醒目顯示\n選單與內容操作 錄製內容操作選單 在任何錄製內容上按一下右鍵即可存取：\n開啟 - 開啟錄製內容\n加入堆疊 - 加入分析堆疊，以便在分析模式中快速存取\n加入匯出 - 加入匯出佇列\n刪除 - 移除錄製內容\n上傳至線上 - 透過 SwingCatalyst Online 分享\n學生/群組操作選單 在學生姓名上按一下右鍵可：\n將使用者加入匯出清單 - 將該使用者的所有錄製內容加入匯出\n刪除使用者 - 移除該使用者及其所有錄製內容\n全域指令 可透過鍵盤快速鍵使用：\nEnter - 開啟所選錄製內容。\nDelete - 刪除所有已選取的錄製內容\nCtrl** + **A - 選取檔案總管中所有可見的錄製內容\nCtrl** + Shift + **A - 選取目前工作階段中的所有錄製內容\nEscape - 清除目前的選取項目\n拖放功能 拖曳 Take 拖曳 Take 至放置區域\n視覺回饋會顯示帶有錄製縮圖的拖曳指示器\n放置指示器會醒目顯示有效的放置目標\n放置區域 檢視區 A/B 放置區 - 放置至此處，可在檢視區 A 或 B 中開啟錄製內容\n匯出清單放置區 - 放置至此處，可將錄製內容加入匯出佇列\n高效使用技巧 批次操作：使用多重選取同時對多個錄製內容執行操作\n鍵盤效率：結合 Ctrl、Shift 和方向鍵，實現快速選取工作流程\n情境感知：右鍵選單提供符合當前情境的操作選項\n視覺回饋：留意選取計數器和醒目顯示指示器\n檔案總管專為高效工作流程管理而設計，讓您能夠快速導覽大量錄製內容，並以最少的操作執行批次作業。\n最後更新：2026-01-06 | 在官方支援網站上檢視",
    "description": "檔案總管提供一個介面，用於瀏覽、選取及管理依工作階段整理的影片錄製內容。本文件說明如何有效...",
    "tags": [],
    "title": "如何使用檔案總管",
    "uri": "/sc-support/zh-hant/software-features/explorer/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "步驟 1：前往 https://shop.swingcatalyst.com/account/login\n步驟 2：使用購買訂閱時所用的電子郵件地址和密碼登入。\n步驟 3：點擊「管理訂閱」\n步驟 4：點擊「取消訂閱」\n步驟 5：再次點擊「取消訂閱」並提供取消原因\n最後更新：2025-04-30 | 在官方支援網站上檢視",
    "description": "如何取消 Swing Catalyst 軟體訂閱",
    "tags": [
      "Subscription"
    ],
    "title": "如何取消您的 Swing Catalyst 訂閱",
    "uri": "/sc-support/zh-hant/account-setup/cancel-subscription/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "安裝 Swing Catalyst 時，Motion Catalyst 也會一併安裝。本文將說明如何將 Motion Catalyst 捷徑新增至您的桌面。\n安裝 Swing Catalyst 後，開啟 Windows 檔案總管（工作列上的資料夾圖示）\n瀏覽至 C:\\Program Files\\Initial Force\\Swing Catalyst\\bin\n在該資料夾中，您會找到 Motion Catalyst 應用程式。請對其按一下滑鼠右鍵。\n選擇「傳送到 \u003e 桌面 (建立捷徑)」\n您的桌面上現在應該會出現 Motion Catalyst 的圖示。\n最後更新：2022-10-31 | 在官方支援網站上檢視",
    "description": "如何為 Motion Catalyst 建立桌面捷徑",
    "tags": [
      "Force-Data"
    ],
    "title": "如何建立 Motion Catalyst 捷徑",
    "uri": "/sc-support/zh-hant/account-setup/create-shortcut/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "簡介 本文說明如何查看您電腦規格的摘要。\n適用情況 確認您的電腦是否符合我們建議的電腦規格。\n若您需要向我們的支援團隊提供電腦相關資訊。\n相關主題 建議的電腦規格\n我的顯示卡是什麼？\n若要查找您的電腦規格，請點選 Windows 的開始選單，然後輸入：「about your pc」。\n第一個結果應該會是「About your PC」。\n裝置規格如下所示。\n最後更新：2023-10-31 | 在官方支援網站上檢視",
    "description": "本文說明如何查看您電腦規格的摘要。",
    "tags": [],
    "title": "如何查找您的電腦規格",
    "uri": "/sc-support/zh-hant/account-setup/find-computer-specs/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "簡介\n本支援文章說明如何為 Blackfly（或 Blackfly S）GigE 攝影機設定靜態 IP 位址。一般使用情況下無需進行此設定，因為 Swing Catalyst 會自動處理 IP 配置。\n需求\nSpinview 應用程式（Spinnaker SDK 的一部分）。\nSwing Catalyst。\n一台或多台 FLIR Blackfly（或 Blackfly S）GigE 攝影機。\n安裝 Spinnaker 下載並執行 Spinnaker 安裝程式。\n在 Spinnaker 安裝程式上按右鍵，以系統管理員身分執行。\n勾選「Camera Evaluation」並點擊「Next」。\n依照螢幕上的指示繼續完成安裝。\n安裝完成後，重新啟動電腦。\n在乙太網路介面卡上設定靜態 IP 每個攝影機和網路介面卡必須擁有各自唯一的靜態 IP 位址。例如，若您為攝影機指定靜態 IP 位址，請確保網路介面卡依照下方「建議靜態 IP 配置」對照表，設定對應的 IP 位址。\n警告\n請根據所對應的攝影機來設定網路介面卡，而非依介面卡編號。僅針對已識別的攝影機變更設定，其他介面卡保持不變。若將攝影機連接至不同的介面卡，則必須重新設定才能正常使用。\n在控制台中，前往「網路和網際網路」，再進入「網路和共用中心」，然後點擊「變更介面卡設定」。\n此處可看到電腦上所有網路介面卡的清單。在本例中，我們希望設定裝置名稱為「Intel Pro/1000」的「Ethernet 2」和「Ethernet 3」。請務必只設定用於攝影機的網路介面卡，避免影響其他介面卡的網際網路連線。\n在您要修改的網路介面卡上按右鍵，點擊「內容」，然後向下捲動至「網際網路通訊協定第 4 版 (TCP/IPv4)」並點擊「內容」。\n選取「使用下列 IP 位址」。\n輸入下方建議靜態 IP 配置對照表中的 IP 位址。\n輸入子網路遮罩 255.255.255.0。\n選取「使用下列 DNS 伺服器位址」，可留空不填。\n點擊「OK」。\n建議靜態 IP 配置 乙太網路介面卡編號 乙太網路介面卡 IP 子網路遮罩 閘道 連接至攝影機 攝影機 IP 1 10.0.1.1 255.255.255.0 10.0.1.1 1 10.0.1.10 2 10.0.2.1 255.255.255.0 10.0.2.1 2 10.0.2.10 3 10.0.3.1 255.255.255.0 10.0.3.1 3 10.0.3.10 4 10.0.4.1 255.255.255.0 10.0.4.1 4 10.0.4.10 閘道可同時在攝影機上設定。\n在攝影機上設定靜態 IP 請對每台需要設定靜態 IP 的攝影機重複以下步驟。若要進入攝影機 IP 配置，請開啟 SpinView 應用程式，並在您要設定 IP 的攝影機上按右鍵。\n在裝置清單中的攝影機上按右鍵，選取「GigE Configuration」。\n點擊「IP Configuration」。\n依照下方建議 IP 配置對照表輸入 IP 位址和子網路遮罩。\n輸入攝影機的 IP 位址，使用對照表中的 IP 位址，例如攝影機 1 的對應位址。\n輸入子網路遮罩，例如：255.255.255.0。\n預設閘道可留空，或使用攝影機所連接之網路介面卡的 IP 位址。\n取消勾選 DHCP。\n點擊「Set Current and Persistent IP Configuration」。\n攝影機建議靜態 IP 配置 攝影機編號 IP 子網路遮罩 閘道 1 10.0.1.10 255.255.255.0 10.0.1.1 2 10.0.2.10 255.255.255.0 10.0.2.1 3 10.0.3.10 255.255.255.0 10.0.3.1 4 10.0.4.10 255.255.255.0 10.0.4.1 閘道 IP 為攝影機所連接之網路介面卡的 IP 位址。\n例如，攝影機 1 連接至網路介面卡 1。\n使用 SpinView 啟用巨型幀並優化攝影機的網路介面卡 請注意，以下變更須對所有連接攝影機的網路介面卡執行。\n在 SpinView 中，於攝影機上按右鍵，選取「GigE Configuration」。\n點擊「Configure Adapter Properties」。\n出現提示時點擊「Yes」。\n點擊「Next」。\n點擊「Auto Fill All」。\n點擊「Next」。\n勾選「Enable Media Optimization」。\n點擊「Next」。\n點擊「Configure」以套用變更。\n最後更新：2024-02-22 | 在官方支援網站上檢視",
    "description": "每個攝影機和網路介面卡必須擁有各自唯一的靜態 IP 位址。例如，若您為攝影機指定靜態 IP 位址，請確保...",
    "tags": [
      "Gige-Camera",
      "Flir"
    ],
    "title": "如何為 FLIR Blackfly GigE 攝影機設定靜態 IP",
    "uri": "/sc-support/zh-hant/cameras-video/flir-blackfly-static-ip/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "簡介\n本支援文章說明如何為您的 Lynx 攝影機設定靜態 IP 位址。 一般使用時不需要進行此設定，因為 Swing Catalyst 會自動處理 IP 設定。\n系統需求\nMVS 應用程式（用於設定 IP）。\nSwing Catalyst 9.8.5 版或更新版本。\n一台 Swing Catalyst Lynx GigE 攝影機。\n已可正常運作的攝影機設置。\n安裝 MVS 應用程式\n下載並解壓縮 MVS 用戶端應用程式：https://swingcatalyst.s3.amazonaws.com/drivers/MVS_STD_3.4.1_220407.zip\n安裝 MVS，依照畫面上的指示操作。\n取消勾選「開啟版本說明」。\n點擊「完成」。\n在乙太網路介面卡上設定靜態 IP 一旦攝影機被指派了靜態 IP 位址，您需要將計劃使用的網路介面卡也設定為靜態 IP。此設定必須與每台已連接的攝影機相符。\n這意味著如果您拔除攝影機並將其連接至不同的乙太網路介面卡，除非重新設定，否則將無法正常運作。\nWarning: 以下所提及的「乙太網路介面卡」編號並非網路介面卡本身的關聯編號，僅作為說明用途。請依每台攝影機分別設定各網路介面卡，例如若您連接了兩台攝影機，請依序設定，並參考乙太網路介面卡 1 和 2 的對應表格，請勿更改未連接已識別攝影機的網路介面卡設定。\n在已連接攝影機上方的乙太網路介面卡上按右鍵。\n點擊「NIC Settings」。\n啟用 Jumbo Frame。\n將接收緩衝區設為最大值。\n將傳送緩衝區設為最大值。\n點擊「Internet Protocol Properties」中的「Open」。\n依照下表設定網路介面卡。\n各乙太網路介面卡的建議靜態 IP 設定 以下為靜態 IP 位址設定的範例。請注意乙太網路介面卡與對應攝影機的 IP。\n乙太網路介面卡編號 乙太網路介面卡 IP 子網路遮罩 閘道 連接至攝影機 攝影機 IP 1 10.0.1.1 255.255.255.0 10.0.1.1 1 10.0.1.10 2 10.0.2.1 255.255.255.0 10.0.2.1 2 10.0.2.10 3 10.0.3.1 255.255.255.0 10.0.3.1 3 10.0.3.10 4 10.0.4.1 255.255.255.0 10.0.4.1 4 10.0.4.10 在攝影機上設定靜態 IP 請確認您的 Lynx 攝影機已連接。若您是在啟動應用程式後才連接攝影機，請將滑鼠移至「GigE」選單並點擊重新整理按鈕。\n此程序必須針對所有已設定靜態 IP 的 Lynx 攝影機重複執行。\n請注意，您需要先為攝影機 1 設定靜態 IP，然後依序設定網路卡 1。完成第 1 台後，再繼續進行第 2 台，依此類推。所提及的編號並非網路介面卡本身的實際名稱（例如「Ethernet 2」），僅作為說明用途。\n在清單中的攝影機上按右鍵，然後點擊「Modify IP」。\n將選項從 DHCP 或 LLA 更改為 Static IP。\n依照以下說明設定 IP 位址和子網路遮罩。\n每台攝影機的 IP 必須各不相同。\n攝影機的建議靜態 IP 設定 攝影機編號 IP 子網路遮罩 閘道 1 10.0.1.10 255.255.255.0 10.0.1.1 2 10.0.2.10 255.255.255.0 10.0.2.1 3 10.0.3.10 255.255.255.0 10.0.3.1 4 10.0.4.10 255.255.255.0 10.0.4.1 最後更新：2024-01-08 | 在官方支援網站上檢視",
    "description": "一旦攝影機被指派了靜態 IP 位址，您需要將計劃使用的網路介面卡也設定為靜態 IP。這需要...",
    "tags": [
      "Gige-Camera",
      "Lynx-Camera"
    ],
    "title": "如何為 Lynx GigE 攝影機設定靜態 IP",
    "uri": "/sc-support/zh-hant/cameras-video/lynx-static-ip/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何設定 Halcon 以搭配 Swing Catalyst 使用 Swing Catalyst 6.0 的發布帶來了對三種最常見機器視覺標準的支援。\nUSB3 Vision GigE Vision GENiCAM 開始之前\n本文主要涵蓋 Halcon 的安裝、授權的安裝，以及 Ximea USB3 相機的基本設定。我們無法保證與較新版本的相容性，且 Swing Catalyst 僅支援 Halcon 12。\n如需瞭解如何確認您的相機是否支援 Halcon，請參閱：如何確認您的相機支援哪些標準以搭配 Halcon 使用。\n警告 Swing Catalyst 僅支援 HALCON 第 12 版。 Halcon 12 支援：GenAPI v2.4.1。 USB 授權狗驅動程式與 Windows 10 及 11 不相容！ 安裝 Halcon 時，請務必取消勾選「Install Driver for USB Dongles」，否則您的電腦將在啟動時當機。\n有關如何安裝新 USB 驅動程式的詳細資訊，請參閱我們的支援文章：\n連接 Halcon USB 授權狗時電腦出現藍色畫面 在安裝 Halcon 後，請參閱針對您相機的專屬文章，以便在 Swing Catalyst 中進行設定及廠商特定配置。\n硬體需求： 通用相機支援加密狗或鎖定至網路卡的授權。\n符合 USB3 Vision、GigE Vision 或 GenICam 標準的相機。\n用於授權加密狗的備用 USB 連接埠。\n請確保您的硬體符合製造商的建議規格。\nNote: 製造商特定的相機設定可在本文底部找到。\n更多資訊 Ximea USB3 Vision 資訊：http://www.ximea.com/en/usb3-vision-camera/usb3zone\nPoint Grey USB3 Vision 資訊：http://www.ptgrey.com/usb3-vision-cameras\nBasler USB3 Vision 資訊：http://www.baslerweb.com/en/support/knowledge-base/frequently-asked-questions\nGenICam（相機通用介面）：http://www.emva.org/standards-technology/genicam/\n軟體需求 Halcon 授權檔案。您應已透過電子郵件收到此檔案。\n請確保已安裝最新版本的 Halcon；若在 Swing Catalyst 中出現警告，請聯絡支援人員以取得協助。\n安裝 Halcon\nHalcon 執行環境可在我們的下載頁面找到，或直接從此處下載。\n下載完成後，在檔案上按右鍵並點選「解壓縮全部」。\n開啟解壓縮後的資料夾並執行安裝程式。\n開啟安裝程式，依照畫面上的指示及以下逐步說明進行操作。\n選取「Install x64 version」。\n在「Choose Components」中，您可以取消勾選所有元件，僅保留「Runtime x64」。\n在「Additional Drivers」區段，請務必取消勾選「Install driver for USB dongles」，這一點非常重要。\n若您使用 GigE 相機，請確保勾選「Install MVTec GigE Vision Streaming Filter」。\n安裝授權檔案時，選取「I have a license file that should be installed」，並指向您從銷售或支援人員收到的授權檔案。\n依照畫面上的指示繼續操作。\n警告：若使用 Windows 10 或 11，請取消勾選「Install driver for USB dongles」 請務必安裝 GigE Vision 濾波器（注意： 若您使用 GigE 相機，此為必要步驟）。\n找到您透過電子郵件收到的 license.dat 檔案，然後點選下一步。\n完成安裝。若提示需要重新開機，請點選「是」。\nHalcon 在 Swing Catalyst 中的基本相機設定 請參閱以下製造商的設定說明：\nXimea USB3 Vision：ximea-usb3-setup.md\nBasler GigE Vision：basler-gige-setup.md\n有興趣購買 Halcon 以將您的相機搭配 Swing Catalyst 使用？\n請聯絡 sales@swingcatalyst.com 訂購 Swing Catalyst 通用相機支援。\n疑難排解 Q：每當我連接 USB 加密狗時，電腦就會當機或出現藍色畫面\nA：請依照此文章中的步驟安裝較新的驅動程式。\n最後更新：2025-12-08 | 在官方支援網站上檢視",
    "description": "Swing Catalyst 6.0 的發布帶來了對三種最常見機器視覺標準的支援。",
    "tags": [
      "Troubleshooting",
      "Gige-Camera",
      "Usb-Camera",
      "Licensing"
    ],
    "title": "如何為 Swing Catalyst 設定 Halcon",
    "uri": "/sc-support/zh-hant/cameras-video/halcon-setup/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "如何為您的 SwingCatalyst 資料庫設定自動備份\n本支援文章說明如何設定 Backblaze 以備份您的 SwingCatalyst 資料庫\n如果您想要備份／複製您的資料庫與揮桿資料，請參閱此文章：backup-database.md\n您也可以使用 Crashplan：https://www.crashplan.com/en-us/\n設定流程類似，若您希望使用其他備份服務商，也可以將本指南作為大多數步驟的參考。\n我們建議在開始錄製影片之前先設定好備份系統，因為將大型資料庫上傳至雲端需要很長的時間；從一開始就逐步上傳會更為輕鬆。\n建立 Backblaze 帳戶\n相關資料：\nBackblaze 電腦備份指南：https://www.backblaze.com/backup-your-computer.html\n前往 Backblaze.com，註冊並依照付款指示完成操作。\n點擊「下載 Windows 版本」。\n用戶端下載完成後，啟動程式。\n若安裝後未顯示控制面板，可能是因為您的 Windows 版本問題，請在此嘗試最新的安裝程式（無需解除安裝舊版本）：http://files.backblaze.com/install_backblaze.exe\n若您的 SwingCatalyst 資料庫儲存於不同的磁碟分割區或硬碟，請點擊「設定」。\n例如，請確認已選取 D:\\。\nBackblaze 將備份您所有的資料，包括 SwingCatalyst 的設定資料夾、所有課程檔案及學生資料。\n在資料遺失時還原揮桿資料\n若您已將資料備份（透過 Backblaze）至外接硬碟，且其備份時間與線上備份同樣新，則從外接媒體還原會快得多，且為建議的方式。\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "如何為您的 SwingCatalyst 資料庫與錄製內容設定自動備份",
    "tags": [
      "Backup",
      "Database"
    ],
    "title": "如何為您的 SwingCatalyst 資料庫設定自動備份",
    "uri": "/sc-support/zh-hant/account-setup/automatic-backups/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何修復 USB 3.0 / 2.0 攝影機的「掉幀」問題 本支援文章將告訴您如何診斷並修復 USB 3.0 和 2.0 攝影機的「掉幀」問題。\n症狀 攝影機即時預覽畫面出現「卡頓」現象\n捕捉的影片片段中有許多影格重複出現\n攝影機「進階設定」視窗顯示大量掉幀數量\n說明 掉幀問題可能與多種因素有關，但根本原因在於 USB 攝影機通常受限於 USB 匯流排上可用頻寬的總量。USB 3.0 的頻寬能力遠高於 USB 2.0，這也是為何在配備 USB 3.0 的筆記型電腦上可以使用多於一支攝影機的原因，然而兩者的限制在某種程度上是相同的。\n若您連接了其他 USB 裝置，它們可能會「佔用」頻寬。\n若電腦嘗試透過進入「閒置」電源狀態來節省電力，可能會影響 USB 3.0 或 2.0 的性能，進而導致掉幀。\n若您的筆記型電腦配備多個 GPU（通常為 Intel 與 NVIDIA），則務必確保 Swing Catalyst 使用性能最佳的選項：https://pureinfotech.com/set-gpu-app-windows-10/\n解決方案 在攝影機「進階設定」中降低「像素時脈」；若此方法有效但導致幀速率顯著降低，請嘗試以下其他解決方案。\n確保未連接任何其他（使用中的）USB 裝置，例如網路攝影機。\n啟用「停用 CPU 閒置狀態」設定。此設定可在應用程式「IDS Camera manager」的「Additional Functions」按鈕/對話框中找到。其他攝影機製造商也有類似功能。\n變更 Windows 的「電源計畫」，請參閱此文章：../account-setup/optimize-laptop.md\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "本支援文章將告訴您如何診斷並修復 USB 3.0 和 2.0 攝影機的「掉幀」問題。",
    "tags": [
      "Troubleshooting",
      "Usb-Camera"
    ],
    "title": "如何修復 USB 3.0 或 2.0 攝影機的「掉幀」問題",
    "uri": "/sc-support/zh-hant/cameras-video/fix-dropped-frames/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "簡介 本支援文章說明如何將 FlightScope Launch Monitor 與 Swing Catalyst 搭配使用。Swing Catalyst 在錄製新錄製時，將整合並儲存所有 FlightScope 的資料。若要啟用整合功能，FlightScope 軟體必須與 Swing Catalyst 同時執行。\n適用對象 擁有 FlightScope Launch Monitor 的使用者。 支援型號： X1、X2、X2 elite 及 X3 系列。\nXi 及 Xi+ 系列。\n安裝 為使 Swing Catalyst 能夠辨識並讀取 FlightScope 的擊球資料，必須在 FlightScope 軟體中啟用伺服器模式。\n啟動 FlightScope，並在主選單中點擊「Advanced Settings」按鈕。（在較新版本的 FlightScope 中，您可以直接按鍵盤上的 ALT 鍵來顯示選單列。） 點擊位於右下方的 Advanced Settings 按鈕，畫面頂端將顯示一個選單列。 點擊 Networking，然後從清單中選擇 Server。 確認「Server Port」已設定為 1248，然後按 Ok。\n注意：伺服器名稱與伺服器 IP 位址可能因您是透過 USB X2（X2 Elite 則為乙太網路）或 WiFi 連線而有所不同。通常無需變更此設定。\n在 FlightScope 中切換至 Player Comparison 或類似模式。 確認 FlightScope 正在追蹤並顯示擊球資料。\n啟動 Swing Catalyst，並讓 FlightScope 在背景繼續執行。\n前往 Swing Catalyst 主選單 - 設定 - 硬體，並勾選 Launch Monitor 下方的「Enabled」。\n若顯示為已斷線，請確認 FlightScope 應用程式正在執行，且 FlightScope 裝置已透過 USB 或 WiFi 網路連接至電腦。\nFlightScope 應顯示「Server active, 1 clients」，這表示 Swing Catalyst 已成功連接至 FlightScope。\n已知問題 即使 FlightScope 軟體正在執行、追蹤擊球且已啟用伺服器模式，FlightScope 仍未顯示為已連接。\n請嘗試重新啟動 FlightScope 與 Swing Catalyst。請先啟動 FlightScope。\n請嘗試將伺服器模式設為 None，然後再重新啟用。請參閱步驟 3。\nFlightScope 顯示在錯誤的螢幕上。\n若要將 FlightScope 移至其他螢幕：點擊 FlightScope 程式，然後將滑鼠游標移至另一台顯示器。在將滑鼠游標保留於目標螢幕上的同時，按下 F11 鍵。FlightScope 現在應會在另一個螢幕上執行。\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "本支援文章說明如何將 FlightScope Launch Monitor 與 Swing Catalyst 搭配使用。Swing Catalyst 在錄製新錄製時，將整合並儲存所有 FlightScope 的資料……",
    "tags": [
      "Usb-Camera",
      "Launch-Monitor"
    ],
    "title": "如何將 FlightScope 與 Swing Catalyst 搭配使用",
    "uri": "/sc-support/zh-hant/hardware/flightscope-setup/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "如何將 Foresight GC2 和 HMT Launch Monitor 與 Swing Catalyst 搭配使用 簡介 本支援文章說明如何將 Foresight GC2 與 Swing Catalyst 搭配使用。\n注意：如果您想同時使用 FSX 和 GC2，將無法提供 HMT 數據，您需要先啟動 FSX，再啟動 Swing Catalyst，並在 Swing Catalyst 設定中選擇 FSX Sim。\n警告 從 Swing Catalyst 10.1.1 版本起，GC2 整合功能將預設關閉，以防止在執行 Swing Catalyst 時造成 FSX 2020 關閉的問題。\n如果您擁有 GC2 並希望繼續與 Swing Catalyst 搭配使用，需要從設定檔中啟用此功能（請參閱下方的疑難排解章節）。\n系統需求 電腦需具備可用的 USB 連接埠或 WiFi（與網際網路連線分開）。\n需要支援即時串流相機、網路相機或高速相機的授權。\nSwing Catalyst 4.0 或更新版本\n重要：電腦建議規格。\nSwing Catalyst 同時支援與 GC2 及其附加裝置 HMT 的整合。\n若要在使用 Foresight 模擬器軟體（FR-1、FSX、FSX 2020 等）的同時使用 GC2，必須在 Swing Catalyst 的 Launch Monitor 設定中選擇 Foresight Simulator。\n注意：如果您不熟悉 Swing Catalyst 的 Launch Monitor 設定，以及如何將 Launch Monitor 作為捕捉觸發器使用，請在繼續之前先閱讀我們的支援文章。\n直接連線（不整合 FSX）： 此連線方式可直接連接裝置，無需同時執行 FSX。如果您有 HMT 裝置，Swing Catalyst 也會擷取球桿數據。\n設定步驟 GC2 支援頁面（木桿驅動程式、韌體及使用者手冊）\n請依照 Foresight GC2 安裝指南（見上方連結）進行操作，並安裝 GC2 USB 驅動程式。請務必根據您的 Windows 版本選擇正確的版本。\n確認 GC2 已使用最新韌體版本\n在 GC2 關閉的狀態下，使用 USB 線將 GC2 連接至電腦，然後開啟 GC2 電源。\n啟動 Swing Catalyst，並前往設定（在主畫面中，點擊左下角的齒輪圖示），選擇硬體。\n啟用 Launch Monitor 整合功能。如果您希望 Launch Monitor 作為捕捉觸發器，請確認已勾選「啟用為觸發器」。\n選擇 Foresight GC2\n示例截圖顯示 Foresight GC2 已識別並連線：\n模擬器整合 在 Launch Monitor 選擇清單中選擇 ForesightSim，如果沒有自動顯示，請按「搜尋」以更新清單。\n啟動 Foresight 模擬器（支援的版本包括：FSX、FSX 2020 及 FR-1）。\n進入 Foresight 模擬器設定，在「On-Screen Data」區段中啟用「Write Shots CSV」（詳情請參閱模擬器使用者手冊，或聯絡 Foresight 支援以取得協助）。\nSwing Catalyst 會監控 Shots.CSV 檔案的變更，並主動使用該檔案從模擬器擷取擊球數據。\n請確認您使用的是球桿配對模式（此模式為唯一能提供完整球數據的模式）。 疑難排解 本章節包含 Foresight GC2 和 HMT 的疑難排解步驟，以及 GC2 與 FSX 搭配使用的相關說明。\n我剛更新軟體後，整合功能無法正常運作！ 在 Swing Catalyst 10.1.1 版本中，GC2 整合功能預設為關閉，以防止在 Swing Catalyst 執行時 FSX2020 自行關閉。這是一個暫時的解決方案，待 Foresight 能夠解決 FSX 的問題後將予以調整。\n若要重新開啟 GC2 整合功能，請關閉 Swing Catalyst 並前往設定資料夾：\nC:\\ProgramData\\Swing Catalyst\\settings\n右鍵點擊「GeneralSettings.xml」，然後選擇以記事本開啟（或點擊編輯）。\n將 false 改為 true 並儲存文件。\n儲存後，重新啟動 Swing Catalyst，GC2 應會出現在 Launch Monitor 清單中。\nForesight USB 連線 確認在 Swing Catalyst 設定中已選擇 Foresight USB。\n檢查與 Foresight GC2 裝置的連線，並確認 Foresight 模擬器軟體並未執行中。\n如果數據遺失或擊球未正確被擷取，可能表示快閃模組需要更換。 或者可能是球桿缺少標記點，或標記點已無法正常運作。\n如果您仍無法在 Swing Catalyst 中取得 Foresight GC2 發球監測數據，請透過我們的服務中心提交工單。\n示例截圖顯示裝置已連接至電腦但尚未完全啟用，請確認已選擇該裝置：\nForesight 模擬器連線 確認您在 Foresight 模擬器中有接收到數據。\n嘗試關閉 Swing Catalyst，先啟動 Foresight 模擬器，再啟動 Swing Catalyst。\n確認您在 Foresight 模擬器中使用的是球桿配對模式，並且已在設定中啟用 Shots.CSV。\n確認您已在 Swing Catalyst 設定中啟用「作為觸發器使用」。\nForesight 支援：http://www.foresightsports.com/support/faqs\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "本支援文章說明如何將 Foresight GC2 與 Swing Catalyst 搭配使用。",
    "tags": [
      "Troubleshooting",
      "Usb-Camera",
      "Launch-Monitor",
      "Licensing"
    ],
    "title": "如何將 Foresight GC2 和 HMT 與 Swing Catalyst 搭配使用",
    "uri": "/sc-support/zh-hant/hardware/foresight-gc2-hmt/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "簡介 本篇支援文章將說明如何設定 Foresight GC3 或 Bushnell Launch Pro 以與 SwingCatalyst 搭配使用。\nForesight GC3 提供 WiFi、WiFi Direct、USB 及乙太網路等多種方式，可用於連接 Launch Monitor 裝置。\n請注意，此處的 WiFi 並非直接連接至 GC3，直接連接的方式稱為 WiFi Direct。WiFi 是指讓 GC3 / BLP 連接至現有無線網路所使用的網路。\n需求 電腦須具備可用的 USB 連接埠、乙太網路連接埠或 WiFi（另需具備網際網路連線能力）。\nSwingCatalyst 10.0 或更新版本\nNote: 若您打算在 SwingCatalyst 中使用 HD 攝影機，我們建議單獨執行 FSX（即不與 SwingCatalyst 同時執行），或在不同的電腦上執行。\n請確認您至少配備 NVIDIA GeForce 1080 或更高規格的顯示卡，且電腦符合 Foresight 的建議規格。\n連線與設定 透過 USB、WiFi* 或乙太網路連接 GC3。\n在「設定」-\u003e「硬體」-\u003e「Launch Monitor」中，應會列出可選擇的 Launch Monitor 及其不同連線介面。\n請確認選取您希望使用的 Launch Monitor 及連線介面：\n* 若透過 Wi-Fi 連線，您必須具備其他網際網路連線方式，因為使用 GC3 需透過網際網路進行驗證。\n疑難排解 Foresight GC3 未顯示為已連線或未觸發 SwingCatalyst 10.0 至 10.1.0 版本中，Foresight SDK 存在一個已知的錯誤（bug）。\n此錯誤會導致 SwingCatalyst 無法從 GC3 / BLP 接收資料。\n因應措施： 關閉 SwingCatalyst，並透過 USB 將 GC3 / Launch Pro 連接至電腦。\n確認 Foresight GC3 已顯示在您的電腦上，它將在「本機」下顯示為大量儲存裝置。\n從以下連結下載並解壓縮因應措施：https://cloudfront.swingcatalyst.com/files/GC3-BLP-Workaround.zip\n開啟解壓縮後的資料夾，並雙擊「Workaround.exe」。這將開啟一個命令提示字元視窗，並嘗試連接及中斷與您的 Launch Monitor 的連線。\n2. 4. 其他疑難排解建議： 若裝置未顯示，請嘗試將其連接至電腦上不同的 USB 連接埠。\n若透過 WiFi Direct 連線，請確認您可透過其他方式存取網際網路，或備有獨立的 WiFi 網路卡。\n嘗試透過不同的介面連線，例如若您已嘗試使用 WiFi，請改用乙太網路或 USB。\n確認沒有其他軟體同時嘗試連接該裝置。\nForesight GC3 已連線且已觸發，但錄製內容不含任何資料 嘗試將 GC3 / BLP 裝置重新開機（電源循環）。\n確認您使用的球桿已正確貼上貼紙。\n確認附近沒有其他以攝影機為基礎的 Launch Monitor，以免干擾 GC3 / BLP 追蹤球的能力。\n如需進一步疑難排解，請參閱 Foresight 的疑難排解文章。 WiFi 連線問題 請參閱 Foresight 的疑難排解步驟：https://help.foresightsports.com/hc/en-us/articles/4409069231891-Troubleshooting-for-GC3-Launch-Pro-Wifi-Connection\n軟體連線問題（FSX 等）： https://help.foresightsports.com/hc/en-us/articles/4401839640723-Troubleshooting-Software-Connection-Issues\n從 GC3 / BLP 裝置本身取得記錄檔： https://help.foresightsports.com/hc/en-us/articles/4403426805651-Launch-Monitor-Log-File\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "本篇支援文章將說明如何設定 Foresight GC3 或 Bushnell Launch Pro 以與 SwingCatalyst 搭配使用。",
    "tags": [
      "Troubleshooting",
      "Usb-Camera",
      "Force-Data",
      "Launch-Monitor"
    ],
    "title": "如何將 Foresight GC3 / Bushnell Launch Pro 與 SwingCatalyst 搭配使用",
    "uri": "/sc-support/zh-hant/hardware/foresight-gc3-launch-pro/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "簡介 本支援文章將說明如何將 Full Swing Golf 與 SwingCatalyst 進行設定。\n系統需求 搭載 E6 的 Full Swing Golf 模擬器\nSwingCatalyst 4.5 或更新版本，建議使用 7.1 或更新版本。\n安裝步驟 請確認 E6 已由您的 Full Swing Golf 支援代表完成安裝與設定。\n開啟 SwingCatalyst，並在 SwingCatalyst 設定 -\u003e 硬體 中選擇 Full Swing Golf。\n關閉 SwingCatalyst，並前往 C:\\ProgramData\\Swing Catalyst\\settings\n開啟 HardwareSettings.xml，找到顯示 的位置\n輸入具有網際網路連線能力（或直接連接至 SwingCatalyst 電腦）的網路介面 IP 位址。請確認此 IP 位址並非用於 DSP 的網路卡。\n若 E6 與 SwingCatalyst 安裝於同一台電腦上，亦可使用 IP：127.0.0.1\n在 E6 關閉的狀態下，以記事本開啟位於 C:\\TruGolf\\ E6 Golf 1.6\\defaults.stg 的 defaults.stg 檔案，並如下方截圖所示，將 \u003cTrueAccessSettings Enabled=“False” 改為 Enable=“True”。 啟動 Full Swing Golf E6，然後再啟動 SwingCatalyst，請確認已勾選「作為觸發器使用」及「啟用」核取方塊。\n疑難排解 Full Swing Golf 未顯示為已連線 請確認 E6 正在 Full Swing 電腦上執行。\n檢查網路連線狀態，您是否能從 SwingCatalyst 電腦 ping 到 Full Swing 電腦？\n請確認 defaults.stg 檔案中的 TruAccessSettings 已啟用。\n是否有額外的網路卡或介面？請嘗試停用它們。E6 在啟動時對所選擇的介面非常挑剔，若選擇了錯誤的介面或網路卡，連線將無法正常運作。\n使用 E6 Shot Data Test.bat 及 E6 shunt shot 測試整合功能，在練習模式下按下 Ctrl S（如需進一步協助，請聯絡 Full Swing Support）。\n重新啟動 E6（請先啟動 E6，再啟動 SwingCatalyst）。\n重新啟動電腦。\n若您已嘗試上述所有步驟，但 SwingCatalyst 仍顯示未連線，請聯絡 support@swingcatalyst.com。\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "本支援文章將說明如何將 Full Swing Golf 與 SwingCatalyst 進行設定。",
    "tags": [
      "Troubleshooting"
    ],
    "title": "如何將 Full Swing Golf 與 SwingCatalyst 搭配使用",
    "uri": "/sc-support/zh-hant/hardware/full-swing-golf/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "本文說明如何使用 TrackMan、FlightScope 或 ForeSight Launch Monitor，在擊打高爾夫球時自動觸發錄製。當環境中存在大量噪音（例如風聲或附近高爾夫球手在範圍內練習）時，這是使用麥克風的良好替代方案。\n適用範圍 SwingCatalyst 4.5 及更新版本\n相關文章 如何設定觸發器麥克風 解決方案 啟動 SwingCatalyst，並從設定選單開啟硬體設定\n確認已將您的 Launch Monitor 裝置連接至電腦\n確認 Launch Monitor 軟體正在執行*\n在 Launch Monitor 下，勾選 Enabled 核取方塊，以開始接收來自 Launch Monitor 的球與**桿頭數據\n勾選 Use as trigger，以便在偵測到一次擊球時自動觸發影片錄製\nSwingCatalyst 現在將在每次偵測到擊球時自動觸發影片錄製。\n** Foresight 可在不執行 Foresight 模擬器軟體的情況下使用。如需了解如何將 Foresight 與 SwingCatalyst 搭配使用，請參閱對應的支援文章。*\n**並非所有裝置均支援桿頭數據（亦視模式而定）。\n請確認 Launch Monitor 已啟用並設定為觸發器。\n某些 Launch Monitor 在處理數據時的延遲比其他裝置更長。您可以透過選取「Configuration」下拉選單，並以毫秒為單位新增補償延遲來解決此問題。\n例如，1500 毫秒是一個值得嘗試的參考數值。\n最後更新：2024-04-24 | 在官方支援網站上檢視",
    "description": "如何在 SwingCatalyst 硬體設定中將 Launch Monitor 設定為捕捉觸發器",
    "tags": [
      "Launch-Monitor"
    ],
    "title": "如何將 Launch Monitor 設定為捕捉觸發器",
    "uri": "/sc-support/zh-hant/hardware/launch-monitor-trigger/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "如何複製或備份 Swing Catalyst 的 ProgramData 資料夾與錄製內容 本支援文章說明如何手動複製 Swing Catalyst 程式資料資料夾，適用於將 Swing Catalyst 從一台電腦移至另一台電腦的情境。 Please note\nSwing Catalyst 授權無法同時在兩台電腦上啟用。當您啟動 Swing Catalyst 時，授權即會被啟用。這表示如果您打算將 Swing Catalyst 從電腦 A 移至電腦 B，則不能再次在電腦 A 上啟動 Swing Catalyst，否則授權將被鎖定 24 小時。\nRelated articles\n如何備份您的 Swing Catalyst 資料庫與揮桿資料\n如何將資料庫移至新的磁碟分割或硬碟\nRequirements\n外接硬碟或次要硬碟，且需有足夠的可用空間存放您的 Swing Catalyst 資料庫。 步驟 1：備份 ProgramData 資料夾 Swing Catalyst 的程式資料資料夾位於 C:\\ProgramData\\Swing Catalyst\\\n程式資料資料夾包含設定、感應器校準資料、授權檔案等內容。\n請注意，錄製內容可能儲存於不同位置，請記下該位置（請參閱步驟 2）。\n在路徑列輸入 %programdata% 後按下 Enter 鍵，即可前往 ProgramData。\n將整個 Swing Catalyst 資料夾複製到外接硬碟。\n以下為 Swing Catalyst ProgramData 資料夾：\n將 SwingCatalystDB.s3db 檔案複製到外接硬碟或次要硬碟。\n步驟 2：複製您的錄製內容 找出錄製內容的儲存位置 前往 Swing Catalyst 設定：點擊「General」，並查看「Database」區段中所指定的「Path」（請參閱上方截圖右上角區域）。\n記下資料庫位置，這裡就是您的錄製內容與課程的儲存位置。\n常見情況是 Swing Catalyst 的資料庫檔案位於 ProgramData 目錄中，但由於空間限制，實際的錄製內容（即資料庫所指向的檔案）儲存於不同的硬碟或磁碟分割上。\n如果您的資料庫（如上方截圖所示）顯示為 C:\\ProgramData\\Swing Catalyst\\database，請複製該 database 資料夾。\n將資料複製到新電腦 現在我們已將 Swing Catalyst 的 ProgramData 目錄以及所有錄製內容（如上方截圖所示的路徑所定義）複製到外接硬碟或類似裝置，即可準備將其複製到新電腦。\nImportant: 繼續操作前，請確保先下載並安裝 Swing Catalyst。\nRequirements:\n有效的 Swing Catalyst 授權。 取代 Swing Catalyst ProgramData 目錄 新電腦上應已有全新安裝的 Swing Catalyst，此電腦上應無任何需要保留的內容，因此直接取代檔案應無問題。\n連接您的外接硬碟，並找到您所複製的 Swing Catalyst ProgramData 目錄。\n前往新電腦上的 ProgramData 目錄。\n將新電腦上現有的 Swing Catalyst 資料夾，替換為您從外接硬碟複製的版本。\n設定資料庫 在某些情況下，若 Swing Catalyst 設定使用的位置並非預設的 C:\\ProgramData\\Swing Catalyst\\database，則需要將該資料夾的內容複製到 ProgramData 目錄中的 database 資料夾。\n以上述範例為例，我們的目錄為 D:\\Temp2，這表示需要將此資料夾的內容複製到 database 資料夾中。\n若要查看 Swing Catalyst 目前設定使用的路徑，可使用 regedit 登錄編輯器工具來檢查。\n前往 電腦 –\u003e HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Initial Force\\Swing Catalyst。點擊如下方截圖所示的資料夾。\n以下為登錄項目，DatabaseFilePath 不應被修改。\nDatabasePath 是 Swing Catalyst 尋找錄製內容的位置。\n最後更新：2024-06-11 | 在官方支援網站上檢視",
    "description": "Swing Catalyst 授權無法同時在兩台電腦上啟用。當您啟動 Swing Catalyst 時，授權即會被啟用。這表示如果您打算將 Swing Catalyst 從一台電腦移至另一台...",
    "tags": [
      "Force-Data",
      "Backup",
      "Database",
      "Licensing"
    ],
    "title": "如何將 Swing Catalyst 複製到新電腦或新硬碟",
    "uri": "/sc-support/zh-hant/account-setup/backup-full-copy/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "如何將 SwingCatalyst 設定與授權移至新電腦 簡介 本文說明如何將您的 SwingCatalyst 設定、授權及所有相關內容複製到新電腦或硬碟。\n若要複製您的資料庫，請參閱我們的另一篇文章。\n準備工作 請確認 SwingCatalyst 已安裝在您要複製資料庫的目標電腦上。\n複製設定檔案 建議您準備一個外接硬碟或隨身碟，以便在電腦之間傳輸設定時儲存相關設定。\n開啟 Windows 檔案總管 輸入以下內容並按下 Enter：%programdata% 這將會在程式資料資料夾內開啟 Windows 檔案總管。\n進入「Swing Catalyst」資料夾。\nTip: 按住鍵盤上的 CTRL 鍵，並用滑鼠點選各個資料夾以進行選取。\n選取除資料庫資料夾或高爾夫球手資料夾以外的所有資料夾。同時選取 SwingCatalystDB.s3db 檔案，此為資料庫檔案。\n按右鍵選擇複製，然後將內容貼到您的隨身碟中。\n將設定複製到新電腦 Note: 請在繼續操作前確認 SwingCatalyst 並未執行中。執行此操作將會覆蓋設定，即舊電腦的原有設定將會取代目前的設定。\n複製到隨身碟後，將隨身碟連接至新電腦，並將內容貼到新電腦上的相同位置。\n重複上述步驟，但改為將資料夾和檔案貼入新電腦的 Swing Catalyst 程式資料資料夾，而非選取和複製。\n最後更新：2024-06-11 | 在官方支援網站上檢視",
    "description": "本文說明如何將您的 SwingCatalyst 設定、授權及所有相關內容複製到新電腦或硬碟。",
    "tags": [
      "Backup",
      "Database",
      "Licensing"
    ],
    "title": "如何將 SwingCatalyst 設定複製到新電腦或硬碟",
    "uri": "/sc-support/zh-hant/account-setup/copy-settings/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "如何使用日誌傳送工具 簡介 本文說明如何將 Swing Catalyst 日誌傳送給技術支援團隊，這有時是協助找出客戶所遇問題的必要步驟。日誌包含 Swing Catalyst 中所有操作與儲存資訊，也可能包含電腦及 Windows 使用者的相關資訊，但僅用於協助識別問題，且該資訊絕不會與第三方共享。\n適用情況 技術支援團隊要求您傳送日誌檔案。\n您想要回報一個錯誤。\n解決方案 開啟 Windows 開始功能表。\n在搜尋欄位中輸入 Swing Catalyst Log Sender。\nWindows 8：\n按下鍵盤上的 Windows 鍵，然後輸入 log sender（方式與 Windows 7 的範例相似）。 輸入您的姓名、電子郵件及簡短說明，然後按一下「Send logs」按鈕。 如何手動將日誌傳送給技術支援團隊 在某些情況下，技術支援人員需要取得特定事件的日誌資訊。\n請注意，只有在技術支援人員明確要求以此方式傳送日誌檔案時，才需要執行此操作。\n若您大致知道發生問題的時間，請傳送修改時間最接近問題發生時間的檔案。\n日誌檔案的儲存路徑為：C:\\ProgramData\\Swing Catalyst\\logs。\n前往 ProgramData 目錄，在 Windows 檔案總管中輸入 %programdata% 並按下 Enter。\n開啟 Swing Catalyst 目錄，然後開啟 log 目錄。\n複製 log.txt 檔案以及最近一次修改的日誌檔案。\n將其附加至您傳送給技術支援的工單或電子郵件中。\n最後更新：2023-12-15 | 在官方技術支援網站上檢視",
    "description": "本文說明如何將 Swing Catalyst 日誌傳送給技術支援團隊，這有時是協助找出客戶所遇問題的必要步驟。日誌包含 Swing Catalyst 中所有操作與儲存資訊，也可能包含電腦及 Windows 使用者的相關資訊，但僅用於協助識別問題，且該資訊絕不會與第三方共享。",
    "tags": [
      "Troubleshooting"
    ],
    "title": "如何將日誌傳送給技術支援團隊",
    "uri": "/sc-support/zh-hant/account-setup/send-logs/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "簡介 本文說明如何將 Swing Catalyst 中的學生資料與錄製內容從一台電腦複製到另一台電腦，例如在升級至更好的電腦時。\n準備工作 請確認目標電腦（即您要將資料庫複製到的電腦）已安裝 Swing Catalyst。\n請確保 USB 隨身碟或外接硬碟有足夠的空間，能容納資料庫及資料庫檔案。\n匯出所有錄製內容 開啟 Swing Catalyst 並進入您的資料庫。\n點擊「匯出」，然後選擇「匯出所有錄製內容」\n選擇您要匯出的目標位置，例如 USB 隨身碟或外接硬碟。\n將 USB 隨身碟或外接硬碟連接至新電腦。進入匯入功能，選擇「從資料夾匯入錄製內容」，您可以視需要匯入主資料夾或個別使用者的資料夾。\n最後更新：2026-01-13 | 在官方支援網站上檢視",
    "description": "本文說明如何將 Swing Catalyst 中的學生資料與錄製內容從一台電腦複製到另一台電腦，例如在升級至更好的電腦時……",
    "tags": [
      "Usb-Camera",
      "Database"
    ],
    "title": "如何將您的 Swing Catalyst 資料庫從一台電腦複製到另一台電腦",
    "uri": "/sc-support/zh-hant/account-setup/copy-database/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "簡介 本文說明如何將 Swing Catalyst 中的學生資料與錄製內容從一台電腦複製到另一台電腦，例如在升級至更好的電腦時。\n適用於：Motion Catalyst 與 SwingCatalyst\n需求：一個具有足夠可用空間的獨立硬碟或磁碟分割區。\n準備工作 請確認您要複製資料庫的目標電腦上已安裝 SwingCatalyst。\n請確認您的 USB 隨身碟或外接硬碟有足夠空間來存放資料庫及資料庫檔案。\n移動資料庫 將資料庫從一個位置移動到另一個位置時，務必確認目標位置有足夠的可用空間。\n進入「設定」，點選「一般」，並記下「資料庫」區段中顯示的路徑與大小。\n在選擇新位置之前，請確認新位置有足夠的儲存空間。\n建議在新位置建立一個資料夾，命名為「SC Database」或類似名稱。\n點選「移動資料庫」，並選取在新位置中剛建立的資料夾。\n執行此操作時，請確認您有一個具有足夠可用空間的獨立磁碟分割區或硬碟。\n最後更新：2024-03-19 | 在官方支援網站上檢視",
    "description": "本文說明如何將 Swing Catalyst 中的學生資料與錄製內容從一台電腦複製到另一台電腦，例如在升級至更好的電腦時...",
    "tags": [
      "Usb-Camera",
      "Database"
    ],
    "title": "如何將資料庫移至新的磁碟分割區或硬碟",
    "uri": "/sc-support/zh-hant/account-setup/move-database/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "本文說明如何將您現有的 V1 資料庫匯入 Swing Catalyst。\n適用範圍 Swing Catalyst 4.6 及更新版本。\n解決方案 從頂部選單或快速啟動選單點擊「Swing 檔案總管」。 按下「Swing 檔案總管」視窗頂部的匯入選單項目。 選擇「Import V1 Database」 瀏覽至儲存 V1 影片的資料夾，通常為 c:\\v1_video。選擇名為 v1data.mdb 的檔案。 按下「開啟」，匯入即會開始。匯入揮桿資料時請耐心等候，所需時間可能因資料庫大小而有所不同。 匯入資料庫至 Swing Catalyst 時遇到問題？\n請確認您已安裝 Microsoft Access Database Engine 2010。\n若尚未安裝，請依您的作業系統從以下連結下載並安裝 64 位元或 32 位元的資料庫引擎：http://www.microsoft.com/en-us/download/details.aspx?id=13255\n安裝完成後，請重新啟動電腦，然後再次嘗試匯入資料庫。\n可能需要以 32 位元模式執行 SC。若有此需要，可透過命令提示字元使用以下指令來完成：C:\\Program Files\\Initial Force\\Swing Catalyst\\bin\u003eMotionCatalyst.x86.exe /p SwingCatalyst\n沒有影片被匯入，匯入似乎停止回應？\n如果您在使用 V1 時未將任何已儲存的影片指定給學生，則您的 V1 資料庫很可能不包含任何學生資料。\nSwing Catalyst 會搜尋學生資料，若您的資料庫中沒有任何學生，很遺憾地將無法匯入您的影片。\n若發生此情況，請聯繫客服以獲得進一步協助。\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "如何將揮桿影片從 V1 匯入 Swing Catalyst",
    "tags": [
      "Troubleshooting",
      "Force-Data",
      "Database"
    ],
    "title": "如何從 V1 匯入影片",
    "uri": "/sc-support/zh-hant/software-features/import-from-v1/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "如何啟用或停用 Swing Catalyst 的測試版 本文說明如何加入測試版，以及如何退出並僅接收 Swing Catalyst* 穩定版本的更新通知。\n測試版是預覽版本，包含新功能、新特性及錯誤修正，適用於在軟體中選擇允許測試版的使用者。\n本文同樣適用於 Motion Catalyst。 如何啟用測試版 啟動 SwingCatalyst 軟體。\n從「設定」進入「一般設定」，再選擇「通知」。\n確認「允許測試版」已勾選。\n重新啟動 SwingCatalyst 後，測試版功能將會啟用，當有新的測試版可用時，您將收到通知。\n請參閱本文底部的截圖，這些圖片對應上述說明。\n如何更新至新的測試版 若您擁有有效授權，且軟體已設定為接收測試版通知，當您啟動軟體時，將會收到類似下方圖片的通知。\n在更新通知彈出視窗中，點選「更新」，系統將開啟新的網頁瀏覽器並前往 SwingCatalyst 網站：點選「下載」按鈕以下載最新版本。雙擊下載的檔案並執行安裝程式。\n若您需要安裝軟體的協助，請參閱：如何安裝 SwingCatalyst。\n如何停用測試版 請確認您遵循適用於您情況的說明。\n**注意：請務必在安裝或解除安裝完成後，再取消勾選「允許測試版」。 **\n若您不再希望使用測試版，可能適用以下兩種情境：\n情境 A：我希望使用先前的穩定版本： 請參閱我們的支援文章：如何安裝先前版本。\n或者，請參閱我們的「如何安裝與解除安裝 SwingCatalyst」支援文章，並參考其中的「解除安裝」章節。\n情境 B：我想繼續使用目前的軟體版本，且不再希望收到任何測試版通知。 請務必確認已安裝的版本確實不是測試版，且您所看到的更新通知中明確提及「beta」，否則執行這些步驟可能會導致您無法使用軟體。請參閱下方疑難排解章節，查看不同更新通知的範例。\n確認您使用的是最新版本 驗證您的授權。在「設定」\u003e「一般」\u003e「授權資訊」下，點選「授權設定」。\n記下右下角所列的主要版本「有效版本至」。\n在標題列中確認目前已安裝的版本，例如 10.0.5 rev 37057。\n在「一般設定」中，確認已連線至網路並點選「檢查更新」，若無可用的新更新，您很可能已使用最新的穩定版本。\n取消勾選「允許測試版」核取方塊，以停止接收新的測試版通知。\n如何判斷哪個版本是穩定版？ 請造訪我們的軟體封存頁面：https://swingcatalyst.com/downloads/，前往「軟體封存」。封存中列出的所有版本均為各主要版本的最新穩定發行版。 啟用或停用測試版 疑難排解 當我收到「有新版本可用」通知時，如何分辨測試版與一般版本？ 下圖顯示的是穩定版軟體通知，請注意其中未提及「beta」字樣。\n下圖為測試版通知，請注意主標題中使用了「beta」一詞，且版本號碼後方以括號標示 beta 字樣，並附有免責聲明。\n最後更新：2023-12-14 | 在官方支援網站上檢視",
    "description": "本文說明如何加入測試版，以及如何退出並僅接收 Swing Catalyst* 穩定版本的更新通知。",
    "tags": [
      "Troubleshooting",
      "Fox-Camera",
      "Licensing"
    ],
    "title": "如何啟用或停用測試版",
    "uri": "/sc-support/zh-hant/account-setup/beta-versions/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何設定 AVT Manta/Prosilca GigE 高速攝影機 Swing Catalyst 支援 AVT 高速 GigE 機器視覺攝影機。這些攝影機透過千兆網路介面/纜線連接至電腦，並允許即時串流/捕捉影片。\n這些攝影機的共同特點是出色的影像品質，以及對多項關鍵影像參數的高度控制能力。\n硬體安裝 有關如何連接攝影機、硬體需求及安裝的詳細資訊，請參閱以下支援文章：\n如何將 GigE 攝影機連接至電腦\n最重要的步驟包括：\n安裝驅動程式（可從 http://downloads.swingcatalyst.com 取得）\n設定網路卡以啟用巨型幀（Jumbo Frames）\n停用除 AVT 濾波器與 IPV4 以外的所有網路模組\n攝影機設定 完成攝影機的安裝與設定後，即可在 SwingCatalyst 軟體中使用這些攝影機。\n若要存取可用的攝影機，請前往 主選單 - 設定 - 攝影機。\n選擇攝影機角度並啟用攝影機後，您可以透過「進階攝影機設定」對話框（點選「進階」按鈕即可開啟）來設定攝影機參數：\n正確設定攝影機參數對於確保良好的影像品質非常重要，但可用的攝影機參數在很大程度上取決於現有的照明條件。\n曝光時間 若照明條件變化較大，建議將曝光模式設定為 Auto，並使用「自動參數」中的最小/最大曝光時間來設定可接受的曝光值範圍。\n若照明條件固定不變，請使用手動模式。\n理想情況下，曝光時間應盡可能短，以消除球桿杆身的動態模糊，但較短的曝光也會使影像變暗。\n建議的曝光時間為 500 微秒（µs）至 2000 微秒（µs），相當於 1/2000 至 1/500 快門速度。\nGain 較高的 Gain 值會「提升」影像亮度，但也會在影像中產生更多雜訊。若影像雜訊過多，請嘗試降低 Gain 值；若影像過暗，則嘗試提高 Gain 值。\n最後更新：2022-10-10 | 在官方支援網站上檢視",
    "description": "Swing Catalyst 支援 AVT 高速 GigE 機器視覺攝影機。這些攝影機透過千兆網路介面/纜線連接至電腦，並允許即時串流/捕捉影片。",
    "tags": [
      "Gige-Camera",
      "Force-Data"
    ],
    "title": "如何設定 AVT Manta/Prosilica GigE 高速攝影機",
    "uri": "/sc-support/zh-hant/cameras-video/avt-manta-configure/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "請參閱附件 PDF，了解如何將類比 CCTV 攝影機與 Swing Catalyst 搭配使用的設定步驟。\nnote: 需要使用擷取卡，可透過我們的網路商店購買。\n最後更新：2022-10-10 | 在官方支援網站上檢視",
    "description": "如何為 Swing Catalyst 設定 CCTV 攝影機",
    "tags": [],
    "title": "如何設定 CCTV 攝影機",
    "uri": "/sc-support/zh-hant/cameras-video/cctv-cameras/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何設定 IDS uEye GigE 攝影機以與 Swing Catalyst 搭配使用 如需 USB 攝影機設定，請參閱此文章：ids-ueye-usb.md\n注意：本文假設您已安裝可於此處取得的 uEye 驅動程式：https://www.swingcatalyst.com/drivers\n本文說明如何設定攝影機及網路卡的 IP 位址。\n注意：SwingCatalyst 不支援 IDS 攝影機的 IDS AOI（感興趣區域）功能。\n相容的網路介面卡與設定方式：\n請參閱：gige-network-setup.md\n注意，對性能至關重要： 若您使用 Intel 網路卡，請下載並安裝 Intel 驅動程式，這將提供設定中斷調節率的選項，而此選項在 Windows 驅動程式中可能無法使用。\n設定您的 IDS uEye GigE 攝影機 步驟： 在繼續之前，請先安裝 IDS uEye 驅動程式。找到並開啟 IDS Camera Manager 應用程式（可在以下位置找到：C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\IDS）。\nIDS Camera Manager 應用程式： 請注意應用程式底部的警告訊息。由於 IP 位址設定錯誤或與攝影機韌體相關的問題，可能會出現多種不同的警告。\n範例：\n關於 IP 位址設定的注意事項及我們的建議** **\n我們建議為每台攝影機配置一張專用網路卡或網路介面。不過，使用 IDS UI-3220 型號時，您可以透過網路交換器（請參閱「使用網路交換器」）在每個網路埠連接兩台攝影機。\n我們建議的 IP 設定： 每台攝影機及乙太網路卡（又稱 NIC）應設定不同子網路上的靜態 IP 位址（並設定子網路遮罩）。\n範例：\n網路卡 1 上的攝影機： nic ip: 10.0.1.1 cam ip: 10.0.1.10 … 10.0.1.20 subnet mask:255.255.255.0\n網路卡 2 上的攝影機： nic ip: 10.0.2.1（與 nic1 使用不同子網路） cam ip: 10.0.2.10 … 10.0.2.20（與 nic1 使用不同子網路） subnet mask: 255.255.255.0\n啟用 uEye 網路服務 注意：若您同時使用不同製造商的多種攝影機型號，啟用 uEye 網路服務可能會在使用其他製造商的攝影機時造成問題。\n點選 ETH network service（乙太網路服務）\n選取您要設定的網路介面卡（本例中為雙埠介面卡） 網路卡的圖示呈灰色，這是因為尚未正確設定。必須啟用 uEye 網路服務，攝影機才能在網路上顯示。\n請依照上述建議設定 IP 位址與子網路遮罩，然後點選 Enable uEye network service（啟用 uEye 網路服務）並點選 Apply changes（套用變更）（您現在已為其中一個雙埠介面卡設定了靜態 IP 位址！）。\n自動 IP 設定（手動 IP 設定請參閱下方說明） 若要使用自動 IP 設定，請點選 Automatic ETH configuration（自動乙太網路設定）並點選 OK。\nIDS Camera Manager 將自動為網路卡及攝影機設定 IP 位址。\n注意：使用多台攝影機時，我們建議採用手動 IP 設定。\n手動 IP 設定 返回 IDS Camera Manager，您現在應該可以看到攝影機已列出。由於您先前已為網路介面卡設定靜態 IP 位址，現在需要為攝影機設定靜態 IP 位址，以確保網路介面卡與攝影機能夠正確相互通訊。\n如圖所示，勾選 Expert Mode（專家模式）核取方塊：\n請注意上方以紅色顯示的警告。\n點選 Manual ETH configuration（手動乙太網路設定）：\n在上方截圖中，攝影機的 IP 位址設定為 10.0.1.10（我們的網路卡為 10.0.1.1）。請依截圖所示輸入並點選 OK。\n注意，設定靜態 IP 位址並非必要，但強烈建議這樣做，因為自動 IP 設定可能會導致 IP 位址衝突，例如相同的 IP 位址被其他裝置使用。我們強烈建議所有工作室安裝均採用靜態設定。\n對其他攝影機及 NIC 重複上述步驟，並依照上述建議的 IP 設定進行配置。\n設定與 IDS uEye 攝影機搭配使用的網路介面卡 假設您已為攝影機及網路卡設定靜態 IP 位址，接下來讓我們設定網路介面卡以達到最佳性能。\n在控制台\\網路和網際網路\\網路連線中，雙擊您要設定的介面卡，本例中為 Ethernet 4，Intel (PRO/1000 PT Dual port)。\n雙擊您要設定的網路介面卡。\n點選「進階」索引標籤。注意：每張網路介面卡的設定方式不同，且依驅動程式而異，請參閱您的網路卡說明文件，以了解如何變更以下所示的特定設定。\n確保已啟用 Interrupt Moderation（中斷調節），且 Interrupt Moderation Rate（中斷調節率）設定為 Extreme（極高）。\n若無 Extreme 選項，請將其設定為 High（高）。\n在某些情況下，若所有高值中斷調節率均無效，關閉中斷調節可能有所幫助，但只要您使用的是建議的網路卡，High 與 Extreme 選項應均可使用。啟用中斷調節對於降低處理大量封包時的 CPU 使用率至關重要，在使用較高解析度或高 FPS 攝影機時尤為重要。\n中斷調節率：\n啟用 Jumbo Packets（巨型封包）支援（設定為 9014 Bytes）：\n接收緩衝區：\n建議將此值設定為盡可能高。這有助於在使用多台攝影機或較高解析度的 GigE 攝影機時避免掉幀。\n使用網路交換器： 若要使用網路交換器，請確認該交換器支援 9KB Jumbo Frames（巨型幀），且網路介面卡已設定為使用 9KB Jumbo Frames。但在某些情況下，部分交換器可能無法與 9KB 幀大小良好搭配，此時建議將幀大小從 9KB 降低至較小的數值並重新測試設定。\n在 Swing Catalyst 中使用攝影機 依照上述建議設定 IP 位址及網路介面卡後，您可以啟動 Swing Catalyst，攝影機應會顯示在攝影機清單中。\n設定攝影機角度並啟用攝影機，然後點選「設定」。\n確認像素時脈為最大值（若發生掉幀，可降低此值）。\n設定快門速度與 Gain（請注意，這些數值可能因需求、攝影機類型及光線條件而有很大差異）。\nIDS 攝影機疑難排解\n若您的 IDS uEye GigE 攝影機發生掉幀或同步問題，請使用 uEye Cockpit 工具。\n點選 Live Video（即時影像）\n點選播放圖示，然後點選扳手圖示\n請注意列出的頻寬使用量。在 Camera（攝影機）索引標籤下，提高 Pixel clock（像素時脈），勾選 Frame rate (Freerun)（幀速率（自由運行））下的 Max（最大值）核取方塊，然後降低曝光時間（快門速度）。\n設定攝影機串流即時影像後，點選 檢視 -\u003e Performance Overview（性能總覽）\nHost Performance（主機性能）檢視對於排解穩定性問題及掉幀問題非常有幫助。\n使用 uEye Cockpit 中的狀態列，在串流影像時顯示掉幀或連線問題：\n如截圖所示，狀態列顯示攝影機解析度、已接收幀數、已顯示幀數、失敗幀數及重新連線嘗試次數：\n傳輸狀態（Transfer OK）與幀速率（Frame rate）也可在狀態列中查看：\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "設定 IDS uEye GigE 攝影機與 Swing Catalyst 的操作指南。如需 USB 攝影機設定，請參閱 IDS uEye USB 相關文章。",
    "tags": [
      "Troubleshooting",
      "Gige-Camera",
      "Usb-Camera"
    ],
    "title": "如何設定 IDS uEye GigE 攝影機與 Swing Catalyst 搭配使用",
    "uri": "/sc-support/zh-hant/cameras-video/ids-ueye-gige/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何設定 USB 高速相機 本支援文章將說明如何安裝和設定 USB 2.0 或 3.0 相機，以便在 Swing Catalyst 中使用。\n以下 USB 相機目前在最新版本的 Swing Catalyst 中受到支援：\nUSB 2.0：\nIDS uEye UI-1220LE-C-HQ\nIDS uEye UI-1220LE-M-HQ\nUSB 3.0：\nIDS uEye UI-3220CP-C-HQ\nIDS uEye UI-3240LE\nIDS uEye UI-3240CP Rev. 2\n注意：您無法混用 USB 3.0 和 2.0 相機，因為在大多數情況下這將導致掉幀，除非您為 USB 2.0 和 3.0 分別配備了專用主控制器。\n硬體需求與安裝 USB 3.0：\n若要使用 USB 3.0 相機，您的電腦必須具備 USB 3.0 連接埠。值得注意的是，部分電腦可能無法達到 USB 3.0 相機的最高/完整幀速率，因為這些相機目前受限於 USB 3.0 連接埠的最大可用頻寬。\n在許多情況下，需要使用製造商提供的專用 USB 3.0 控制器，才能在某些相機上獲得最佳幀速率。\n參見：建議的 USB3 元件\n若遇到此問題，建議降低「像素時鐘」。這也會同時降低最高幀速率。\nUSB 相機無需外部電源供應器，唯一需要的線材是經過機器視覺認證的 USB 3.0 纜線。無論是 USB 3 還是 USB 2，我們均不建議使用超過 5 公尺的纜線。\n距離較長時，需要使用主動式 USB 延伸線，且 USB 3.0 相機所用的延伸線必須通過機器視覺相機的相容認證。\n對於 USB 2.0 相機，任何 USB A 轉 Mini-B 的纜線在 5 公尺以內均可使用。\n軟體安裝 在使用 USB 相機之前，您必須先安裝驅動程式，所需的驅動程式可從以下網站下載：\nhttps://www.swingcatalyst.com/drivers\n下載驅動程式後（請根據您的 Windows 版本選擇 32 位元或 64 位元），請執行該檔案並依照螢幕上的指示進行操作。\n設定與使用 有關 uEye 相機的設定與使用方式，請參閱以下支援文章及隨附的安裝指南 PDF。\nids-ueye-usb.md\n最後更新：2022-10-10 | 在官方支援網站上檢視",
    "description": "本支援文章將說明如何安裝和設定 USB 2.0 或 3.0 相機，以便在 Swing Catalyst 中使用。",
    "tags": [
      "Troubleshooting",
      "Usb-Camera"
    ],
    "title": "如何設定 iDS uEye USB 高速相機",
    "uri": "/sc-support/zh-hant/cameras-video/ids-ueye-highspeed/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "如何在 Swing Catalyst 中使用 NVIDIA GPU 編碼器 本支援文章說明如何修復 NVIDIA GPU 編碼器錯誤。\n注意：並非所有 NVIDIA GPU 均受支援。\n注意：AMD ATI GPU 完全不受支援。\n首先，請確認在 SwingCatalyst 的影像與捕捉設定中已選取 NVIDIA GPU。 若您使用超過 2 台攝影機，請務必在「影像編碼」下的「進階設定」中啟用修補程式。\n進入捕捉模式並錄製一次揮桿，若揮桿已觸發但未完成，請參閱以下說明。 步驟 1：點擊開始按鈕，在 Windows 中搜尋「Graphics setting」（圖形設定）。\n步驟 2：開啟「Reduce latency and improve performance」（降低延遲並提升性能）。\n步驟 3：在「Choose an app to set preference」（選擇要設定偏好的應用程式）區段中，確認已選取桌面應用程式，然後點擊瀏覽。\n步驟 4：前往 C:\\Program Files\\Initial Force\\Swing Catalyst\\bin，選取 MotionCatalyst.exe，然後點擊新增。\n步驟 5：選取剛新增的 Motion Catalyst，點擊「options」（選項），然後選擇「High performance GPU: NVIDIA XXXX」（高性能 GPU：NVIDIA XXXX）。\n部分筆記型電腦的備用解決方案\n步驟 1：在桌面上按右鍵，選擇「NVIDIA Control Panel」（NVIDIA 控制台）。若未顯示此選項，請至以下連結下載並安裝最新的驅動程式與控制台：https://www.nvidia.com/en-us/geforce/drivers/\n步驟 2：在控制台中，選擇「Manage 3D settings」（管理 3D 設定），此選項應位於左側選單由上往下第二個位置。\n步驟 3：點擊「Preferred graphics processor」（慣用圖形處理器）下拉選單，將其從「Integrated graphics」（內建顯示晶片）變更為「High-performance NVIDIA processor」（高性能 NVIDIA 處理器）。\n步驟 4：點擊套用並關閉控制台，開啟 SwingCatalyst 並再次錄製，確認問題是否已解決。若問題仍未解決，請發送電子郵件至 support@swingcatalyst.com。\n點擊以放大\n最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "本支援文章說明如何修復 NVIDIA GPU 編碼器錯誤。",
    "tags": [
      "Troubleshooting",
      "Force-Data",
      "Backup"
    ],
    "title": "如何設定 NVIDIA GPU 編碼器",
    "uri": "/sc-support/zh-hant/hardware/nvidia-gpu-encoder/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "本文說明如何設定獨立顯示器以顯示即時回饋，例如在錄製揮桿時自動播放影片回放。\n系統需求 若要使用回饋螢幕，必須將一個以上的電腦顯示器連接至 PC。\n操作步驟 前往主選單，並導覽至設定 - 螢幕。\n點擊識別顯示器按鈕，以在每個螢幕上顯示編號。找到您希望用於顯示回饋的顯示器編號。\n點擊與該編號相符的顯示器圖示，以在該螢幕上啟用回饋功能。\n在捕捉高爾夫揮桿動作時，即時回饋將顯示於該螢幕上。\n請確認已勾選「啟用回饋螢幕」核取方塊，並選擇您希望使用的顯示器。\n若您有多台攝影機，可透過將所需的角度置於 SwingCatalyst 主視窗的左側，來變更回饋螢幕上顯示的攝影機角度。例如，下圖將在回饋螢幕上顯示球道線視角。\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "若要使用回饋螢幕，必須將一個以上的電腦顯示器連接至 PC。",
    "tags": [],
    "title": "如何設定回饋螢幕",
    "uri": "/sc-support/zh-hant/software-features/feedback-screen/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "如何備份您的 Swing Catalyst 資料庫 本支援文章說明如何手動備份您的 Swing Catalyst 資料庫\n若要設定自動備份，請參閱 automatic-backups.md\n需求：\n外接硬碟或次要硬碟，且須有足夠的可用空間來存放您的 Swing Catalyst 資料庫。 步驟 1：備份資料庫檔案 note: Swing Catalyst 資料庫檔案包含每次揮桿與課程的錄製資訊，本質上是一個大型的查找表。\n請務必備份此檔案，並確保其與實際的影片及資料檔案相對應。\nSwing Catalyst 資料庫位於 C:\\ProgramData\\Swing Catalyst\\\n在路徑列中輸入 %programdata%，然後按下 Enter 鍵以開啟 ProgramData 資料夾。 將 SwingCatalystDB.s3db 檔案複製到外接硬碟或次要硬碟。\n步驟 2：備份實際的揮桿記錄 找到您的資料庫\n前往 Swing Catalyst 設定，點選「一般」，並查看右側的「資料庫」欄位。\n記下資料庫的位置，您的錄製內容與課程即存放於此處。\n以此範例為例，資料庫內容（揮桿記錄、縮圖及資料）位於 D:\\ 磁碟機。由於空間限制，資料庫已從 C:\\ 移至此處，如圖所示：\n標準位置為 C:\\Program Data\\ Swing Catalyst\\database。\n若要將資料庫移至較大的硬碟或磁碟分割，請參閱此文章：move-database.md\n請注意，此資料夾包含課程檔案、高爾夫球手資料、舊版 Swing Catalyst 資料庫的備份等內容。建議複製此資料夾內的所有內容。\n若您的資料庫（如上方截圖所示）顯示為 C:\\ProgramData\\Swing Catalyst\\database，請複製 database 資料夾。\n在我們的範例中，我們需要複製 Swing Catalyst Databases 資料夾。\n此資料夾及 SwingCatalystDB.s3db 檔案可一併複製到外接硬碟或備份位置以供存檔。\n若之後需要更新備份，可覆蓋備份位置中的 SwingCatalystDB.s3db 檔案，並將新的高爾夫球手資料複製進來，以保持備份的最新狀態。\n最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "本支援文章說明如何手動備份您的 Swing Catalyst 資料庫",
    "tags": [
      "Backup",
      "Database"
    ],
    "title": "如何備份您的 Swing Catalyst 資料庫與揮桿記錄",
    "uri": "/sc-support/zh-hant/account-setup/backup-database/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何減輕或降低視訊影像中的 LED 燈光閃爍 LED 燈光在與高速幀速率攝影機搭配使用時，不幸地可能會在視訊影像中造成閃爍。同樣值得注意的是，不僅 LED 燈有時會閃爍，您場館內外的投影機及其他照明設備也可能對視訊影像造成視覺干擾。\n以下圖示說明攝影機的幀速率與快門速度，與閃爍 LED 燈之間的對比關係：\n​\n藍色方波的高電位期間表示 LED 燈亮起的時段。\n橘色方波的高電位期間表示攝影機正在捕捉影像的時段。\n在此範例中，您可以看到攝影機在 LED 燈的關閉期間拍攝照片，這種開與關之間的交替變化，導致攝影機在 LED 燈亮起時拍攝一張影像、燈熄滅時又拍攝另一張，進而產生閃爍。我們可以減輕此問題，請參閱以下說明。\nLED 閃爍的常見原因： 電源供應品質不佳：LED 燈通常使用直流電（DC）運作，但常透過整流器以交流電（AC）供電。從 AC 轉換為 DC 的過程並不總是完全平滑，可能導致 LED 以交流電源的頻率（依地區而定為 50 Hz 或 60 Hz）閃爍。這種脈動效應可被高速攝影機捕捉為閃爍，因為高速攝影機的幀速率高於閃爍頻率。\nPWM 調光：若 LED 燈具備調光功能，可能會使用脈衝寬度調變（PWM）進行調光。PWM 透過快速開關 LED 來調整亮度。雖然這種閃爍速度通常快到肉眼無法察覺，但高速攝影機能夠將這些快速的開關循環捕捉為閃爍。一般而言，此頻率高於 60Hz。\n若幀速率與 LED 閃爍頻率差異過大，閃爍現象可能更加明顯。\n幀速率不匹配：高速攝影機的幀速率可能未與 LED 的閃爍頻率同步。例如，若攝影機的幀速率並非 LED 閃爍頻率的整數倍，錄製的影片中閃爍將更為明顯。\n如何減輕或降低閃爍 使用高品質 LED 燈：具備更優良電源電路的高品質 LED 燈，閃爍情形通常較少。（請參閱我們的網路商店或聯繫銷售人員）\n高頻 PWM：使用採用高頻 PWM 調光方式的 LED 燈，使其運作頻率超出攝影機的捕捉能力範圍。\n調整攝影機設定：將攝影機的幀速率與 LED 閃爍頻率同步，有助於將可見閃爍降至最低。例如，若閃爍頻率為 60Hz，將攝影機幀速率設定為 120 FPS 可有助於降低閃爍效果。\n在以下範例中，我們變更攝影機的幀速率，請注意這如何改變在 LED 亮起期間拍攝照片的時間點。透過將幀速率與閃爍頻率匹配，並調整快門速度，我們可以將閃爍程度降至最低。\n最後更新：2024-07-03 | 在官方支援網站上檢視",
    "description": "LED 燈光在與高速幀速率攝影機搭配使用時，不幸地可能會在視訊影像中造成閃爍。同樣值得注意的是，不僅 LED 燈有時會閃爍，設施內外的投影機及其他照明設備也可能...",
    "tags": [],
    "title": "如何減輕 LED 燈光閃爍問題",
    "uri": "/sc-support/zh-hant/cameras-video/led-light-flicker/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "如何匯出資料以在試算表中檢視 本文介紹如何從 Swing Catalyst 或 Motion Catalyst 將原始資料匯出為 TSV 檔案。\n請注意，除學生詳細資料外，匯出的檔案均以 Tab 分隔，請確保在您的試算表檢視器中選擇 Tab 分隔格式。\n想要匯出學生資訊？請參閱此文章。\n匯出資料有幾種方式，可透過檔案總管或從堆疊進行操作，兩種方式提供相同的功能。\n從檔案總管匯出資料 在檔案總管中，可以透過右鍵點擊錄製項目，選擇「匯出」並從可用選項中進行選擇，或將錄製項目拖曳至匯出清單來匯出資料。\n選單選項\n功能\n將錄製加入匯出清單 將選取的錄製加入匯出清單，與將錄製拖曳至匯出清單的效果相同\n將工作階段加入匯出清單 將整個工作階段加入匯出清單，匯出清單中顯示的錄製數量\n取決於該工作階段本身包含多少個錄製。\n將錄製匯出為原始資料檔案 使用原始資料匯出選項匯出選取的錄製\n將工作階段匯出為原始資料檔案 使用原始資料匯出選項匯出整個工作階段\n以下為右鍵點擊後可用匯出選項的概覽：\n匯出清單：\n資料匯出選項 匯出資料時，可從幾種不同選項中進行選擇。\n本文主要著重於原始資料的匯出。\n若要匯出原始資料，請確保在匯出對話框中選擇「Raw Data」。\n原始資料選項 請注意，此功能仍在持續改善中，目前許多選項已整合至「Raw data」中。\n最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "本文介紹如何從 Swing Catalyst 或 Motion Catalyst 將原始資料匯出為 TSV 檔案。",
    "tags": [],
    "title": "如何匯出原始資料",
    "uri": "/sc-support/zh-hant/software-features/export-raw-data/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "如何在 Swing Catalyst 中匯出學生詳細資料\n本文說明如何匯出儲存在 Swing Catalyst 資料庫中的所有學生聯絡資訊。\n想要匯出原始數據值？請參閱如何匯出力資料等資料的說明：export-raw-data.md\n在 Swing Catalyst 中，開啟檔案總管，然後點擊「匯出」按鈕。\n點擊「學生聯絡資訊」\n選擇 CSV 檔案的儲存位置：\n注意：您可能需要將檔案重新命名為 students.csv，才能讓試算表檢視器正確識別該檔案。\n最後更新：2020-08-14 | 在官方支援網站上檢視",
    "description": "如何從 Swing Catalyst 匯出學生聯絡資料以進行備份或轉移",
    "tags": [
      "Force-Data",
      "Database"
    ],
    "title": "如何匯出學生聯絡資訊",
    "uri": "/sc-support/zh-hant/software-features/export-contacts/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "簡介 本支援文章說明如何搭配 Swing Catalyst 使用 FlightScope Launch Monitor。\nSwing Catalyst 在錄製新錄製時，將整合並儲存所有 FlightScope 資料。\n此整合方式直接連接至裝置，有別於透過 FlightScope 軟體連接的舊版整合。\n本文主要針對 Mevo+ 撰寫，但其他支援裝置的設定步驟相同。\n限制 Swing Catalyst 直接與 FlightScope 裝置整合。\n因此，同一時間只能有*一位（操作者）*連接至裝置。所以在搭配 Swing Catalyst 使用時，必須將 FlightScope 軟體／應用程式與裝置斷開連線。\n注意：對於某些舊型裝置，可以同時使用 FlightScope 軟體與 Swing Catalyst，請參閱我們的支援文章。\n適用對象 擁有相容 FlightScope Launch Monitor 的使用者。 系統需求 Swing Catalyst 第 10 版或更新版本。\n具備 Launch Monitor 支援功能的 Swing Catalyst 授權。\n配備 WiFi 的電腦。\n支援型號 雖然本文是針對 Mevo+ 撰寫，但整合功能支援以下裝置：\nMevo+\nX2、X2.1、X2 Elite 及 X3\nXi 及 Xi Plus\nXi TP\nXi Range\n設定 請務必確認 Launch Monitor 已根據擺放位置，以及室內或室外使用情境進行正確設定。\n若您不確定如何進行，請參閱 FlightScope 使用者手冊。\n此設定無法透過 Swing Catalyst 完成，必須透過 FlightScope 應用程式或 Windows 桌面軟體進行。\n若 Launch Monitor 設定為室外模式，但您在室內擊球，可能會導致數據不準確，因此在 Swing Catalyst 中使用 Launch Monitor 之前，務必先在 FlightScope 應用程式／軟體中完成退後距離設定與配置。\n注意：\n感測器設定（例如設定球桿類型、海拔高度及發球座距離）尚未實作。\n相機對齊尚未實作。\n這表示 Launch Monitor 的對齊與設定必須透過 FlightScope Windows 軟體或手機應用程式完成，以確保最佳資料準確性。\n連接至 Launch Monitor 透過 WiFi、乙太網路或 USB 連接 Launch Monitor（視裝置而定，注意：Mevo+ 僅支援 WiFi，不支援 USB）。\n從啟動畫面左下角點擊齒輪圖示，進入設定。\n選擇「硬體」。\n將 Launch Monitor 切換至「開啟」位置，並勾選「作為觸發器使用」。\nLaunch Monitor 應顯示於「開啟」按鈕下方的清單中。若未列出，請嘗試點擊「搜尋」。\n選擇您要使用的裝置。\n範例（FlightScope 軟體同時執行中） 若 FlightScope 軟體正在執行，您會在 Launch Monitor 清單中看到 FlightScope（軟體）作為獨立項目。請確認選擇的是裝置本身，而非軟體整合。\n疑難排解 1. 按下搜尋後，清單中沒有顯示任何裝置： 請等待幾分鐘後再次按下搜尋，Launch Monitor 可能尚未準備好連線。\n確認 Windows 已連接至 Launch Monitor 的 WiFi 網路（注意：並非所有 FlightScope 裝置都支援 WiFi）。\n對於非 Mevo+ 型號，視裝置與連線類型而定，請參閱裝置手冊並嘗試重新連接裝置。若使用 USB 或乙太網路，請嘗試拔除後重新連接裝置。\n確認連線是否可透過 FlightScope 軟體正常運作（若此方式有效，可能是防火牆相關問題，請參閱下方說明）。 確認 Swing Catalyst 是否已獲 Windows 防火牆允許： 點擊開始功能表或按鍵盤上的 Windows 鍵，然後輸入：防火牆\n開啟「防火牆與網路保護」，點擊「允許應用程式通過防火牆」。\n在清單中點擊並輸入：Motion Catalyst。\n若需要變更，請點擊「變更設定」。\n確認「私人」與「公用」均已勾選。\n2. 顯示已連線，但擊球後 Swing Catalyst 未觸發： 確認 Swing Catalyst 設定 -\u003e Launch Monitor 中的「作為觸發器使用」核取方塊已啟用。\n確認沒有其他應用程式連接至 Launch Monitor，請確保已全部斷開連線。\nLaunch Monitor 的擺放位置是否正確，且是否設定為正確模式（室內／室外）？\n嘗試在球上貼上反光貼紙（由 FlightScope 提供）。\n嘗試透過 FlightScope 應用程式或桌面軟體連接至 Launch Monitor，是否能在該處取得球／球桿資料？\n若此方式有效，請嘗試依照上方防火牆疑難排解步驟操作。\n嘗試調整延遲補償，請參閱本文末尾。 外部資源 FlightScope 支援：https://flightscope.com/support/\nFlightScope 常見問題：https://flightscope.com/faqs/main/\nMevo+ 使用者指南（請參閱下方附件）\n最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "本支援文章說明如何搭配 Swing Catalyst 使用 FlightScope Launch Monitor。",
    "tags": [
      "Troubleshooting",
      "Usb-Camera",
      "Launch-Monitor",
      "Licensing"
    ],
    "title": "如何搭配 Swing Catalyst 使用 FlightScope Mevo+",
    "uri": "/sc-support/zh-hant/hardware/flightscope-mevo/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "本支援文章說明如何透過 Swing Catalyst 網路商店管理及取消您的訂閱。\n前言 需要有效的 Swing Catalyst 訂閱。若您的訂閱是透過第三方購買，請聯繫您的銷售人員以取消訂閱。\n網路商店 您可以直接在網路商店管理訂閱，請前往：https://shop.swingcatalyst.com/account/login\n使用購買訂閱時所用的電子郵件地址與密碼登入。\n若您不記得密碼，可以點擊「忘記密碼」來重設您的密碼。\n您的帳戶 此頁面為您的帳戶概覽及訂單歷史記錄。\n訂單歷史 您購買的軟體及硬體產品記錄均列於此處：\n管理訂閱 若要管理您的訂閱，請點擊「Manage Subscriptions」（位於網頁右側）：\n若要取消訂閱，請點擊此處。\n取消訂閱後，您可以在點擊「Manage Subscriptions」後查看您的訂閱歷史記錄：\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "需要有效的 Swing Catalyst 訂閱。若您的訂閱是透過第三方購買，請聯繫您的銷售人員以取消訂閱。",
    "tags": [
      "Subscription"
    ],
    "title": "如何管理您的訂閱與訂單",
    "uri": "/sc-support/zh-hant/account-setup/manage-subscriptions/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "我想使用 Halcon，但不確定我的相機支援哪些標準 通常製造商會在文件中明確說明其支援的標準，或者文件及行銷資料中會包含 USB3 Vision、GigE Vision 或 GenICam 的標誌。\n以下是來自 Basler 的範例：https://www.baslerweb.com/en/products/cameras/area-scan-cameras/scout/sca640-120gc/\n相機製造商通常會說明其產品符合哪些標準，在以下範例中，您可以看到它支援 GenICam 和 GigE Vision，這正是我們所需要的。\n您也可以在此處找到更多資訊：\n您的相機支援 USB3 Vision 嗎？\n您的相機支援 GigE Vision 嗎？\n最後更新：2024-06-03 | 在官方支援網站上檢視",
    "description": "通常製造商會在文件中明確說明其支援的標準，或者文件及行銷資料中會包含 USB3 Vision、GigE Vision 或 GenICam 的標誌...",
    "tags": [
      "Gige-Camera",
      "Usb-Camera",
      "Fox-Camera"
    ],
    "title": "如何確認您的相機支援哪些標準以便與 Halcon 搭配使用",
    "uri": "/sc-support/zh-hant/cameras-video/halcon-camera-standards/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "適用於 Swing Catalyst 6.1 及更舊版本：\n下載並安裝 SQLite Expert Personal：\nhttp://www.sqliteexpert.com/download.html\n安裝 SQLite Expert Personal 後，開啟 Swing Catalyst 資料庫，選取任意檔案，然後選取 SwingCatalystDB。\n切換至 SQL 索引標籤，然後將以下文字貼入空白文字欄位中。\n請務必將第二行修改為正確的新資料庫位置！\n將以下內容複製並貼入 SQL 索引標籤：\nUPDATE VideoClip SET VideoFilePath = REPLACE(VideoFilePath, ‘C:\\ProgramData\\Swing Catalyst', ‘D:\\Swing Catalyst');\nUPDATE VideoClip SET ThumbnailFilePath = REPLACE(ThumbnailFilePath, ‘C:\\ProgramData\\Swing Catalyst', ‘D:\\Swing Catalyst');\nUPDATE HardwareData SET PressureDataFilePath = REPLACE(PressureDataFilePath, ‘C:\\ProgramData\\Swing Catalyst', ‘D:\\Swing Catalyst');\nUPDATE HardwareData SET ForcePlateDataFilePath = REPLACE(ForcePlateDataFilePath, ‘C:\\ProgramData\\Swing Catalyst', ‘D:\\Swing Catalyst');\n確認路徑無誤後，點擊「執行 SQL」，系統即會將所有項目更新為新的檔案路徑。\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "如何將 Swing Catalyst 6.1 及更舊版本的資料庫複製到新的安裝環境",
    "tags": [
      "Pressure-Data",
      "Force-Data",
      "Database"
    ],
    "title": "如何複製 Swing Catalyst 6.1 及更舊版本的資料庫",
    "uri": "/sc-support/zh-hant/account-setup/copy-database-legacy/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "簡介 課程影片對教練來說是一項實用的工具，可用於鑽練或作為練習工作階段的總結。課程影片基本上會錄製整個 Swing Catalyst 應用程式的畫面顯示內容，讓您可以開啟並比較任意揮桿、使用繪圖工具繪製圖形或輸入文字，並依需求播放揮桿影片。當您滿意後，結束影片即可將其以影片檔案的形式儲存於隨身碟、以電子郵件傳送，或透過 YouTube 分享。\n適用對象 希望以影片片段（可附帶語音評論）形式建立鑽練或總結的教練。 相關主題 如何調整麥克風音量 解決方案 在揮桿分析模式中，點擊頂部選單中的「錄製」按鈕。 計時器將開始計算秒數，表示整個 Swing Catalyst 應用程式正在錄製中，連滑鼠指標也會一併錄製。 錄製期間您可以執行任何操作，以下提供幾點建議：\n開啟您想要播放或相互比較的揮桿影片。\n以慢動作從頭到尾播放，提供整體概覽。\n移動時間軸以顯示高爾夫揮桿中的特定重點時刻。\n使用繪圖工具在揮桿的不同時間點新增線條或文字作為標註。\n使用課程麥克風在錄製過程中加入語音評論。\n將滑鼠指標在畫面上某處移動以強調重點，該處在影片中將會以醒目方式呈現，易於辨識。\n使用暫停按鈕，避免在設定線條、文字或開啟耗時的新揮桿影片時浪費影片時間。例如，若您想逐一講解揮桿中的多個重點，並為每個重點設置不同的線條或文字，可在切換及設定各個位置之間使用暫停功能。\n當您滿意後，點擊停止按鈕以顯示預覽對話框。\n播放預覽以確認內容正確無誤，且麥克風音訊已包含在內。\n選擇將其儲存為影片檔案至磁碟、以電子郵件分享，或分享至 YouTube。\n先前錄製的課程可在揮桿檔案總管的課程標籤下找到。 疑難排解 問題：麥克風在 Swing Catalyst 中無法正常運作。\nWindows 10 2018 年 4 月更新導致麥克風問題\n對於部分使用者而言，Windows 10 現在基於隱私設定封鎖了 Swing Catalyst 使用麥克風的權限。\n升級至 1803 版本後，少數使用者回報麥克風雖被偵測到，但無法收音。為解決此問題，Microsoft 建議您依照以下步驟在隱私設定中啟用麥克風：\n開啟設定 點擊「隱私權」 點擊「麥克風」\n開啟「允許應用程式存取您的麥克風」切換開關。\n請參閱此 Microsoft 網站以了解更多詳情。\n在某些情況下，防毒軟體可能會導致課程錄製出現問題。\n部分防毒軟體（例如 Kaspersky）會導致 Swing Catalyst 在錄製課程時當機。\n請解除安裝 Kaspersky，並改用其他防毒軟體，例如 Windows Defender 或 Carbon Black。\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "課程影片對教練來說是一項實用的工具，可用於鑽練或作為練習工作階段的總結。課程影片基本上會錄製整個...",
    "tags": [
      "Troubleshooting"
    ],
    "title": "如何錄製課程",
    "uri": "/sc-support/zh-hant/software-features/record-a-lesson/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "簡介 本支援文章說明如何設定 Windows 以改善使用筆記型電腦時 Swing Catalyst 的性能，特別是在使用電池運行時。\n適用範圍 在筆記型電腦上執行 Swing Catalyst。 電源選項 使用筆記型電腦時，Windows 在使用電池供電時通常會採用不同的電源設定檔。這可能導致 Swing Catalyst 的性能下降，主要原因是顯示卡被切換至省電模式。此外，許多筆記型電腦附有自訂電源設定檔，可能進一步降低性能以延長電池續航時間。\n若要獲得最佳性能（但電池續航時間較短），建議使用「高性能」電源設定檔，如下圖所示。\n若要兼顧良好性能與電池續航時間，建議使用「平衡」電源設定檔。這通常效果良好。\n若要在 Windows 7 中進行此設定，請開啟控制台，並依序導覽至硬體和音效 - 電源選項。\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "本支援文章說明如何設定 Windows 以改善使用筆記型電腦時 Swing Catalyst 的性能，特別是在使用電池運行時...",
    "tags": [],
    "title": "如何優化筆記型電腦的性能",
    "uri": "/sc-support/zh-hant/account-setup/optimize-laptop/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "本支援文章將說明升級或降級您的 Swing Catalyst 軟體訂閱的流程。\n注意：如果您在 2024 年 10 月 8 日之前註冊訂閱，您需要使用與目前訂閱相同的電子郵件地址建立新帳戶，才能進行任何變更。 在 swingcatalyst.com 登入，點擊右上角的「Account」，然後點擊「Manage subscription」 此處應顯示您所有的訂閱項目\n點擊您想變更的訂閱上的「Update subscription」\n在此您可以選擇不同的訂閱方案及續訂頻率 最後一步是提交從現在到原始續訂日期之間的差額付款。您將看到費用明細。 最後更新：2025-03-11 | 在官方支援網站上檢視",
    "description": "透過帳戶入口網站變更您的 Swing Catalyst 訂閱類型的逐步指南",
    "tags": [
      "Subscription"
    ],
    "title": "如何變更訂閱類型",
    "uri": "/sc-support/zh-hant/account-setup/change-subscription-type/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "如何變更現有錄製的使用者 本文說明如何變更現有錄製的使用者。\n適用版本：10.2 及以上。\n適用於：Motion Catalyst 與 Swing Catalyst。\n我使用的是哪個版本？\nNote: 同時標記 Motion Catalyst 和 Swing Catalyst 的文章，表示該文章適用於兩種軟體版本，儘管兩者在外觀上略有差異。\n若錄製內容已儲存至非預期的使用者帳號，現在可以進行變更（適用於 10.2 及更新版本）。\n變更錄製的使用者 在以下截圖中，有一筆錄製儲存於錯誤的使用者名稱「Wrong User」下，應儲存至我的名字「Stian Eklund」，截圖與步驟說明如何進行變更。\n開啟您想變更使用者的錄製。\n選取位於檔案總管圖示（左上角）下方的使用者名稱下拉選單。\n點擊「編輯」。\n選擇您希望將錄製儲存至的新使用者。\n若該使用者不存在，您需要先建立該使用者，然後重複步驟 2 至 4。\n最後更新：2023-12-15 | 在官方支援網站上檢視",
    "description": "本文說明如何變更現有錄製的使用者。",
    "tags": [],
    "title": "如何變更現有錄製的使用者",
    "uri": "/sc-support/zh-hant/software-features/change-recording-user/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "安裝 Swing Catalyst 有時可能因權限不足而失敗 問題：Swing Catalyst 安裝程式有時可能因權限不足而失敗。\n已知情況包括 Swing Catalyst 安裝程式在嘗試建立木桿目錄時失敗，如以下截圖所示：\n建議解決方案 嘗試以系統管理員身份執行安裝程式（右鍵點擊並選擇「以系統管理員身份執行」）。\n關閉所有其他執行中的程式，然後重新執行安裝程式。\n確認電腦上所有其他使用者均已登出。 停用安裝目錄資料夾的檔案共用功能，並檢查系統管理員權限。 重新啟動電腦。\n若您仍遇到問題，請嘗試依照以下文章中的步驟操作：\nhttps://knowledge.ni.com/KnowledgeArticleDetails?id=kA00Z000000P9c0SAC\n若上述方法均無效，請聯絡支援團隊，造訪我們的支援網站。\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "問題：Swing Catalyst 安裝程式有時可能因權限不足而失敗。",
    "tags": [
      "Troubleshooting"
    ],
    "title": "安裝 Swing Catalyst 時發生錯誤",
    "uri": "/sc-support/zh-hant/account-setup/install-error-fix/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "如需更詳細的安裝說明，請參閱附件中的 PDF 檔案。\n安裝 需求條件：\n軟體會自動安裝力量板與 Pressure Plate 的驅動程式（校準檔案除外）。通常不需要手動安裝。\n已安裝 Bertec CDM 驅動程式。\n已安裝 MeasureX 驅動程式。點此查看安裝詳情\n請參閱安裝指南，以準備您的場地環境。 請參閱入門指南 PDF，了解如何設定 Motion Plate 以開始使用。\n除了入門指南之外，建議您也熟悉下方的校準測試流程。\n連接感測板 將兩條 USB 線連接至電腦，然後前往 SwingCatalyst 設定 -\u003e 硬體。\n感測板應會自動偵測：\n感測板現已自動偵測完成，但尚未完成校準。若要校準感測板，需確保其已正確安裝且保持水平。\n校準 / 歸零設定 確認感測板上沒有任何物品接觸後，點擊「校準」。\n此操作將對力量板進行歸零。若校準失敗，請參閱我們的疑難排解章節。\n校準測試 校準分為兩種類型：1. 力量板的歸零校準。2. 壓力板 / 平衡板的校準檔案。本測試專門針對 Motion Plate 的力量板部分。\n確保校準品質對取得準確數據至關重要。我們建議在每次系列錄製工作階段開始前，進行校準並測試校準結果。\n在設定選單 -\u003e 硬體 -\u003e 感測板 中點擊「校準」按鈕\n點擊旁邊的「設定」按鈕，再點擊「播放」按鈕以預覽即時力資料與壓力數據\n使用球桿軸或腳跟對感測板上的小區域施壓，然後確認壓力數據（彩色熱圖）與力資料（COP 總圓圈）是否吻合\n開始一個工作階段，在感測板上無人站立的狀態下捕捉一段錄製。開啟錄製後，確認力資料讀數與零值的誤差在 10 Newton 以內。\n壓力點與壓力中心點對齊的範例：\n疑難排解 壓力數據與力資料未對齊，或校準失敗 若 COP 點與壓力點不吻合，感測板可能未保持水平，或有物體壓住感測板阻礙其自由移動。\n再次點擊「校準」按鈕，然後重複校準測試\n若仍有偏差，請在按壓對角的同時調整力量板的調平足部——先縮短再延伸，直到感覺輕微阻力且足部碰觸地面為止\n按壓四個角點，確認所有四個足部均穩固接觸地面\n確認沒有人工草皮或類似物品壓住感測板\n重複校準測試\n若在兩次調整足部並重新校準後，數據仍未對齊且讀數偏離零值，請提交新的工單：聯絡我們的支援團隊\n良好數據與不良數據的比較 以下為良好數據的範例，數據中幾乎沒有雜訊，也沒有任何跡象顯示有物體阻礙感測板的移動。\n以下為不良歸零設定的範例：\n電源供應器產生的雜訊或接地不良也可能導致類似上述的雜訊情況，詳細資訊請參閱：force-plate-troubleshooting.md\n附件 最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "軟體會自動安裝力量板與 Pressure Plate 的驅動程式（校準檔案除外）。通常不需要手動安裝...",
    "tags": [
      "Troubleshooting",
      "Usb-Camera",
      "Balance-Plate",
      "Motion-Plate"
    ],
    "title": "安裝與設定 3D動作板",
    "uri": "/sc-support/zh-hant/hardware/setup-3d-motion-plate/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 硬體",
    "content": "如需更深入的安裝資料，請參閱附件中的 PDF 文件。\n安裝 有關實體安裝資訊，請參閱安裝指南 PDF 附件。\n請參閱安裝指南 PDF，以準備您的場地進行安裝。\n請參閱快速入門指南 PDF，以設定 Motion Plate 供使用。\n需求：\n軟體會自動安裝力量板與壓力板的驅動程式（校準檔案除外），通常不需要手動安裝。\n已安裝 Bertec CDM 驅動程式。\n已安裝 MeasureX 驅動程式。點擊查看安裝詳情\nDual Motion Plate 硬體。 適用於：\nMotionCatalyst 與 SwingCatalyst。 除快速入門指南外，請一併熟悉以下的校準測試。\n連接板材 雙板設置共有 4 條纜線。在許多情況下，建議使用有電源供應的 USB 集線器來連接裝置，以免佔用電腦上所有可用的 USB 連接埠。\n連接步驟 將兩條 USB Mini B 纜線連接至兩塊平衡板。\n將兩條 USB-B（接頭比 USB Mini B 大）纜線連接至力量板。\n將 4 條纜線從板材連接至電腦。\n若板材配置未能自動偵測，請嘗試拔除並重新插上部分纜線，然後重啟軟體。\n點擊「Yes」繼續。\n軟體成功識別構成 Dual Motion Plate 的所有板材後，即可開始校準板材。\n確保沒有人站在板材上，且板材周圍沒有任何草皮或設備遮擋。\n點擊「Calibrate」\n這將對力量板進行歸零。若校準失敗，請參閱我們的故障排除章節。\n元件偵測 為了確認哪塊板在前方或右側，您需要執行此程序。\n點擊「Detect」並依照螢幕上的指示操作。\n校準測試 校準分為兩種類型：\n力量板的零點水準。\n壓力板/平衡板的校準檔案。\n此測試專門針對 Motion Plate 的力量板部分，用以驗證其是否正確安裝。\n確保良好的校準對於獲取精確數據非常重要。我們建議在每次錄製工作階段開始前進行校準並測試校準結果。\n在設定選單中點擊「Calibrate」按鈕 - 硬體 - 感測板\n點擊旁邊的「Configure」按鈕，再點擊「Play」按鈕以預覽即時力資料與壓力數據\n使用球桿杆身或腳跟對板材的其中一個角點施加壓力，然後確認壓力數據（彩色熱力圖）與力資料（整體 CoP 圓圈）是否對齊。\n若未能對齊，可能是一塊或多塊板材需要旋轉，請參閱「如何變更旋轉」。\n開始一個工作階段，在沒有人站在板材上的情況下進行錄製。開啟錄製內容，確認力量讀數在零值的 10 Newton 以內。\n壓力點與壓力中心點對齊的範例：\n我們希望壓力數據/站立數據的讀取方向為從足趾到腳跟。為此，壓力數據需要旋轉 180 度，使左腳出現在左側板材上（即 Swing Catalyst 標誌中「swing」部分所在的一側），右腳出現在右側板材上。\n故障排除 壓力與力資料未對齊，或校準失敗 若 CoP 點與壓力點不符，板材可能未保持水平，或有物體壓住板材妨礙其自由移動。\n再次點擊「Calibrate」按鈕，然後重複校準測試\n若仍有偏差，請在按壓對角角點的同時，重新調整力量板的調平腳——先縮短，再延伸至接觸地面並感受到輕微阻力的位置\n按壓各角點，確認所有四個腳墊均與地面穩固接觸\n確保沒有草皮或類似物體壓住板材\n重複校準測試\n以下是配置不正確的範例，希望這些範例能協助您理解並排除此類問題。\n壓力數據/腳印在某塊板材上消失 檢查每塊壓力板的連接，嘗試拔除並重新連接板材。\n重啟軟體。\n確認 SwingCatalyst 是否識別兩塊板材。在「硬體設定」-\u003e「Configure」-\u003e「Sensor Info」中，應顯示兩個序號，例如：1230_1231。若只列出一個序號，可能表示第二塊板材未被 SwingCatalyst 識別。\n檢查 Windows 裝置管理員，在「連接埠與 COM」下應有兩個名為「MeasureX Pressure Controller」的項目。若未看到這些項目，可能表示存在實體連接問題。\n配置不正確的範例\n壓力數據上下顛倒 可透過站在板材上並前後傾斜身體來判斷此種配置問題。\n若 CoP 的移動方向與壓力方向相反，表示力資料或壓力數據其中之一需要旋轉 180 度。\n壓力上下顛倒且力資料旋轉方向錯誤 依據上述校準測試的邏輯，此範例中存在多個問題：\n腳印（壓力數據，在 SwingCatalyst 設定中亦稱為站立數據）呈「上下顛倒」狀態。\nCoP 點（背景中「Swing Catalyst」標誌「S」旁的白點）與腳印未對齊。\nCoP 點未顯示在與腳印相同的板材上。\n要修正此問題，需先旋轉壓力/站立數據，使左腳出現在左側，再旋轉力資料直到與腳印對齊。\n對於雙板設置，務必對每塊板材分別套用校準測試邏輯。\n雙板偵測階段踩錯板材 此範例中，在「偵測元件」階段踩到了錯誤的板材。發生此情況時，您會看到壓力與力資料無法正確對齊，且 CoP 點落在腳印範圍之外，而正常情況下不應如此。\n要修正此問題，請再次點擊「detect components」，但這次踩在右側板材/後側板材上。完成後，數據應會改變，使其看起來更接近下方的截圖。\n以下是與上方相同的數據，但已正確偵測板材：\n壓力數據顯示正確但 CoP 有誤 此範例來自 Single Motion Plate，其中力資料旋轉方向偏差了 180 度。\n可從壓力數據的方向是否正確來判斷（腳跟朝向螢幕底部）。\n要修正此類問題，請參閱上方的校準測試並依照步驟操作；對於雙板設置，需對每塊板材分別執行。\n如何變更旋轉 除了實體旋轉板材外，也可以在軟體中進行設定。\n若要旋轉感測板，請前往「Settings」-\u003e「Hardware」並點擊「Configure」。\n在感測板設定中，確保已選取「Flip \u0026 Rotate Devices」分頁。\n若要旋轉壓力數據，請點擊「Rotate Stance Data」。\n若要旋轉力資料，請點擊「Rotate Force Data」。\n請參閱以下部分故障排除圖片，這些圖片展示了錯誤的配置情況。\n對於雙板設置，您應在清單中看到兩個力資料項目，請確保在軟體中對兩塊力量板均進行旋轉。\n良好數據與不良數據 以下是良好數據的範例，數據中幾乎沒有噪訊，也沒有任何跡象顯示板材的移動受到阻礙。\n若您的數據有噪訊，或圖表上的讀數非常低，\n以下是零點設定不良的範例：\n電源供應器或接地不良所產生的噪訊，也可能導致類似上述的噪訊情形。如需進一步詳情，請參閱：force-plate-troubleshooting.md\n附件 最後更新：2024-03-05 | 在官方支援網站上檢視",
    "description": "有關實體安裝資訊，請參閱安裝指南 PDF 附件。",
    "tags": [
      "Troubleshooting",
      "Usb-Camera",
      "Balance-Plate",
      "Motion-Plate"
    ],
    "title": "安裝與設定 Dual Motion Plate",
    "uri": "/sc-support/zh-hant/hardware/setup-dual-motion-plate/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 入門指南",
    "content": "簡介 本文章為 Swing Catalyst Home 的快速入門指南。\n您的產品可能與本指南中的螢幕截圖有所不同。\n系統需求 有效的 Home 訂閱 Swing Catalyst 9.7 或更新版本 (我有哪個版本?)\n電腦規格： 請注意 Swing Catalyst 只能在 Windows 10/11 上運行。\nForesight (FSX 2020/Play 建議 PC 規格) - 適用於 Foresight 客戶。\nSwing Catalyst 建議規格 快速入門 本指南分為不同的類別和步驟。\n安裝軟體和授權金鑰\n連接一台或多台攝影機\n連接 Launch Monitor\n建立使用者\n分析揮桿\n捕捉\n版面配置\n麥克風觸發器 (外部頁面)\n繪圖工具\n檔案總管\n資源與疑難排解\n安裝軟體和授權金鑰 每個新的 Swing Catalyst 授權都附帶一封電子郵件，其中包含說明。如果您找不到該電子郵件，請檢查您的垃圾郵件資料夾或搜索您的收件匣。\n按照說明下載並安裝 Swing Catalyst，安裝完成後在軟體提示時輸入授權金鑰。\n範例電子郵件：\n安裝授權金鑰時遇到問題？請參考我們的逐步說明文章。\n連接一台或多台攝影機 請參考此支援的攝影機清單。\n如果您使用 FLIR、IDS 或 AVT 攝影機，您可能需要下載並安裝適當的驅動程式。請查看我們的驅動程式部分。如果您使用 FLIR 攝影機，請參考我們的攝影機專用指南。\n注意：我們建議在執行任何攝影機相關的驅動程式安裝之前，確保 FSX 和 Swing Catalyst 未運行。驅動程式安裝完成後，您可能需要重新啟動電腦。\n從主功能表，點擊齒輪圖示即可找到設定。\n偵測到的攝影機會自動列在攝影機清單中。\n為了使用攝影機，需要指定一個角度。\n點擊已停用的圖示選擇一個角度，然後將「關閉」變更為「開啟」以啟用攝影機。\n連接 Launch Monitor 在「硬體設定」下，您可以在支援的 Launch Monitor 之間進行選擇。\n在版本 9.7 和 9.8 中，您可以從清單中選擇 Launch Monitor，將其切換為「開啟」並啟用「用作觸發器」。\n在版本 10.0 及更新版本中，只需開啟 Launch Monitor 支援並按下搜尋。SwingCatalyst 應會偵測到任何已連接且相容的 Launch Monitor。\n確保 Launch Monitor 已開啟並連接到電腦。\n我們始終建議盡可能使用有線連接，例如 USB 或乙太網而非 WiFi。\n如需更詳細的 Launch Monitor 設定說明，請參閱以下指南：\nForesight GCQuad/GCHawk\nForesight GC3 / Bushnell Launch Pro\nForesight GC2*\nFlightscope X-Series\nFullSwing (E6)\nFlightScope Mevo+\n*Foresight GC2 整合不支援與 FSX 同時連接；若要搭配 FSX 使用 GC2，必須選擇 Foresight GC2 (Sim)。\n如果您選擇 Launch Monitor 作為觸發器裝置，它會在捕捉模式中自動錄製您的揮桿。如果您沒有 Launch Monitor，也沒關係，您可以改為使用麥克風作為觸發器！\n建立使用者 按照以下步驟建立使用者並錄製揮桿。\n首次執行 Swing Catalyst 時會自動生成使用者。此使用者是根據授權詳細資訊產生的。如果您想編輯設定檔資訊，可以隨時進行。\n從主功能表中，按一下「開始」\n按一下「選擇使用者」下拉式按鈕並按一下「新增」：\nnote: 使用者會根據您的授權詳細資訊自動生成，如果您想編輯這些或新增使用者，可以分別按一下「新增」或「編輯」。\n輸入名稱並按一下「保存」\n某些家庭授權有最大使用者限制，這限制了 Swing Catalyst 中可儲存多少個使用者設定檔。\n分析揮桿 在此 Ian Poulter 的範例螢幕截圖中，我們使用兩台高速攝影機以及我們的 Motion Plate 和 Foresight GCQuad Launch Monitor 錄製了一個揮桿。\n備註：巡迴賽揮桿可輕鬆從我們的網路商店購買！ 讓我們看一下 Swing Catalyst 介面以及一些功能表和按鈕。\n分析功能表工具列\n從左到右：功能表、檔案總管、切換使用者、捕捉、捕捉選項和版面配置。\nSwing Catalyst 圖示也是功能表按鈕，是快速存取設定和結束目前工作階段的方式。\n切換使用者 捕捉 為了錄製揮桿，您需要進入捕捉模式。\n點擊「捕捉」按鈕時，您會自動從播放模式切換到捕捉模式。\n綠色的「捕捉就緒」圖示表示系統已準備好捕捉。使用 Swing Catalyst Home 時，您在開始工作階段時會自動進入此模式！\n「捕捉就緒」只是表示捕捉模式已啟用，SwingCatalyst 正在主動串流數據。只有在觸發事件發生時才會保存（例如手動觸發、Launch Monitor、麥克風）。\n捕捉選項 在不同的觸發選項（如麥克風或 Launch Monitor）之間選擇，並更改捕捉模式。\n版面配置 您可以使用「版面配置」下拉按鈕在 SwingCatalyst 中選擇不同的版面配置。\nSwingCatalyst 會記住在播放和捕捉模式中最後使用的版面配置。\n如圖標所示，版面配置在顯示的內容和顯示方式上有所不同。\n「單一錄製」版面配置的範例，包含 2 台攝影機。\n「比較」模式版面配置，包含一台攝影機：\n錄製內容分為兩個獨立的「檢視埠」，分別為「A」和「B」。如果我們仔細查看螢幕底部，之前錄製（或開啟）的錄製內容會顯示在堆疊中。\n堆疊 堆疊顯示最後的錄製，最新的錄製在最左邊。\n在此範例中，標記為橙色 A 的錄製用於顯示此錄製在「檢視埠 A」中開啟。錄製的橙色底線表示已選中。\n您可以通過點擊一次快速查看有關錄製的信息：\n也可以為錄製內容評分（1-3 星）。例如，您可以在檔案總管中按評分進行濾波\n在捕捉模式時，SwingCatalyst 會在螢幕右下角顯示通知。\n錄製進度和狀態由堆疊所在位置的進度圓圈表示。「放棄錄製」按鈕允許您隨時取消錄製。\n可以點擊指示器以查看有關正在處理的內容的更多詳細信息。\n攝影機版面配置選擇 在相同的下拉菜單「版面配置」中，您可以根據版面配置選擇要顯示的不同攝影機角度的數量。在播放模式（查看錄製的揮桿時），攝影機選擇取決於用於建立錄製內容的攝影機數量。\n在捕捉模式中，可見攝影機的數量取決於您的系統上啟用的攝影機數量，以及授權是否支持您要使用的攝影機數量。\n切換攝影機角度 如果您的錄製內容使用多台攝影機，可以通過點擊攝影機圖示來更改檢視的攝影機。\n您也可以從這裡進行一些小型攝影機調整，例如鏡像和旋轉攝影機角度。這些變更僅適用於錄製內容，如果您想比較左手使用者與右手使用者等情況時會很有幫助。\n繪圖工具 如上面的螢幕擷取畫面所示，繪圖工具位於軟體的左側。\n繪圖工具可讓您在影片影像上繪圖，既可以在已錄製的影片上繪圖，也可以在即時影片「饋送」上繪圖（在捕捉模式中）。\n線條工具提供多種不同的線條類型供您選擇，標準「線條」允許您在任何點之間建立直線。\n有三種不同的線條粗細可供選擇。\n不同的顏色可以更輕鬆地區分不同的線條。\n縮放和移動工具\n在工具列底部、繪圖工具下方，是縮放和移動工具以及「填滿影片檢視」按鈕。\n您也可以通過按住 Ctrl 鍵並同時滾動滑鼠滾輪來縮放和操作影片影像。\n檔案總管 您可以在這裡輕鬆管理您的錄製內容。檔案總管分為三個「部分」：\n左側是系統中註冊的使用者，中間是該使用者的所有錄製內容，右側是預覽部分。\n錄製內容會自動分組為工作階段並按日期排序。\n點擊一個揮桿，它將自動在「預覽」部分（右側）預覽。 您也可以通過右鍵點擊並選擇要在哪個檢視埠中開啟錄製內容，或者拖動底部的「將錄製內容拖放到此處」區域來開啟錄製內容。\n檔案總管選單的特寫檢視 濾波處理 可以根據不同的收集參數來濾波錄製內容，例如：\n運動（雖然 Swing Catalyst 僅用於高爾夫球，但可以檢視來自不同運動的錄製內容）\n球桿類型\n發球監測數據（飛行距離、旋轉速率或撞擊係數）\n評等（1-3 星評等）\n此螢幕擷取畫面顯示了一些可用的濾波選項。\n資源與疑難排解 在這裡您可以找到資源和疑難排解提示來解決最常見的問題。\n最常見的問題 使用者通常遇到的最常見問題通常與外部連接的硬體有關，無論是攝影機、Launch Monitor 還是感測板。簡單的東西（例如劣質的纜線（例如過長的纜線或不相容的 USB 延長器））可能會導致問題。因此，本指南的這一部分旨在幫助您解決問題或縮小問題原因的範圍。\n攝影機疑難排解 相關文章和疑難排解步驟：\n網路攝影機故障排除\nFLIR BlackFly S USB - 快速入門\nFLIR BlackFly S GigE - 快速入門\n攝影機未顯示在攝影機設定清單中 如果攝影機未顯示在攝影機清單中，表示攝影機未被偵測到或連線不正確。\n如果攝影機未顯示在攝影機清單中，最有可能是 Windows 未識別該攝影機，或該攝影機正被另一個應用程式使用。請嘗試中斷攝影機的連線並重新連接。\n該攝影機可能不受 Swing Catalyst 支援。\n若為 The Imaging Source 攝影機：如果您已安裝製造商的驅動程式，您可能需要將其解除安裝才能正常運作。\n乙太網路 (網路) / GigE 攝影機可能需要 IP 配置。\n未收到資料 這表示 Swing Catalyst 未接收到任何視訊影像或資料進行處理。\n造成此類錯誤的原因範例可能包括：\n電纜/連線不良：嘗試中斷攝影機的連線，並將其連接到不同的 USB 連接埠。\n設定錯誤：(特別是針對網路攝影機和 DirectShow 攝影機)。檢查曝光設定，如果停用自動功能且曝光設定非常高，幀速率會大幅下降。\n網路攝影機的一個修正方法可能是啟用「手動時間戳」(請參閱下面的影像)\n發生錯誤 如果攝影機正被另一個應用程式使用，此類錯誤很常見。特別是網路攝影機很容易被第三方軟體使用，請嘗試關閉其他程式並重新啟動 Swing Catalyst。\n丟失幀 / 接收的資料不足 丟失幀表示從攝影機傳輸到電腦的視訊幀/資料在不同程度上遺失。特別是在有多個攝影機的情況下，這不太理想，因為突然間一個攝影機會遺失揮桿的某些部分。Swing Catalyst 會發出警告，如果系統丟失的幀數過多，將無法觸發錄製。\n造成這種情況的原因可能包括：\nUSB3 攝影機連接到 USB 2.0 連接埠。\n使用設計不良的電纜或延長電纜。\n超過建議的電纜長度。\nUSB3 攝影機連接到 USB 集線器，其他裝置共享同一集線器，導致頻寬不足。\n乙太網路攝影機連接到未正確配置或不支援大幀的網路連接埠。\n攝影機使用的頻寬超過系統可用的頻寬。\n提示：\n對於 USB 攝影機，我們建議嘗試降低幀速率 (和/或裝置連結輸送量 - 適用於 FLIR 攝影機) 以減少頻寬消耗。\n降低幀速率 (和/或裝置連結輸送量)。\n如果使用多個攝影機，請嘗試拔除或停用某些攝影機，系統是否仍報告丟失幀？\n檢查電纜，攝影機是否連接到 USB 集線器或延長器？請嘗試直接將其連接到電腦。\n嘗試關閉其他 CPU 和圖形密集型軟體以釋放資源。\nLaunch Monitor 故障排除 Launch Monitor 支援文章部分 您可以在此找到 Launch Monitor 常見問題及其解決方案的清單。\n情景：裝置未連接 在上述範例情景中，Launch Monitor 在設定中已啟用，但裝置未連接/未被識別。\n建議的疑難排解步驟：\n檢查裝置是否仍然開啟。\n嘗試重新啟動裝置。\n盡可能嘗試透過 USB 或乙太網路連接，而不是 WiFi。\n嘗試使用製造商的軟體連接，以確認是否可以建立連接。\n情景：未觸發錄製。 Launch Monitor 已連接並被識別，但在捕捉模式下未觸發。\n建議的疑難排解步驟：\n確保觸發器選項已啟用。\n球和/或球桿數據是否出現在裝置上？（您能驗證它在 Swing Catalyst 外是否正常運作嗎？）\n是否有任何影格遺漏或資料不足的警告？如果攝影機遺漏影格，Swing Catalyst 將不會觸發。\n最後更新：2024-01-18 | 在官方支援網站上檢視",
    "description": "本文章為 Swing Catalyst Home 的快速入門指南。",
    "tags": [
      "Getting-Started",
      "Troubleshooting",
      "Gige-Camera",
      "Usb-Camera"
    ],
    "title": "快速入門 - Swing Catalyst Home",
    "uri": "/sc-support/zh-hant/getting-started/swing-catalyst-home/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 入門指南",
    "content": "如何查看我使用的是哪個版本的 Swing Catalyst 或 Motion Catalyst？ Swing Catalyst 9.7 及更新版本 版本號顯示在右下角\nSwing Catalyst 9.5 及更舊版本 前往主選單，選擇「設定」-\u003e「一般」。\n點選「顯示授權設定」\n版本號以紅色標示：\n透過 Windows 設定進行查看 沒有有效的支援與更新方案？ note: 如果您使用的是軟體訂閱制，此項目不適用於您，支援與更新已包含在訂閱方案中。\n立即購買支援與更新方案，取得最新軟體的使用權限：https://shop.swingcatalyst.com/products/support-update-plan\n最後更新：2023-10-24 | 在官方支援網站上檢視",
    "description": "版本號顯示在右下角",
    "tags": [
      "Subscription",
      "Licensing"
    ],
    "title": "我正在使用哪個版本的軟體？",
    "uri": "/sc-support/zh-hant/getting-started/check-version/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "本文旨在說明如何找出您的電腦所配備的顯示卡／顯示介面卡。\n如何找出我使用的顯示卡？ 在 Windows 開始功能表中，輸入「裝置管理員」。\n開啟裝置管理員，展開「顯示介面卡」即可查看可用的介面卡。\n列出的顯示介面卡即為您電腦上可用的顯示卡。\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "如何使用 Windows 裝置管理員找到您的顯示卡型號",
    "tags": [],
    "title": "我的電腦使用哪張顯示卡？",
    "uri": "/sc-support/zh-hant/account-setup/check-graphics-card/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "簡介 本支援文章說明如何使用 SwingCatalyst 內建的視訊濾波器來改善相機的視訊影像品質。改善效果可能因相機類型與型號而有所不同。\n對於某些相機類型（例如機器視覺相機），我們會擷取原始感測器數據，這意味著不會對視訊影像進行任何後製處理。此類相機類型可以獲得更顯著的改善效果。而對於網路攝影機或 DirectShow 裝置等其他相機，影像處理已在相機內部完成，因此可改善的空間相對較小。\n此外，本文章也說明鏡頭光圈如何影響景深與影像清晰度。\n系統需求 SwingCatalyst 8.0 版或更新版本。\n任何與 SwingCatalyst 相容的相機。\n專用顯示卡（GPU）。視訊濾波器基於著色器運算並利用 GPU 執行。這可能會對系統造成負擔（每台相機的使用率可能增加約 10%）。\n直接查看結果 以下截圖來自我們測試實驗室中的 Point Grey Chameleon 149 FPS USB 3.0 相機，以及來自辦公室的其他截圖。\n未啟用濾波器：\n啟用銳化、Gamma 與降噪濾波器：\n影像從幾乎無法使用提升至可正常使用。\n未啟用濾波器\n啟用銳化、Gamma 與降噪濾波器：\n認識視訊濾波器\n在了解可達成的效果之後，讓我們進一步認識 SwingCatalyst 的視訊濾波功能。\n視訊濾波器可在進階相機設定中找到，並針對每台相機個別套用。\n您可以點擊每台欲調整相機的「進階」按鈕，然後點擊「濾波器」標籤頁來存取這些濾波器。\nGamma 機器視覺相機通常不會套用任何形式的 Gamma 校正，透過 SwingCatalyst 調整相機的 Gamma 值，可以獲得相當顯著的改善效果。提高 Gamma 值只會使影像中較暗的部分變亮。影像的黑色階調會因此改變，而過高的 Gamma 值可能導致影像過曝（呈現灰白色外觀）。\n未調整 Gamma（相機預設值）：\nGamma 調整（1.6）： 未調整 Gamma：\nGamma 1.6：\n銳化 銳化濾波器可增強影像中物體的邊緣，尤其是對焦清晰的部分。銳化會使雜訊更加明顯，因此在使用銳化濾波器時，我們通常會盡量避免使用最大 Gain。不同相機感測器在最大 Gain 下所產生的雜訊量差異相當大。\n以下兩張來自測試實驗室的截圖均已啟用 Gamma 濾波器，否則難以看出差異。\n預設狀態，未啟用銳化。\n啟用銳化：\n請注意平衡板與球桿變得更加清晰，但擊球螢幕的雜訊也隨之增加。\n替代對照（未啟用銳化）：\n啟用銳化：\n請注意電源供應器上的文字變得更容易閱讀，但相對地，影像的雜訊也明顯增加。\n降噪 若視訊影像中存在大量雜訊（無論是因高 Gain 或其他因素所致），降噪濾波器都能發揮良好效果。將銳化濾波器與降噪濾波器搭配使用，可以獲得出色的結果。\n僅啟用 Gamma 與銳化：\n啟用 Gamma、銳化與降噪： 請注意草皮與螢幕周圍的雜訊已大幅減少。\n替代對照（未啟用濾波器）：\n啟用降噪（請注意電源供應器機殼的白色雜訊已減少）\n啟用銳化與降噪：\n鏡頭修正 鏡頭修正濾波器在目前狀態下相當難以使用，加上大多數客戶使用的是變焦鏡頭（可調焦距的鏡頭），我們無法建立統一適用的單一設定檔。使用此濾波器時，請務必以房間內的直線作為參考依據。\n鏡頭變形通常在鏡頭邊緣最為嚴重，且在完全廣角的情況下變形會更加明顯，如以下示例所示。\n未啟用鏡頭修正（請注意門框呈現彎曲）：\n已啟用鏡頭修正（門框較為筆直，變形已獲補償）：\n由於影像的角點部分仍可能出現變形，要獲得完全校正的影像相當困難。重要的是，須確保影像中央的物體（通常為使用者）不會產生變形。\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "本支援文章說明如何使用 SwingCatalyst 內建的視訊濾波器來改善相機的視訊影像品質。改善效果可能因相機類型與型號而有所不同...",
    "tags": [
      "Usb-Camera",
      "Balance-Plate"
    ],
    "title": "改善相機影像品質",
    "uri": "/sc-support/zh-hant/cameras-video/improving-image-quality/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 參考",
    "content": "24.1.2 版本中改進的感測板渲染效果 在 24.1.2 及以上版本中，我們強化了壓力與站立數據框的設計。這些變更是為了支援新的雙壓力板，並改善所有類型感測板的感測區域呈現方式。此次更新確保了傳感器的總面積與活躍區域均能以一致且精確的方式呈現。\n為何進行這些變更\n雙壓力板的推出使我們有必要進行一些細微調整，以改善壓力傳感器的感測區域與活躍區域的顯示方式。在此之前，壓力與站立數據框以「單一矩形」的方式呈現，這並不適合用來表示感測器之間的間隙或非活躍區域。\n這些變更已統一並標準化，適用於 Swing Catalyst 所支援的所有感測器，無論是力量板、壓力傳感器，或是兩者的組合。\n視覺呈現 在更新後的壓力與站立數據框中，您將注意到兩個主要的視覺元素：\n灰色虛線：勾勒出感測器的總面積輪廓，無論是感測板、感測墊或力量板。\n白色虛線搭配灰色填充：標示感測器的活躍區域。\n對於雙壓力板，此呈現方式特別標示出電子元件所在的較大非活躍區域，確保實際尺寸能被精確呈現。\n以下範例截圖說明了雙壓力板（窄版與寬版配置）的全新渲染效果，以及 Dual Motion Plate 和棒球擊球準備的範例。\n透過優化視覺呈現，我們希望為所有類型的感測板使用者帶來更好的使用體驗。\n窄版配置的雙壓力板。\n寬版配置的雙壓力板。\nDual Motion Plate：請注意，此情況下沒有深灰色背景，因為 Pressure Plate 疊放於力量板之上，力量板擁有活躍區域而 Pressure Plate 技術上沒有，此區域現已連同兩者之間的間隙一併呈現。\n在棒球模式中，後板在技術上包含兩個壓力傳感器及一個力量板，我們現在也會顯示壓力墊之間的小間隙。\n最後更新：2024-09-13 | 在官方支援網站上檢視",
    "description": "在 24.1.2 及以上版本中，我們強化了壓力與站立數據框的設計。這些變更是為了支援新的雙壓力板而實施的...",
    "tags": [
      "Changelog",
      "Motion-Plate",
      "Pressure-Data",
      "Force-Data"
    ],
    "title": "改進的感測板渲染效果",
    "uri": "/sc-support/zh-hant/reference/improved-sensor-rendering/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "使用 RTMPose 和 RTMDet 增強高爾夫和棒球揮桿無標記動作擷取：由上而下方法\n摘要\n本技術白皮書記錄了 RTMPose 和 RTMDet 在高爾夫和棒球揮桿的精確且高效姿態估計中的應用。這些模型利用針對即時性能優化的最先進技術，能夠詳細追蹤高爾夫和棒球揮桿期間的身體動作——這是改進運動分析性能的關鍵功能。我們強調由上而下方法的優勢，其中現成的 RTMDet 偵測器在每個幀中識別高爾夫球手和棒球選手，而 RTMPose 估計關鍵身體關節的位置。\n1. 簡介\n姿態估計已成為運動性能分析的關鍵，能夠精確追蹤運動員的動作。在高爾夫和棒球運動中，捕捉選手揮桿的生物力學數據可提供對揮桿動力學的寶貴見解，幫助專業人士和業餘愛好者改進其技術。傳統的 2D 姿態估計方法常面臨延遲和精度挑戰，特別是在即時場景中。本論文提出在 mmpose Framework 中使用 RTMPose 和 RTMDet 進行高爾夫和棒球揮桿期間詳細姿態估計的解決方案。\n2. 背景\n高爾夫和棒球揮桿的複雜性需要精確測量身體動作。現有的姿態估計方法可能無法為即時性能提供必要的精度。深度學習和電腦視覺的進展引入了 RTMPose 和 RTMDet 等模型，它們提供了改進的精度和效率。\n3. 搭配 RTMdet 和 RTMpose 的由上而下方法\n–插入圖表–\n3. RTMPose：高性能姿態估計模型\nRTMPose [1] 專為高性能、即時姿態估計而設計，經過優化以在有限硬體上高效運行。\n主要特性：\n模型架構和效率：RTMpose 使用 CSPNeXt 作為其骨幹網路 [1, 2]，在速度和精度之間取得平衡。CSPNeXt 針對密集預測任務（例如姿態估計和物體偵測）進行了優化，提供高解析度和精度，同時保持計算效率。\n關鍵點預測：採用基於 SimCC 的演算法 [1, 3]，將關鍵點的水平和垂直位置視為獨立的分類任務。這種緊湊的表示法降低了計算負載，適合在各種裝置上部署。\n4. RTMDet：偵測骨幹\nRTMDet [4] 在由上而下管線中充當 RTMPose 之前的偵測器，識別每一幀中高爾夫球手或棒球選手的位置。\n主要特性：\n模型架構和效率：RTMDet 利用經過修改的 CSPDarkNet [5] 版本，比許多 YOLO 模型更具可訓練性和精度。修改後的版本利用大核心深度卷積來平衡複雜性和速度，在 GPU 和 CPU 上都很高效。它非常適合運動性能追蹤等即時應用。\n多功能性：處理各種物體偵測任務，包括實例分割和旋轉物體偵測。確保即使在動態場景中也能精確定位選手。\n5. 在高爾夫和棒球揮桿分析中使用 RTMDet 和 RTMPose 的優勢\n5.1 在非擁擠場景中的更高精度\n在典型的高爾夫/棒球設定中，幀內只有少數個人，RTMDet 隔離高爾夫球手/棒球選手，使 RTMPose 能以高精度處理每個檢測到的人。這避免了同時處理幀內所有人的所有關鍵點的自下而上方法的複雜性。由上而下方法還可以在執行姿態估計之前包含 RTMdet 的後期處理演算法，以識別正確的人（即高爾夫球手或棒球選手）。此外，RTMPose 已在包含以下內容的擴展影像素材上進行了預訓練\n5.2 高效計算和即時性能\n使用輕量級模型（如 RTMdet 和 RTMpose）可保持低延遲，在消費級硬體上實現即時揮桿分析。這對於在教練或訓練課程中提供即時回饋特別有用。Swing Catalyst 無標記動作擷取系統是少數幾個為高爾夫球手和棒球選手提供即時動作擷取回饋的工作室系統之一。\n5.3 詳細的關鍵點分析\nRTMPose 檢測到 26 個身體關鍵點的設置 [6]，如下圖 1 所示，對於分析高爾夫和棒球揮桿運動學至關重要。Halpe26 是一個擴展設置，與具有 17 個標記的更標準的 COCO 設置相比，在腳部和頭部包含了額外的標記點。\n–插入圖表–\n6. 高爾夫和棒球揮桿無標記動作擷取的方法論\n6.1 偵測階段：RTMDet\n應用於高爾夫球手或棒球選手的視頻幀，RTMDet 生成圍繞選手的邊界框，這些邊界框被傳遞給 RTMPose。這將姿態估計集中在相關影像區域，減少計算負載。\n–插入影像–\n6.2 姿態估計階段：RTMPose\nRTMPose 估計邊界框內的關鍵點位置。高爾夫和棒球揮桿分析的關鍵關節包括腕部、肘部、肩膀、髖部和膝蓋。這些關鍵點評估揮桿階段（後揮、下揮桿和隨揮）期間的身體角度和位置。\n–插入影像–\n6.3 性能指標\nRTMPose 的一般性能使用指標（如姿態估計基準上的平均精度 (AP)，例如 MS COCO）進行衡量。以下是常用 COCO 基準上排名最靠前的模型的性能。在 MS COCO val Dataset 上，RTMPose-X 是性能最佳的模型，能夠提供即時回饋，在消費級 GPU 上達到高達 75.8% AP 和超過 ?? FPS 的幀速率，非常適合高速運動分析。\n排名 模型 解析度 大小/參數（百萬） AP 即時推理\n1 Sapiens-2B 1024x768 2000 82.2 否\n2 Sapiens-1B 1024x768 1000 82.1 否\n3 Sapiens-0.6B 1024x768 600 81.2 否\n4 Sapiens-0.3B 1024x768 300 79.6 否\n5 VitPose-H 256x192 632 79.4 否\n6 RTMPose-X 384x288 49 78.8 是\n7 VitPose-L 256x192 307 78.6 否\n8 RTMPose-L 384x288 28 78.3 是\n9 HRFormer 256x192 43 77.2 否\n10 HRNet-UDP 384x288 64 77.2 是\n11 VitPose-B 256x192 86 77.0 是\n12 RTMPose-L 256x198 28 76.7 是\n13 RTMPose-M 384x288 14 76.6 是\n14 HRNet 384x288 64 76.3 是\n15 VitPose-S 256x192 43 75.8 是\n16 RTMPose-M 256x192 14 74.9 是\n17 SimpleBaseline 256x192 60 73.5 是\n18 FastPose 256x192 79 73.3 是\n7. 在高爾夫揮桿分析中的應用\n藉由應用 RTMPose-X 和 RTMDet-M 框架：\n逐影格追蹤關節運動：提供全面的資料來分析揮桿的各個階段。\n提供即時反饋：在訓練過程中能夠立即提供對揮桿姿態和動作形式的見解。\n與理想力學進行比較：允許與理想揮桿運動學進行比較，以找出需要改進的領域。\n8. 結論\nRTMPose-X 和 RTMDet-M 的整合為即時高爾夫揮桿分析提供了強大的解決方案。具有高精度、低延遲以及跨各種硬體平台的相容性，這種由上而下方法能夠提供對揮桿力學的詳細見解。它在幫助業餘和職業高爾夫球手提升性能方面具有顯著潛力。\n9. 未來工作\n未來的發展可能涉及：\n整合機器學習演算法：提供預測性分析並建議調整方案以改進揮桿效率。\n擴展至多人場景：增強在團隊運動或群組訓練環境中的適用性。\n開發使用者友善介面：建立應用程式或工具，使沒有技術專業知識的教練和運動員也能使用此技術。\n附錄\n詳細方法論：使用 RTMPose-X 和 RTMDet-M 進行高爾夫揮桿姿態估計的由上而下方法\n概述\n此處所述的方法論概述了利用 RTMPose 進行關鍵點定位和 RTMDet 進行物體偵測的優勢，進行高爾夫和棒球揮桿即時姿態估計的由上而下方法所涉及的詳細步驟。此過程分為多個階段：偵測、關鍵點定位和後期處理，每個階段都有助於精確有效地估計高爾夫揮桿中的身體關節，以進行生物力學分析。\n–插入圖示–\n1. 偵測階段：使用 RTMDet-M 進行即時定位\n由上而下方法的第一個階段涉及在影片的每一影格中偵測高爾夫球手。在運動場景中，特別是高爾夫運動中，場景通常只包含一名球員，相比於人群場景，簡化了偵測任務。\n1.1 模型架構\nRTMDet-M 在管線中用作物體偵測器。它採用卷積神經網路 (CNN) 骨幹，特別是 CSPNeXt 骨幹，設計目的是在保持速度和精度平衡的同時最佳化即時物體偵測性能。架構的主要方面包括：\n大核深度分離卷積：在骨幹和頸部層中使用，增加感受野同時保持低計算成本。\n特徵金字塔網路 (FPN)：一種多尺度特徵萃取技術，允許在各種尺度上偵測物體，確保無論高爾夫球手距離相機多遠都能被偵測到。\n1.2 動態標籤指派\nRTMDet-M 利用動態標籤指派策略，根據分類和定位損失的組合將軟標籤指派給物體，以提高偵測精度。標籤指派由 SimOTA 演算法控制，該演算法根據與地面真實物體匹配的可能性動態選擇正樣本。這種方法確保在戶外高爾夫場景中經常遇到的不同光照和環境條件下的強健偵測。\n1.3 邊界框預測\n偵測器在每一幀中輸出包圍高爾夫球手的邊界框。這些邊界框提供空間約束，姿態估計模型將在其中運作，透過僅關注幀的相關區域來減少後續姿態估計階段的計算負載。在此背景下，RTMDet-M 在高效能硬體上以超過 300 FPS 的速度即時生成邊界框，確保能夠跟上高爾夫揮桿的快速動態。\n1.4 人物非最大抑制 (NMS)\n在多人設定中（雖然在高爾夫揮桿分析中很少見），RTMDet-M 採用姿態非最大抑制 (NMS) 演算法，消除冗餘的關鍵點偵測，確保只保留最可信的偵測結果。在擁擠場景或影片序列中可能偵測到重疊邊界框的情況下，這一點至關重要。\n1.5 訓練 Dataset 與性能\nRTMDet-M 在 Object356 Dataset 中的人物實例上進行二元分類任務的訓練。\n2. 姿態估計階段：RTMPose-X 關鍵點定位\n一旦確立了高爾夫球手的邊界框，下一階段涉及估計此區域內關鍵身體關節的精確位置。高效能姿態估計模型 RTMPose-X 被用於此目的。\n2.1 基於 SimCC 的關鍵點定位\nRTMPose-X 採用 SimCC（簡單座標分類）演算法，將關鍵點定位視為分類問題。與傳統的熱力圖方法相比，SimCC 將每個關鍵點的 x 和 y 座標分為多個箱體，並分類每個關鍵點所在的精確箱體。這種方法大幅降低計算複雜度，提高推理速度，同時為人體姿態估計任務維持高精度。\n2.2 CSPNeXt 骨幹網路\n與 RTMDet-M 類似，RTMPose-X 也使用 CSPNeXt 骨幹網路，其針對姿態估計等密集預測任務量身訂製。CSPNeXt 骨幹網路在此場景中的優勢如下：\n輕量級架構：模型架構設計用於在最小化參數數量的同時最大化吞吐量，非常適合即時應用。\n高效特徵擷取：CSPNeXt 的特徵擷取層經過最佳化以處理高解析度影像，這對於在高爾夫揮桿期間偵測快速移動身體部位（如腕部、肘部和膝蓋）的細微細節至關重要。\n2.3 關鍵點表示\nRTMPose-X 為所有相關身體部位輸出關鍵點位置，包括：\n上身關節：肩膀、肘部、腕部和頸部\n下身關節：髖部、膝蓋和踝關節\n附加關節：頭部、脊柱和其他與揮桿分析相關的關鍵點\n384x288 的輸入影像解析度確保即使是關節中的細微動作也能被精確捕捉，同時也保持系統即時運行的能力。\n2.4 RTMPose 前處理：無偏數據處理 (UDP)\n在裁剪影像進入 RTMpose 模型之前，執行無偏數據處理 (UDP) 步驟。UDP 處理 RTMpose 在訓練和測試期間的數據處理中的關鍵偏差，特別是在座標系統和關鍵點格式轉換中。在傳統人體姿態估計管線中，標準操作（如翻轉和調整大小）通常會導致輸出偏差，特別是由於像素基轉換，導致精度損失和翻轉影像的不對齊。UDP 透過建立無偏座標系統轉換來修正這些問題，在關鍵操作（裁剪、調整大小、旋轉、翻轉）中保持語義對齊。UDP 還透過將關鍵點編碼為熱力圖而不引入位置偏差，進一步透過高斯分佈感知解碼程序精化，從而引入無偏關鍵點格式轉換。這種數據處理方法系統性地改進模型性能，如在 COCO 和 CrowdPose Dataset 上的廣泛測試所示，在由上而下和由下而上模型中實現了增強的精度和降低的推理延遲 [Ref]。\n3. 後期處理和姿態精化\n一旦預測關鍵點，應用多個後期處理步驟來精化姿態估計並確保幀間穩定性。\n3.1 姿態平滑\n高爾夫揮桿涉及快速運動，這可能會在多幀中引入估計關鍵點位置的雜訊或波動。為了緩解這一問題，應用 One-Euro 濾波器以隨時間平滑關鍵點軌跡，確保消除關鍵點預測中的細微非物理波動。One-Euro 濾波器運作方式是根據動作速度動態調整濾波器的頻寬，這非常適合高爾夫揮桿等場景，其中動作在不同階段（後揮、下揮桿和隨揮）的速度差異很大。\n3.2 跳幀機制\n為進一步最佳化，實施 跳幀機制，其中偵測僅在關鍵幀上執行，姿態估計針對中間幀進行插值。在幀間動作有限的場景中（例如高爾夫揮桿的慢動作分析），這大幅減少計算負載而不犧牲精度。\n4. 時間追蹤和序列一致性\n鑑於高爾夫揮桿本質上是序列性的，在姿態估計中維持時間一致性至關重要。RTMPose-X 透過時間追蹤技術解決這個問題，確保關鍵點預測在連續幀間保持一致。這涉及隨時間追蹤關鍵點位置，並確保其軌跡遵循基於生物力學約束的現實動作模式。\n4.1 關鍵點速度和加速度分析\n除了追蹤關鍵點位置外，RTMPose-X 還估計每個關鍵點的速度和加速度。此資訊對於分析高爾夫揮桿的動態至關重要，提供對關鍵性能指標的見解，例如：\n揮桿速度：根據下揮桿期間腕部速度計算。\n髖部旋轉：透過髖關節的旋轉速度分析。\n球桿路徑和頭部速度：從腕部和肘部軌跡間接推斷。\n這些指標可與專業基準進行比較，以提供關於球手揮桿力學的反饋。\n5. 推理和即時性能\n整個由上而下管線經過最佳化以提供即時性能，在現代 GPU 上可以以超過 90 FPS 進行姿態估計。使用高效模型架構 (CSPNeXt) 和快速推理技術 (SimCC) 確保系統能夠處理高幀速率影片輸入，使其適合在訓練課程中提供即時反饋。\n6. 評估和驗證\nRTMPose-X 和 RTMDet-M 模型在 COCO 和 MPII 等標準 Dataset 上進行評估，在 COCO Dataset 的身體關鍵點上顯示出強大性能，平均精度 (AP) 為 75.8%。這些結果根據高爾夫揮桿 Dataset 中的地面真值標註進行驗證，確保模型在捕捉動態運動動作中的穩健性。\n6.1 性能指標\n均方誤差 (MSE)：用於量化關鍵點預測相對於地面真實標註的準確度。\n平均精度 (AP)：評估姿態估計模型的整體性能。\n幀處理時間：基準測試以確保系統滿足即時需求（每幀 \u003c10 毫秒）。\n7. 結論\n使用 RTMPose-X 和 RTMDet-M 的由上而下方法為運動分析（特別是高爾夫揮桿分析）中的即時姿態估計提供了高效且準確的方法。憑藉強大的關鍵點偵測、時間追蹤和即時推理，此方法論提供了對高爾夫揮桿動力學的詳細生物力學見解，有助於改善性能和預防傷害。\n參考資料\n[1] RTMpose https://arxiv.org/pdf/2303.07399\n[2] CSPNeXt https://www.sciencedirect.com/science/article/pii/S0952197624000447\n[3] SIMCC https://arxiv.org/abs/2107.03332\n[4] RTMdet https://arxiv.org/pdf/2212.07784\n[5] CSPDarkNet\n[6] Halpe26\n[] AI 挑戰 Dataset：\n[] MS Coco Dataset：\n[7] Crowdpose Dataset：https://arxiv.org/pdf/1812.00324\n[] MPII Dataset：\n[] sub-JHMBD Dataset：\n[] Halpe Dataset：\n[] PoseTrack18 Dataset：\nObject365 資料庫：https://openaccess.thecvf.com/content_ICCV_2019/papers/Shao_Objects365_A_Large-Scale_High-Quality_Dataset_for_Object_Detection_ICCV_2019_paper.pdf\n最後更新：2025-03-05 | 在官方支援網站檢視",
    "description": "RTMPose 和 RTMDet 在高爾夫和棒球揮桿分析中無標記動作擷取的技術概述",
    "tags": [
      "Troubleshooting",
      "Database",
      "Motion-Capture"
    ],
    "title": "使用 RTMPose 和 RTMDet 增強高爾夫和棒球揮桿無標記動作擷取：由上而下方法",
    "uri": "/sc-support/zh-hant/software-features/markerless-motion-capture/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "如何將應用程式中錄製的影片分享至雲端及其他分享方式 首先，點選位於應用程式底部的「檔案總管」按鈕。在此您應可看到本裝置上錄製的所有影片，以及已下載的影片。 選取您想分享的揮桿影片，然後按下「上傳」按鈕。上傳完成後，再按下「分享」按鈕。 此處提供數種分享影片的方式，包括傳送給其他已註冊的 Swing Catalyst Online 使用者。 只需輸入收件者的名字或姓氏進行搜尋，只要對方已註冊免費線上帳號，您即可在清單中找到他們。若找不到，請與收件者確認是否已完成註冊，或是否使用了其他名稱。 最後，您可以在傳送前選擇是否加入任何留言。影片送達後，收件者將透過電子郵件及應用程式通知收到提醒。 最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "如何從 Swing Catalyst iOS 應用程式將錄製的揮桿影片分享及上傳至雲端",
    "tags": [
      "Online",
      "App"
    ],
    "title": "使用 Swing Catalyst iOS 應用程式分享錄製的影片",
    "uri": "/sc-support/zh-hant/software-features/ios-app-sharing/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "本支援文章說明如何搭配 Swing Catalyst 設定及配置 Ximea 攝影機。\nnote: 若要在 Swing Catalyst 中使用 Ximea 攝影機，您需要一個 Halcon USB 加密狗及授權。請聯繫 contact@swingcatalyst.com 購買授權。\nHalcon 安裝與配置說明請參閱：\nhalcon-setup.md\n韌體變更需求\n您的 Ximea 攝影機可能需要進行韌體升級。此操作可透過 xiCOP 完成，xiCOP 已隨 Ximea API 一同提供。\n請確認狀態，確保您擁有可用的 USB 3 主機控制器。\n您可透過 xiCOP 工具將攝影機切換至 USB3 Vision，點擊「Switch Camera to USB3 Vision」即可變更裝置的韌體。\n安裝通用 USB3 驅動程式\n大多數 USB3 攝影機製造商的安裝程式都會附帶自家的驅動程式。若要在 Halcon 中使用符合 USB3 Vision 規範的攝影機，必須將驅動程式從 Ximea 的驅動程式更換為 WinUSB。\n此操作需使用名為 Zadig 的工具（已隨 Swing Catalyst 通用攝影機支援壓縮檔一同提供）。開啟 Zadig，在「Options」下選取「List All Devices」並取消勾選「Ignore Hubs or Composite Parents」。找到攝影機後，點擊「Replace Driver」。\n您需要在複合父裝置（composite parent）上更換驅動程式。視攝影機型號不同，其名稱可能有所差異。\n不同的攝影機型號，相同的操作步驟。\n現在攝影機應可在 Swing Catalyst 中顯示。\n透過 Halcon 配置 Ximea USB 3 攝影機\n在 Swing Catalyst 中，前往「Settings」頁籤，然後進入「Cameras」，在清單中找到您的 Ximea 攝影機，並點擊「Advanced」。\n前往「Configuration」頁籤。\n勾選「num_buffers」核取方塊，並將值設為 200。\n設定 Ximea USB3 Vision 攝影機\n讓我們來看看如何設定曝光、快門速度與幀速率。\n點擊「Settings」頁籤，展開「AcquisitionControl」頁籤，然後輸入最大（或較低的）幀速率。接著可將「Acquisition Timing Mode」設定為「Frame rate」模式或「FreeRun」模式。「Frame rate」模式可讓您自訂幀速率，而「FreeRun」模式則會以可能達到的最高幀速率運行。\nnote: 幀速率可能受曝光值限制。\n設定曝光值\n對於靜態環境（例如室內攝影棚），通常最好使用手動曝光。全自動曝光可能導致幀速率改變，並造成影像不穩定。在此情況下，我們不使用自動曝光，以便自行控制。一般建議曝光時間低於 2000（2ms）。\n設定 Gain 值\n與曝光類似，在靜態或室內照明條件下，將 Gain 設為手動最為合適。Gain 越高，影像顆粒感越強，且影片編碼所需的時間也會比低 Gain 時更長。\n變更影像尺寸\n在某些情況下，您可能希望縮小影像範圍，以聚焦於影像的特定區域，例如在擊球時詳細觀察球桿與球的位置。\n此操作可透過感興趣區域（即 AOI，也稱為 ROI、Region of Interest）來完成。使用此功能縮小整體影像尺寸，同時也可提升幀速率。\n最後更新：2022-10-10 | 在官方支援網站上檢視",
    "description": "如何使用 Swing Catalyst 設定 Ximea USB3 Vision 攝影機",
    "tags": [
      "Usb-Camera",
      "Licensing"
    ],
    "title": "使用 Swing Catalyst 設定 Ximea USB3 Vision 攝影機",
    "uri": "/sc-support/zh-hant/cameras-video/ximea-usb3-setup/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 參考",
    "content": "您可以在此處找到 Swing Catalyst 使用者指南文章\n最後更新：2023-10-20 | 在官方支援網站上檢視",
    "description": "Swing Catalyst 軟體與線上平台的完整使用者指南",
    "tags": [],
    "title": "使用者指南 Swing Catalyst 軟體與線上平台",
    "uri": "/sc-support/zh-hant/reference/user-guide-online/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "簡介 本文旨在說明 Swing Catalyst 24.1 及更新版本中，Pressure 與站姿資料框的新設定。設定項目包括：\n動態站距寬度：適用於所有感測板\n壓力板位置：適用於雙壓力板\n動態站距寬度 動態站距寬度是一項全新功能，可讓您即時測量站距寬度，或針對揮桿過程中的特定階段進行測量。這對於了解站姿在揮桿各個階段（從擊球準備到擊球）的動態變化特別有幫助。\n主要優點\n即時回饋：即時獲取站距寬度在揮桿過程中變化的反饋。\n改善分析：比較不同揮桿之間的動態站距寬度，以識別一致性或差異性。\n自訂功能：根據設定的書籤，將站距寬度鎖定至揮桿中的特定階段。\n如何使用動態站距寬度\n存取功能：前往分析工具區段，選擇 1)「鎖定至第一階段」、2)「鎖定至目前階段」或 3)「未鎖定」。\n比較分析：使用資料跨多次揮桿進行比較，有助於識別規律或需要改進的地方。\n可設定的壓力板距離 「Pressure 與站姿」資料框中的「壓力板位置」功能，可讓使用者精確設定雙壓力板之間的距離。這能確保在揮桿分析過程中，站距寬度被正確捕捉並反映出來，從而獲得更可靠的數據與洞察。正確設定壓力板之間的距離，對於獲取準確的站距寬度測量值至關重要。\n主要優點 精確的站距寬度：透過調整壓力板之間的距離，確保站距寬度被正確記錄。\n可自訂設定：可根據壓力板在保護墊上的擺放位置進行調整，確保靈活性與準確性。\n使用者友善：設定簡便，提供多種壓力板配置的簡易選項。\n如何使用壓力板位置 根據壓力板擺放位置進行設定：\n窄距設定：若壓力板緊靠在一起，請選擇「窄距」選項。此設定適合壓力板相鄰的較窄站姿。\n寬距設定：若壓力板位於保護墊的外側邊緣，請選擇「寬距」選項。此設定適合壓力板間距較大的較寬站姿。\n自訂距離設定：\n若壓力板之間的距離不符合預設的「窄距」或「寬距」設定，您需要手動測量其間距。\n測量兩塊壓力板內側邊緣之間的最短距離。請根據您的偏好，以公分（cm）或英寸（in）將此距離輸入至軟體中。\n在提供的欄位中輸入此數值，以根據壓力板的實際擺放位置設定正確的站距寬度。\n確保準確性：請務必再次確認所輸入的距離與壓力板的實際設置相符。正確的輸入對於精確的站距寬度測量至關重要。\n最後更新：2024-09-05 | 在官方支援網站上檢視",
    "description": "本文旨在說明 Swing Catalyst 24.1 及更新版本中，Pressure 與站姿資料框的新設定。設定項目包括：",
    "tags": [
      "Pressure-Data"
    ],
    "title": "使用新的 Pressure 與站姿設定",
    "uri": "/sc-support/zh-hant/software-features/pressure-stance-settings/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "簡介 本文旨在介紹 Swing Catalyst（9.7 及更新版本）中新圖表庫所包含的新功能\n功能包括： 使用滑鼠／鍵盤對圖表進行縮放與平移。\n支援在 Dual Motion Plate / 雙力量板設置中顯示每塊板的個別數據。\n大幅提升渲染性能。\n詳細說明：\nCTRL + 滑鼠滾輪可在滑鼠指標所在位置放大／縮小圖表。\nCTRL SHIFT + 滑鼠滾輪進行平移。\n雙擊滑鼠重置縮放級別。\n點擊並拖曳進行縮放。\n讓我們來看看這些功能吧！\n縮放功能 點擊並拖曳 點擊並拖曳以選取您希望更仔細查看的區段。 tip: 雙擊滑鼠可重置縮放級別。\nCtrl 滾輪縮放 按住 CTRL 同時滾動滑鼠，可對數據進行放大／縮小。\n按住 Shift 同時滾動滑鼠，可沿 X軸 進行縮放。\ntip: 若要重置，請雙擊滑鼠。\n沿 X軸 縮放（Ctrl Shift 滾輪）：\n平移 Ctrl Shift 滾輪進行平移 查看個別板數據 note: 此為 Dual Motion Plate / 雙力量板專屬功能 使用雙力量板時，可透過點擊齒輪圖示左側的板指示按鈕，單獨查看每塊板的數據。醒目顯示的板表示目前正在顯示的板。\n在此範例中，我們正在查看合併數據（最上方的圖表），以及每塊板的個別數據（左腳與右腳）：\n圖表檢視選項 點擊齒輪圖示可提供數據的顯示選項。例如，可選擇以百分比或 Newton 顯示數據（若在一般設定中選擇英制，則顯示為磅力英尺：lbf⋅ft）。\n性能提升 新圖表庫可利用顯示卡進行硬體加速，這意味著使用者體驗將顯著更流暢，且不會造成顯著的額外負擔（就 CPU 和記憶體使用量而言）。\n最後更新：2024-02-16 | 在官方支援網站上檢視",
    "description": "本文旨在介紹 Swing Catalyst（9.7 及更新版本）中新圖表庫所包含的新功能",
    "tags": [
      "Motion-Plate",
      "Force-Data"
    ],
    "title": "使用圖表庫",
    "uri": "/sc-support/zh-hant/software-features/graph-library/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 帳戶與擊球準備",
    "content": "本文說明如何透過 PayPal 取消有效的軟體訂閱\n首先，登入負責訂閱付款的 PayPal 帳戶。\n找到來自「Initial Force AS」的最近一筆定期付款，並點擊展開。\n點擊「Manage Initial Force AS payments」以進入此畫面。 直接點擊取消，並在系統提示時確認您希望取消訂閱。 您的訂閱及軟體將在當月帳單週期結束前持續正常運作。\n感謝您選擇 Swing Catalyst！\n最後更新：2023-11-21 | 在官方支援網站上檢視",
    "description": "如何透過 PayPal 取消您的 Swing Catalyst 軟體訂閱",
    "tags": [
      "Force-Data",
      "Subscription"
    ],
    "title": "取消軟體訂閱（PayPal）",
    "uri": "/sc-support/zh-hant/account-setup/cancel-subscription-paypal/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "適用於 USB 3.0 高速攝影機的建議元件 我們強烈建議桌上型電腦系統使用 USB 3.0 PCI Express 卡。\n大多數內建 USB 3.0 控制器無法滿足高頻寬／高解析度 USB 攝影機的需求。因此，這將導致掉幀及其他不穩定狀況。基於此原因，我們不建議在筆記型電腦上使用超過 1 台攝影機。\n內建 USB 3.0 控制器雖可運作，但其性能因晶片組、攝影機頻寬需求以及所使用的攝影機總數而有極大差異。\n我們建議的元件與各攝影機之間的實際性能可能有所不同。\n這意味著，某款 Point Grey 攝影機在特定晶片組上的性能可能優於 Ximea 的攝影機，反之亦然。\n因此，我們建議您直接與我們諮詢，或遵循攝影機製造商對 USB 3.0 元件的建議。\n建議的主控制器與內建晶片組 外部 USB 3.0 控制器\nRenesas uPD720202\nRenesas uPD70200A\nFresco FL1009\nFresco FL11100\nFresco FL1100EX\nLSI FW643\n內部晶片組（筆記型電腦／主機板）：\nIntel 7 系列（Ivy Bridge）、C216（HM76）（最高 451 MB/s）\nIntel 8 系列（Haswell）\nIntel 9 系列（Broadwell）\nIntel 100 系列（Skylake）\nIntel Z87（Intel 8 系列 / C220）Express 晶片組（最高 471 MB/s）\nIntel Q77 Express 晶片組\n請參閱：https://www.flir.com/support-center/iis/machine-vision/application-note/recommended-usb-3.1-system-components/ 以取得使用這些晶片組的主機板與筆記型電腦的詳細資訊。\n請注意，實際性能可能差異甚大，且我們一般不建議將 USB 3.0 HD 攝影機與筆記型電腦搭配使用。\nUSB 3 的最高速度為 500MB/s，但實際上限遠低於此數值。在許多情況下，實際性能約為一半，有些情況甚至更差。這意味著並非所有晶片組都能以最高幀數和解析度處理多台攝影機。\n提示：使用 AOI/ROI（Region of Interest）可有助於降低整體頻寬使用量。\n對於多攝影機設定，例如雙攝影機設定，重要的是每台攝影機使用約一半的最大頻寬，才能同時使用兩台攝影機。\n警告 已發現 AMD 300 系列晶片組（AMD Ryzen 1700 / 2700 系列）與 USB 1.1 裝置之間存在一些問題。具體而言是與平衡板搭配使用時，每秒只能獲得 75 個取樣，而非約 145 個取樣。我們建議使用 USB 2.0 集線器，以讓平衡板以完整取樣率進行串流。\n就 AMD 300 系列晶片組與 USB 3.0 裝置搭配使用而言，目前尚無已知問題。\n建議的 USB 3.0 線纜： 雖然 USB 3.0 標準並未規定最大線纜長度，但我們不建議使用超過 3 公尺的線纜。\n部分 5 公尺線纜可正常運作，而其他線纜則可能因製造商和攝影機不同而無法使用。我們建議使用 3 公尺線纜搭配符合 USB 3 規格的主動式 USB 延長器或中繼器。\n建議的線纜類型： 攝影機製造商建議的 USB 3.0（A 轉 Micro B 附鎖定螺絲）線纜。 黑色 FLIR 3 公尺及 5 公尺 USB 3 線纜是不錯的替代選擇，請聯繫銷售人員以取得更多資訊。\n替代方案： https://www.newnex.com/usb-3-locking-cables.php\nUS2-AMCBI1-3M（3 公尺型號）\nUS226AMCBI1-5M（5 公尺型號）\n線纜長度超過 3 公尺時： 這些線纜必須專為機器視覺設計，且須經製造商認證符合 USB3 Vision／機器視覺規範，一般的 USB 延長器無法在此使用情境下正常運作。\n當需要超過 5 公尺的線纜長度時，最佳解決方案是使用光纖延長器。\n主動式線纜透過放大訊號來解決訊號衰減問題，在某些情況下可以運作，但我們建議盡量使用最短的線纜。更好的解決方案是使用光纖延長器，雖然通常費用較高，但這是在較長距離上可靠延伸 USB3 訊號的唯一方式。\n主動式線纜：\nNewnex 的主動式 USB 3.0 中繼器（或中繼線纜）： http://newnex.com/usb3_active_extension.php\nhttps://www.newnex.com/usb-3-active-cable-a-to-micro-b.php 中繼器與延長器解決方案：\nNewnex 和 Icron 提供的替代方案，兩者皆為提供符合機器視覺規範線纜的製造商：\nhttps://www.newnex.com/firenex-ulink-ds-usb-3-active-repeater.php\nhttps://www.icron.com/products/icron-brand/usb-extenders/cat5/usb-3-0-spectra-3001-15/\n對於較長距離的線纜佈線，光纖中繼器確實是在較長距離上延伸 USB3 高頻率高頻寬訊號的唯一方式：\nhttps://www.newnex.com/usb-3-extenders.php\nhttps://www.icron.com/products/icron-brand/usb-extenders/ 最後更新：2021-08-05 | 在官方支援網站上檢視",
    "description": "我們強烈建議桌上型電腦系統使用 USB 3.0 PCI Express 卡。",
    "tags": [
      "Troubleshooting",
      "Usb-Camera",
      "Flir",
      "Balance-Plate"
    ],
    "title": "建議使用的 USB 3.0 元件",
    "uri": "/sc-support/zh-hant/cameras-video/recommended-usb3-components/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 入門指南",
    "content": "Swing Catalyst 的電腦需求 重要提示： Swing Catalyst 與 Mac OS（Arm 架構）或 Windows 11 Arm 不相容。\n快速摘要 為確保影片擷取與播放順暢，您的電腦應符合以下基本需求：\n近期款式的電競筆記型電腦或高效能桌上型電腦\n32 GB 記憶體（RAM）\n現代顯示卡（NVIDIA RTX 3060 6GB 或更佳）\n近期款式具備 8 核心或以上的 Intel 或 AMD 處理器\n我們強烈建議使用最新系列的 NVIDIA GPU，以獲得最快的編碼速度及 MoCap 處理效能。目前最新系列為 RTX 5060、5070、5080、5090。\n筆記型電腦需求 若您使用筆記型電腦，我們建議選擇具備以下規格的電競筆記型電腦：\n記憶體：32 GB RAM\n處理器：近期款式的 Intel i5、i7 或 i9（第 9 代或更新），至少 8 核心\n顯示卡：NVIDIA RTX 3060（或更新），至少 6GB 獨立顯示記憶體\n相機連接指引 僅使用隨相機附贈的原廠高品質 USB 線，或使用其他機器視覺認證線材\n將相機直接連接至電腦（避免使用 USB 集線器或延長線）\n最多可同時連接兩台 USB 相機\n若使用乙太網路（GigE）相機，請確保有空閒的 PCI Express 插槽，可依相機數量安裝專用網路卡。\n詳細硬體建議 建議處理器 Intel 選項（由新至舊） 第 14 代（最新）\nIntel Core i9-14900/14900K（最佳性能）\nIntel Core i7-14700KF（優異性能）\nIntel Core i5-14400F（良好性能）\n第 13 代\nIntel Core i9-13900K/KF\nIntel Core i7-13700K/KF\nIntel Core i5-13600K/KF\n第 12 代\nIntel Core i9-12900K\nIntel Core i7-12700K\nIntel Core i5-12600K\nAMD 選項 AMD Ryzen 9 9950X3D（16 核心，最佳性能）\nAMD Ryzen 7 9800X3D（8 核心，優異性能）\nAMD Ryzen 9 7900X（12 核心，最佳性能）\nAMD Ryzen 7 7700X（8 核心，良好性能）\nAMD Ryzen 9 5900XT（16 核心，上一代，性價比佳）\n對於 AMD CPU，我們強烈建議額外購買 USB 3 控制卡，以獲得最佳相容性。\n技術說明： 您的處理器應能達到 3.8GHz 或更高的速度，以獲得最佳性能。本軟體需要支援 AVX 及 AVX2 指令集的處理器（大多數現代處理器均支援）。\n建議顯示卡 我們建議至少具備 6GB 的 GPU 獨立顯示記憶體（VRAM），越多越好。\n頂級（卓越性能） RTX 5090（最佳選擇）\nRTX 4090\nRTX 3090\nRTX 4080\n高階（優異性能） RTX 5080\nRTX 5070\nRTX 4070\nRTX 3080\n中階（良好性能） RTX 5060\nRTX 3070\nRTX 4060\n入門級（建議最低規格） RTX 3060 注意： 以上所列顯示卡均符合本軟體的最低需求。較高階的顯示卡將提供更佳的性能，尤其在使用多台相機或高解析度影片時效果更為顯著。\n需要協助？ 請參閱以下實用指南：\n如何查看您的電腦規格\n如何識別您的顯示卡\n最後更新：2025-12-17 | 在官方支援網站上檢視",
    "description": "重要提示：Swing Catalyst 與 Mac OS（Arm 架構）或 Windows 11 Arm 不相容。",
    "tags": [
      "Gige-Camera",
      "Usb-Camera"
    ],
    "title": "建議的電腦規格",
    "uri": "/sc-support/zh-hant/getting-started/system-requirements/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "原始資料匯出快速指南 本指南將協助您了解原始資料匯出的主要組成部分，匯出格式為 TSV（Tab 分隔值）檔案。\n原始資料匯出包含哪些內容？ 來自外部感測器（如 Force Plates 及／或 Pressure Plate）的原始資料檔案，分別儲存於各自的檔案中。\n書籤資訊，包含每個書籤的時間位置。\nCOP速度\nCOP分佈\n合成力資料（適用於多板設置）。\n影片檔案（每個攝影機角度）。\n您的資料檔案包含數個欄位，各自代表不同的測量值：\nFx、Fy、Fz：這些是沿 X軸、Y軸 和 Z軸 的力量測量值。\nMx、My、Mz：這些是繞 X軸、Y軸 和 Z軸 的力矩（扭矩）測量值。\nCoPx、CoPy：X 和 Y 方向上的壓力中心。\n力資料 頻道／類型 說明\n**Time ** 表示資料收集的時間點\nFx 向左或向右施加的力。\nFy 向前或向後施加的力。\nFz 向上或向下施加的力（垂直力）。\nMx 繞 X軸 的扭矩（向左或向右扭轉）。\nMy 繞 Y軸 的扭矩（向前或向後傾斜）。\nMz 繞 Z軸 的扭矩（原地旋轉）。\nCoPx 力在板上從左至右的施力位置。\nCoPy 力在板上從前至後的施力位置。\n壓力數據 類型 說明 範例資料\nTime 表示資料收集的時間點 00:00:00.0243827\nRows 列數 32\nColumns 欄數 64\nUnit 所使用的單位類型 PoundForcePerSquareInch\nScale 比例值 100\nRow 包含資料的列 14\nRowValues 對應列的數值 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,189,715,434,310,350,386,479,115,99,238,641,840,759,285,68,0,0,0,0,0,0,0,0,0,0,0,0,0\nCOP速度 時間 X軸速度（m/s）\n00:00:00.0001328 -0.6511174631650407\n00:00:00.0011328 -0.6511174631650407\nCOP分佈 時間 左 右 腳跟 足趾\n00:00:00.0001328 0.4906523614545872 0.5093476385454128 0 1\n00:00:00.0011328 0.4904213261855285 0.5095786738144714 0 1\n最後更新：2024-11-05 | 在官方支援網站上檢視",
    "description": "本指南將協助您了解原始資料匯出的主要組成部分，匯出格式為 TSV（Tab 分隔值）檔案。",
    "tags": [
      "Pressure-Data",
      "Force-Data"
    ],
    "title": "原始資料匯出包含哪些內容",
    "uri": "/sc-support/zh-hant/software-features/raw-data-export-guide/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 入門指南",
    "content": "最常見問題解答 這是最常見問題的總覽。\n請參閱我們的說明中心以取得更多支援文章與指南，若需要聯繫我們，請提交支援請求。\n目錄 軟體授權\n我目前執行的是哪個版本的軟體？\n平衡板\n如何改善相機設定（亮度與球桿軸清晰度）\nLaunch Monitor 整合\n遠端支援\n匯入與匯出影片\n購買更新與支援\n如何找到我的軟體授權名稱？ 開啟 Swing Catalyst 並前往「General」設定。\n點擊「Show license configuration」\n在這裡您將看到「Owned by ______」，以及適用於您授權的任何到期日期。\n如何為我的平衡板安裝校準檔案？ 開啟 SwingCatalyst 軟體並前往設定。\n前往「Hardware」區段並點擊「Configure」按鈕。\n前往左上角第 2 個標籤，名稱為「Stance Sensor」。\n點擊「browse and install」並導覽至您儲存校準檔案的位置，預設通常位於「Download」區段。\n如何找到我的平衡板序號？ 開啟 SwingCatalyst 軟體並前往設定。\n前往「Hardware」區段並點擊「Configure」按鈕。\n前往左上角第 3 個標籤，名稱為「Sensor Info」。\n在這裡您將看到平衡板的 4 位數序號。\n如何改善相機設定（亮度與球桿軸清晰度） 步驟 1：開啟 Swing Catalyst 並前往相機設定\n步驟 2：點擊「Advanced」並前往「Camera」標籤。\n*如果您的球桿軸有嚴重的模糊，這是因為曝光值過高。\n降低「Exposure」= 減少球桿軸模糊，但影像較暗。（低曝光值也是達到最高 FPS 的必要條件）。\n您可以提高「Gain」以增加亮度。但這會使影像略微出現顆粒感。\n確保實體鏡頭上的光圈完全開啟，這將讓您有更多空間降低曝光值。（見下圖）\n如有需要，您也可以提高「Gamma」以進一步提亮影像，並進一步降低曝光值。\n此鏡頭有三個調整項目，由上至下：\n對焦（向 ∞ 符號方向調整，將使背景中較遠的物體清晰對焦）\n光圈（Iris 調整，用於控制通過鏡頭的進光量，較小的光圈將產生較清晰的影像）。\n變焦（調整鏡頭的廣角或望遠縮放）。\nLaunch Monitor 整合無法運作 如果整個 Launch Monitor 區段呈「灰色」，您很可能使用的是 Swing Catalyst 的 Basic 版本。只有「Pro」版本支援 Launch Monitor 整合。\n請確認 Launch Monitor 已啟用、「use as trigger」已勾選，且已選擇正確的 Launch Monitor。當「(not connected)」消失時，表示 Swing Catalyst 已連接到您的 Launch Monitor。\n如果您無法連接，請參閱：我們的支援網站並尋找對應的擊球準備文章／指南；某些 Launch Monitor 需要進行設定才能與 Swing Catalyst 搭配使用。\n如果您仍遇到問題，歡迎聯繫我們的支援團隊。\n遠端支援 步驟 1：開啟 Swing Catalyst 並點擊左下角的「?」按鈕。\n步驟 2：點擊「Start Remote Support」按鈕。這將開啟一個名為 Swing Catalyst Remote Support 的小程式。\n步驟 3：只要您已連接網際網路，應該就會取得一組 ID 號碼，請將此號碼傳送給您的支援人員。\n*如果您無法啟動 Swing Catalyst 或遠端支援，請參閱我們的遠端支援文章以取得其他方式。\n如何匯入與匯出影片 如何購買更新與支援 較早期購買終身軟體的客戶，可在第一年後選擇購買更新與支援，以確保能夠存取最新更新及電話／遠端支援。\n一年的更新與支援方案可從我們的網路商店以 249 美元購買。https://shop.swingcatalyst.com/products/support-update-plan\n如果您擁有多個授權，您需要為每個希望延長的授權個別購買更新與支援方案。\n請在結帳時於備註欄中填入授權名稱，以確保購買套用至正確的授權。如何找到授權名稱的說明，請參閱本常見問題解答頂部的內容。\n*只要您在結帳時於備註中填入授權名稱，您不必使用特定帳戶進行此購買。\n最後更新：2024-04-11 | 在官方支援網站上檢視",
    "description": "這是最常見問題的總覽。",
    "tags": [
      "Troubleshooting",
      "Balance-Plate",
      "Licensing"
    ],
    "title": "常見問題解答",
    "uri": "/sc-support/zh-hant/getting-started/faq/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "如何設定 Swing Catalyst Lynx 相機 本文涵蓋基本相機資訊，以及如何設定和配置來自 Swing Catalyst 的 Lynx GigE 相機。 如需簡明的逐步說明指南，請參閱 ： https://swingcatalyst.com/camera-guide 本文分為以下不同章節 入門指南：硬體設定 安裝雙埠網路卡 驅動程式安裝與啟用相機 疑難排解提示 相機資訊： 「Lynx」和「Fox」相機僅支援 Swing Catalyst 9.8.2 或更高版本。\n我目前執行的是哪個版本的軟體？\n這是一款支援乙太網路供電（PoE）的 GigE 相機。請確保您使用的是建議的 PoE 網路卡，或備有輔助電源供應器（可從我們的網路商店購買，或聯絡您的 Swing Catalyst 銷售代理商）。\n此相機的最高幀速率為 320 FPS。\n此相機的解析度為 720x540\n入門指南：相機組裝 使用相機隨附的 4 顆黑色十字頭螺絲，將三腳架轉接座固定到相機機身上。\n拆開鏡頭包裝，並確保移除塑膠鏡頭蓋。\n從相機上取下感光元件保護蓋。\n將鏡頭安裝到相機上\n調整相機鏡頭\n此鏡頭由上至下共有三項調整功能：\n對焦（朝 ∞ 符號方向調整，可使遠處背景中的物體對焦清晰）\n光圈（Iris 調整，用於調節通過鏡頭的光線量，較小的光圈將帶來更清晰的影像）\n變焦（調整鏡頭的廣角或望遠縮放）\n安裝雙埠網路卡： 重要事項：網路卡必須依照建議進行配置。\n**gige-network-setup.md\n如果您使用的是 4 埠版本，請參閱此影片：\n如何配置您的網路卡 請注意，您必須對每個打算與相機搭配使用的網路介面卡重複執行以下步驟。\n啟用 Jumbo Frames 點擊「開始」按鈕並輸入「Network Connections」（網路連線）\n在相機連接的乙太網路埠上按滑鼠右鍵，然後選擇「Properties」（內容）。\n點擊「Configure」（設定）按鈕，然後前往「Advanced」（進階）。\n將「Jumbo Packet」值設定為 9014。\n將「Receive Buffers」設定為 2048。\n驅動程式安裝與啟用相機： 步驟 1：使用 Cat5 或 Cat6 乙太網路線，將相機連接到電腦上的 PoE 網路埠，並確認相機背面出現穩定的藍色指示燈。\n步驟 2：點擊此處下載並安裝相機的驅動程式。\n步驟 3：開啟 SwingCatalyst，點擊主選單左下角的齒輪圖示，然後前往相機設定。\n步驟 4：點擊「播放」按鈕以取得預覽畫面。接著點擊「Disabled」，為每台相機指定適當的角度。最後將相機從「Off」切換為「On」。\n配置相機設定： 重要事項\n為確保球桿及球桿杆身畫面清晰，請將曝光值保持在 600 以下。透過調整 Gain 來提升影像亮度。最佳照明方案：安裝三盞 Thomann 100W 燈具——分別位於球道線視角、右側及左側各一盞——安裝在距離球至少 1.5 公尺處，可固定於天花板或牆面。\n點擊「Advanced」（進階）按鈕，然後前往「Camera」（相機）分頁。\n依照下方圖片所示，指定相同的數值。\n將所有顯示「continuous」的數值設定為「off」。\n對任何其他已連接的 Lynx 相機重複上述步驟。\nNote：若您有 3 或 4 台相機，建議將 GEV SCPD 設定為 150。\n您現在應可關閉設定，進入捕捉模式並開始錄製。\n疑難排解提示：\n相機未顯示於 SwingCatalyst 設定中：\n請確保您已安裝最新版本的 MVS/Runtime（4.6.1）。\n掉幀問題：\n降低每台相機的幀速率可能有助於避免或減少掉幀情況。\n您是否使用了建議的網路卡？如果沒有，可能是網路卡本身造成問題。請聯絡我們的銷售團隊，以確認您擁有合適的網路設備。\n網路卡配置不正確。請確認每個網路介面卡已啟用 9kB jumbo frames。請參閱我們關於建議配置的支援文章\n若使用 2 台以上相機，請將 GEV SCPD 設定為 150（請參閱相機設定中 Device / Link 區段下的設定）。\n確認連線速度為 1000 Mbps 而非 100 Mbps（請參閱相機設定中 Device / Link 區段下的「Device Link Speed」）。\n連線速度為 100 Mbps：\n若連線速度為 100Mbps 而非 1000Mbps，您使用的網路線可能已損壞，或網路介面卡不支援 Gigabit 速度。請嘗試更換網路線。\n嘗試將相機設定重置為預設值，然後在相機設定的「Device / Link」區段重新確認連線速度。\n從 Windows 控制台確認網路介面卡的狀態。\nNote：速度應為 1.0 Gbps（1000Mbps），而非 100Mbps。\n透過使用 Region of Interest（ROI）進一步減少掉幀：\n使用 Region of Interest（或感興趣區域）將縮小整體影像尺寸並提升 FPS，同時也有助於降低頻寬使用量，進而減少掉幀情況（請參閱上方說明以了解如何使用 ROI）。\n連線問題（相機斷線）：\n檢查網路線纜。\n若相機使用外部電源供應器，請檢查電源供應器的連接狀況。\n相機無法開機 / 未收到電源：\n若使用超過 2 個埠的 PoE 網路卡，請確認網路卡已從電腦連接外部電源。 其他問題：\n依據您的硬體配置，開啟銳化與降噪濾波器不一定是最佳選擇，關閉這些功能將減少部分 CPU 和 GPU 使用量。您可以在進階相機設定的濾波器分頁中找到相機濾波器。更多關於濾波器的資訊請參閱：improving-image-quality.md\n如何設定靜態 IP\n本文說明如何分別在 Lynx 相機和網路卡上設定靜態 IP 位址：lynx-static-ip.md\n最後更新：2026-01-21 | 在官方支援網站上檢視",
    "description": "「Lynx」和「Fox」相機僅支援 Swing Catalyst 9.8.2 或更高版本。",
    "tags": [
      "Troubleshooting",
      "Gige-Camera",
      "Lynx-Camera",
      "Fox-Camera"
    ],
    "title": "設定 Swing Catalyst Lynx GigE 相機",
    "uri": "/sc-support/zh-hant/cameras-video/lynx-camera-setup/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "本文涵蓋基本攝影機資訊，以及如何設置和配置來自 Swing Catalyst 的 Fox USB 3.0 攝影機。 如需簡要的逐步指南，請參閱：https://swingcatalyst.com/camera-guide 攝影機資訊： 「Lynx」和「Fox」攝影機僅支援 Swing Catalyst 9.8.2 或更高版本。 我正在使用哪個版本的軟體？\n最高幀速率為 249 FPS。\n最高解析度為 1440 x 1080。\n入門指南：攝影機組裝\n使用攝影機隨附的 4 顆黑色十字頭螺絲，將三腳架轉接器固定至攝影機機身。\n取出鏡頭並確保移除塑膠鏡頭保護蓋\n移除攝影機上的保護蓋\n將鏡頭安裝至攝影機\n調整攝影機鏡頭\n此鏡頭由上至下共有三項調整功能：\n對焦：（向 ∞ 無限符號方向調整）可將較遠的物體帶入對焦範圍，反向調整則可對焦距離鏡頭較近的物體。\n光圈：調整光圈（亦稱 Iris），可控制通過鏡頭的進光量，較小的光圈將產生更清晰的影像。\n變焦：調整鏡頭的廣角或望遠焦距。（此操作也會影響對焦，因此需同時調整兩者以獲得清晰的影像。）\n連接 USB 線纜\n將 USB3 線纜連接至攝影機，並輕輕鎖緊固定螺絲。\n攝影機應開始閃爍紅燈（這是 OK 的，因為我們尚未安裝驅動程式）。\n驅動程式安裝與啟用攝影機： 步驟 1：點擊下載並安裝攝影機的驅動程式\n步驟 2：開啟 Swing Catalyst，點擊主選單左下角的齒輪圖示，進入攝影機設定。\n步驟 3：點擊播放按鈕以取得預覽畫面。然後點擊「Disabled」並為每台攝影機指定對應的角度。最後將攝影機從「Off」切換為「On」。\n配置攝影機設定： 步驟 1：點擊「Advanced」按鈕，並切換至「Camera」標籤。\n步驟 2：按照下方圖片中的數值進行設定。重要提示：為了在擊球時清楚地檢視球桿杆身與球桿，您需要將曝光值設定為 600 或以下。透過增加「gain」來為影像補充亮度。若影像仍然偏暗，可以適當提高曝光值，但這將導致球桿杆身產生動態模糊。為確保最佳光源條件，我們強烈建議安裝以下三盞燈：Thomann 100w，一盞位於球道線視角方向、一盞位於正面視角右側、一盞位於正面視角左側，可安裝於天花板或牆壁上。燈具與球之間的距離應至少保持 1.5 公尺。\n步驟 4：將所有顯示「continuous」的數值設定為「off」。\n步驟 5：對其他已連接的 Fox 攝影機重複上述步驟。\n步驟 4：現在您可以關閉設定，進入捕捉模式並開始錄製。\n疑難排解 USB 3.0 的使用有時較為複雜。某些 USB 線纜的效能優於其他線纜，特定的 USB 3.0 控制器也可能造成問題。請參閱我們的推薦 USB 元件文章以取得詳細資訊：recommended-usb3-components.md\n掉幀問題：\n降低每台攝影機的幀速率可能有助於避免或減少掉幀情況。\n尤其是在多攝影機設置中，調整幀速率可以幫助穩定系統，但會犧牲少量 FPS。\n以下以一個示例說明單台攝影機所使用的頻寬：USB 3.0 標稱傳輸速率為 5Gb/s，即 625 MB/s。\n一台解析度為 1920 x 1200、幀速率為 150 FPS 的 USB 3.0 攝影機，每台約佔用 345MB/s 的頻寬。因此，在多攝影機設置中（大多數情況下），按照我們的建議為每台攝影機配置專用的 USB 3.0 控制卡非常重要。\n另一種方法，通常與降低頻寬消耗搭配使用，即是利用 Region of Interest，通常稱為 ROI。\n若您的設置仍然持續掉幀，請嘗試斷開一台攝影機（若為多攝影機設置）並關閉所有額外的軟體。若此操作有所改善，則可能表示您的電腦資源不足。\nRegion Of Interest（ROI）：\n使用 Region of Interest（或感興趣區域）將縮小整體影像尺寸並提升 FPS，同時也有助於降低頻寬使用量，從而減少掉幀情況（請參閱上方關於如何使用 ROI 的說明）。\n此外，USB 線纜也是影響實際接收幀速率的重要因素，如以下文章所述：recommended-usb3-components.md\n連接問題（攝影機斷線）：\nUSB 3 容易出現連接問題。這些問題通常源於劣質的 USB 3.0 延長器、線纜整體長度過長，或是因過度彎折而導致損壞的線纜。\n攝影機 LED 閃爍紅燈而非綠燈：\n這可能表示攝影機的驅動程式未正確安裝。請嘗試重新安裝驅動程式，並將攝影機斷開後重新連接至其他 USB 連接埠。\n驅動程式異常的跡象有時可在 Windows 裝置管理員中看到，此情況下 Fox 攝影機顯示為「USB3 Vision Device」：\n其他問題：\n視您的硬體而定，開啟銳化與降噪濾波器不一定是最佳選擇，關閉這些功能將減少部分 CPU 與 GPU 的使用量。您可以在進階攝影機設定的濾波器標籤中找到攝影機濾波器設定。更多關於濾波器的資訊請參閱：improving-image-quality.md\n最後更新：2024-08-12 | 在官方支援網站上檢視",
    "description": "Swing Catalyst Fox USB 3.0 攝影機的組裝與設置指南，包括驅動程式安裝及配置說明",
    "tags": [
      "Troubleshooting",
      "Usb-Camera",
      "Lynx-Camera",
      "Fox-Camera"
    ],
    "title": "設置 Swing Catalyst Fox USB 3.0 攝影機",
    "uri": "/sc-support/zh-hant/cameras-video/fox-camera-setup/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 參考",
    "content": "25.3.2 發布為beta版 19.01.2026\n功能\nDESKTOP-11248：新增UI版面配置切換的快速鍵\n錯誤\nDESKTOP-11251：Bertec力量板搭配2024年5月Acquire SDK時的緩衝區溢位可能導致接收資料不足\nDESKTOP-11224：捕捉模式：DowntheLine相機視角的FV旋轉90°\nDESKTOP-10028：Debug檢視器：壓力測試在特定錄製數量時無法停止\nDESKTOP-10243：匯出按鈕缺少資料選擇驗證\nDESKTOP-11165：FPT圖表未以零點為中心\nDESKTOP-11106：個別足部力向量未顯示 + 校準錯誤\nDESKTOP-9633：線上登入：檢查空白欄位修復\nDESKTOP-11136：Live：檢視中沒有球手時FPT資料仍保留\nDESKTOP-11163：若存在GCQuad資料則無法上傳至Online.Swingcatalyst.com\nDESKTOP-11238：驅動程式更新後NvidiaSessionLimitPatcher位元組樣式未找到\nDESKTOP-10211：線上登入：空白欄位警告修復\nDESKTOP-11243：FFmpegEncoder hw_frames_ctx中的GPU記憶體洩漏\nDESKTOP-9727：同名群組修復\nDESKTOP-9481：相機預覽修復\nDESKTOP-10360：SciChart：透過RDP斷開連接/重新連接時圖表不再呈現\nDESKTOP-11179：視覺效果未跟隨相機旋轉\nDESKTOP-11281：單一實例檢查顯示\"已執行\"對話框但允許重複實例啟動\n25.3.1 發布為beta版 06.01.2026\n功能\nDESKTOP-10858：限制每個目錄的日誌檔案總數以防止過度使用磁碟空間\nDESKTOP-11036：FPT05：文件\n錯誤\nDESKTOP-10579：[MMCx] 在MoCap錄製建立期間變更執行提供者時系統當機\nDESKTOP-10915：從重播開啟錄製時軟體有時會當機\nDESKTOP-11053：COP分佈在書籤邊界處顯示不連續性\nDESKTOP-11085：比較模式：選定的角度在其他錄製中不存在時角度選擇會改變\nDESKTOP-11086：揮杆期間力量板未加載可能導致扭矩出現大幅尖峰\nDESKTOP-11102：縮圖未建立（由於在Github Artifact版本中找不到ffmpeg）\nDESKTOP-11104：壓力和站立資料方塊方向選項無法運作\nDESKTOP-11109：最愛版面配置應記住相機順序\nDESKTOP-11119：無法載入FFmpeg\nDESKTOP-11154：在比較模式中變更相機視角無法跨錄製追蹤\nDESKTOP-11155：有時視頻中央會出現小的紅色矩形\nDESKTOP-11157：當力量板上沒有人時力臂可見\nDESKTOP-11159：影片/Spinnaker：修復與系統已安裝Spinnaker SDK的DLL載入衝突\nDESKTOP-11160：相機視角不一致\nDESKTOP-11166：罕見當機：匯入錄製時 DynamicData ArgumentException\nDESKTOP-11168：刪除學生時當機，出現 NHibernate QueryException - 在 ForceData 上找不到 FilePath 屬性\nDESKTOP-11172：「已在執行」對話框使用後備/原生對話框而非適當的主題對話框\nDESKTOP-11175：安裝程式工作流程：PR 評論觸發的組建中 LFS 檔案變成指標檔案\nDESKTOP-11178：視頻檢視區無回應\nDESKTOP-11240：GpuCopyBack 類中的 GPU 記憶體洩漏（每個工作階段約 8MB）\n25.2.8 發布為測試版 19.11.2025\n發布為穩定版 25.11.2025\n功能\nDESKTOP-10858：限制每個目錄的日誌檔案總數以防止過度佔用磁碟空間\n25.2.7 發布為測試版 08.10.2025\nBug\nDESKTOP-11085：比較模式：當選定的角度在另一個錄製中不存在時，角度選擇會改變\n25.2.6 發布為測試版 17.09.2025\nBug\nDESKTOP-11085：比較模式：當選定的角度在另一個錄製中不存在時，角度選擇會改變\n25.2.5 發布為測試版 20.08.2025\nBug\nDESKTOP-11071 在比較模式下變更檢視區 A 選定的相機/角度會導致檢視區 B 使用錯誤的相機\n25.2.4 發布為測試版 04.07.2025\n功能\nDESKTOP-10973 降低最低體重要求以支援年幼兒童\nDESKTOP-11041 通知可能較長的 MoCap 元件載入時間\nDESKTOP-11059 [TFZ] 為力量 API 發送體重\nBug\nDESKTOP-10860 選擇線條時軟體變得無回應/凍結\nDESKTOP-10933 在比較模式下開啟錄製時系統可能凍結\nDESKTOP-11008 無法讀取授權檔案，因為該檔案正在被另一個處理程序使用\nDESKTOP-11054 MJPEG 相機自動板偵測不適用\n25.2.3 發布為測試版 13.06.2025\nBug\nDESKTOP-10994 MoCap 元件下載不適用\n25.2.2 發布為測試版 12.06.2025\n功能\nDESKTOP-10953 使用垂直力停用球桿杆身配置（按壓力）\nBug\nDESKTOP-10932 上傳無法停止或繼續\nDESKTOP-10933 在比較模式下開啟錄製時系統可能凍結\nDESKTOP-10943 在即時模式中體重下拉選單始終為停用狀態\nDESKTOP-10948 在使用感測板的捕捉模式後變更使用者可能導致錯誤\nDESKTOP-10967 第二個開啟的影片凍結\n25.2.1 功能\nDESKTOP-10893 為原始資料匯出添加更多中繼資料\nDESKTOP-10904 [TFZ] 新增力量 API 支援\n錯誤\nDESKTOP-10803 調查：啟用 MoCap 時收到資料不足警告\nDESKTOP-10885 使用兩台同名和同角度的相機捕捉總是失敗\nDESKTOP-10889 [KM2] 1 - 部分 CoP 指標初始化可能失敗\nDESKTOP-10894 載入元件後 MoCap 功能應自動開始運作\nDESKTOP-10912 [KM2] 1 - 原始資料匯出對指標運作不正確\n25.2.0 功能\nDESKTOP-5473 實現每隻腳的 COP 軌跡渲染\nDESKTOP-8583 生成資料庫之間差異的錄製\nDESKTOP-8669 MVS：重設相機設定時將 GEV SCPD 設為良好的預設值\nDESKTOP-9473 為原始資料匯出新增中繼資料\nDESKTOP-9847 改善首次啟動使用者體驗\nDESKTOP-9941 統一影片、錄製檔案和原始資料匯出的檔案名稱\nDESKTOP-9951 將 DLC 內容設為唯讀 - 不允許變更任何屬性\nDESKTOP-9964 [ODEP] 下載對話方塊的新 UI\nDESKTOP-10077 [KM] 2 - 為 COP 分佈新增關鍵指標\nDESKTOP-10179 [MMC3I] 藉由消除轉換步驟來最佳化 BVH 反序列化\nDESKTOP-10321 [KM] 1 - 定義「階段」、「索引」、「書籤」等術語並進行區分\nDESKTOP-10322 [KM] 1 - 清理 AnalysisResultTypeEnum\nDESKTOP-10323 [KM] 2 - 為力量和扭矩新增關鍵指標\nDESKTOP-10324 [KM] 1 - 建立根據活動類型取得索引/階段名稱的系統\nDESKTOP-10325 [KM] 3 - 為力量和扭矩峰值時機新增關鍵指標\nDESKTOP-10357 [MMC3F] 改善 mocap 除錯點\nDESKTOP-10364 使用原始資料匯出中繼資料（例如錄製捕捉時間/壓力時間戳）\nDESKTOP-10488 [MMC3] 在播放中實現除錯視覺效果\nDESKTOP-10497 [MMC3] 在檔案總管中新增帶有 mocap 錄製的篩選\nDESKTOP-10559 [MMC3] 為 mocap 新增鍵盤快速鍵/熱鍵\nDESKTOP-10596 將 Foresight SDK 更新至 3.5.2.9\nDESKTOP-10635 [MMC3] 實現未偵測到人員通知/訊息\nDESKTOP-10722 [MMC3] 相機的共用批次大小\nDESKTOP-10734 將感測板和版面配置尺寸新增至原始資料匯出\nDESKTOP-10737 實現 Swing Catalyst 的入門指南\nDESKTOP-10786 [MMC3] 上傳/下載至 SC 雲端時包含 mocap 資料\nDESKTOP-10818 [ODEP] 動態元件載入\nDESKTOP-10824 [ODEP] 執行提供者元件 API\nDESKTOP-10825 [ODEP] 提示下載特定執行提供者\nDESKTOP-10867 相機校準 GUI 的輕微改進\nDESKTOP-10881 [DLC] 下載特定/必需的執行提供者\n錯誤\nDESKTOP-8969 MVS：應用裁剪將導致進階設定中的影片影像消失\nDESKTOP-9032 SC：彈出視窗不應強制主視窗最小化\nDESKTOP-9726 縮放以填滿修復\nDESKTOP-9757 麥克風觸發器 AudioTimerTickHandler 失敗\nDESKTOP-9813 不支援 BT2020_NCL 色彩空間的相機\nDESKTOP-9819 搜尋使用者結果被轉移到檔案總管\nDESKTOP-9844 連線中斷 DPP 訊息修復\nDESKTOP-9945 主頁：不應偵測到板，不應顯示校準警告\nDESKTOP-10011 從線上下載：選擇使用者對話框中的關閉按鈕導致錄製被下載\nDESKTOP-10074 調查：開啟的錄製應遵循先前開啟的錄製的相機角度\nDESKTOP-10292 由於具有漏洞的套件而產生組建警告 (NET9)\nDESKTOP-10508 從捕捉快速切換到播放時，影片有時無法載入\nDESKTOP-10546 評論方塊在輸入時隨機取消選擇\nDESKTOP-10553 [mjpeg] 影像中找不到 JPEG 資料\nDESKTOP-10574 可下載內容可能因時鐘偏差而失敗\nDESKTOP-10580 即時重播列未顯示\nDESKTOP-10588 [MMC3] 體型規格對話框有時會在不應該時開啟\nDESKTOP-10591 比較模式：影片進度列不穩定，使用 MoCap 時重播非常緩慢\nDESKTOP-10605 改進使用多部相機捕捉時的 MoCap 模型載入訊息\nDESKTOP-10608 啟用骨骼中許多關節的角度繪製可能導致渲染緩慢和 UI 凍結\nDESKTOP-10626 可能繞過授權過期\nDESKTOP-10673 如果停用，請勿更新資料視覺效果\nDESKTOP-10674 [MMC3] 體重彈出視窗修復\nDESKTOP-10678 在比較模式中變更相機角度時，影片影像不可見 (忙碌紡車)\nDESKTOP-10693 System.IndexOutOfRangeException：索引超出陣列範圍。\nDESKTOP-10714 [MMC3] MoCap 下拉式功能表：鏡頭修正圖示未立即更新\nDESKTOP-10721 播放性能不佳 (壓力資料視覺效果減速) (應用程式可能凍結/卡頓)\nDESKTOP-10792 MoCap 載入錯誤 UI 回饋已隱藏\nDESKTOP-10799 課程錄製可能因點陣圖區域已鎖定而失敗\nDESKTOP-10801 MoCap 性能相比 25.1.3 較差\nDESKTOP-10804 授權對話框顯示無錯誤，應用程式關閉\nDESKTOP-10817 不穩定的指標架構測試\nDESKTOP-10827 使用 Lynx (乙太網) 開始緩衝較慢\nDESKTOP-10829 開啟錄製比以前慢\nDESKTOP-10833 [MMC3] 在 RTX 5080 GPU 上執行推論工作階段時 MoCap 當機\nDESKTOP-10841 「建議的球桿杆身」標籤在單一錄製版面配置中被裁剪\nDESKTOP-10849 資料共享可能導致 IOException：磁碟上的空間不足。\nDESKTOP-10854 安裝程式建置因簽署失敗而失敗\nDESKTOP-10869 在設定中切換相機時發生VRAM洩漏\nDESKTOP-10870 清理MoCap資源時發生VRAM和RAM洩漏\nDESKTOP-10872 在捕捉模式下使用DirectML啟用MoCap時SC當機\nDESKTOP-10873 棒球揮杆觸發器選擇未被記住\nDESKTOP-10890 解密onnx模型時發生LOH記憶體分配問題\nDESKTOP-10898 捕捉MoCap時發生記憶體洩漏\nDESKTOP-10916 相機數量版面配置選擇器已啟用所有選項\n25.1.7 已作為beta版本 25.04.2025 發佈\n功能\nDESKTOP-10779 從GA4中的錄製收集MoCap使用資訊 Bug修復\nDESKTOP-10854 安裝程式建置因簽署失敗而失敗\n25.1.6\n已作為beta版本 08.04.2025 發佈\nBug修復\nDESKTOP-10651：某些DirectShow相機的即時回放無法運作\nDESKTOP-10800：啟動期間初始化MoCap時發生錯誤\n25.1.5 已作為beta版本 18.03.2025 發佈\n已作為穩定版本 24.03.2025 發佈\nBug修復\nDESKTOP-9834 無法在DirectShow相機的即時回放期間控制影片播放\nDESKTOP-9868 使用Microsoft365/Office365傳送電子郵件有時會失敗：生命週期驗證失敗，權杖已過期\nDESKTOP-10746 FLIR和PointGrey相機錯誤未正確報告\nDESKTOP-10749 捕捉等級未從工作階段區域保存\n25.1.4 已作為beta版本 27.02.2025 發佈\nBug修復 DESKTOP-10730：播放時鏡頭修正狀態始終為「遺失」\nDESKTOP-10727：MoCap處理錄製後MoCap影片來源預設未啟用\nDESKTOP-10716：[MMC3] 處理錄製MoCap時發生ADOException\nDESKTOP-10700：處理MoCap後書籤變為未設置\nDESKTOP-10697：SkeletonDataVisualsVM.AddJointTrace()中發生NRE\nDESKTOP-10547：開啟錄製時發生錯誤\nDESKTOP-10494：CaptureModel中發生ODE\nDESKTOP-9741：星級評等修復\nDESKTOP-9492：Swing Catalyst Fox相機在斷開連線時可能導致應用程式當機\nDESKTOP-8787：開啟新錄製時星級評等未清除\n25.1.3 已作為beta版本 17.02.2025 發佈\n史詩 DESKTOP-10098：[MMC2] 動作擷取 v2\n25.1.2 已作為beta版本 13.02.2025 發佈\nBug修復 DESKTOP-10285 退出捕捉後重播條仍然可見\nDESKTOP-10491：使用單一相機時偵測到兩台Fox/Lynx相機\nDESKTOP-10648：還原並增強資料收集的Criteria API\nDESKTOP-10671：DataVisuals中的溢位問題\nDESKTOP-10651：即時重播無法運作\n25.1.1 已作為測試版23.01.2025發佈\n功能 DESKTOP-10383 新增Swing Catalyst標誌並替換橙色 錯誤修正 DESKTOP-8964 平衡板隨機斷開連接\nDESKTOP-10072 「有新版本可用」提示在測試版用戶中無法運作\nDESKTOP-10051 「分析」需要工具提示文字\nDESKTOP-10485 桌面重新導向：Shop按鈕修正\nDESKTOP-10500 嘗試開啟錄製時當機\n24.2.3 已作為測試版28.11.2024發佈\n已作為穩定版11.12.2024發佈\n錯誤修正 DESKTOP-10424 鏡像和旋轉不再運作 24.2.2 已作為測試版13.11.2024發佈\n錯誤修正 DESKTOP-9965 FlightScope整合在某些系統上可能失敗\nDESKTOP-10042 雙力量板類型在首次使用時無法運作\nDESKTOP-10384 無法變更錄製的使用者\nDESKTOP-10391 檔案總管：在堆疊中開啟工作階段修正\nDESKTOP-10393 力量圖表顯示不正確\nDESKTOP-10406 先前的捕捉版面配置有時無法正確載入\nDESKTOP-10409 Foresight依賴項遺失\nDESKTOP-10429 元件版面配置偵測有時可能失敗\nDESKTOP-10447 著色器檔案快取損壞\n24.2.1 已作為測試版24.10.2024發佈\nEpics DESKTOP-9189 [BTI] 使用檔案總管綑綁錄製\nDESKTOP-9669 [CLI] 客戶授權ID\nDESKTOP-9869 [PFP] 支援可攜式力量板\nDESKTOP-10168 [BPA] 棒球投球活動類型\n24.1.7 已作為測試版02.10.2024發佈\n已作為穩定版14.10.2024發佈\n錯誤修正 DESKTOP-10306 使用繪圖工具錄製課程導致當機（滑鼠遊標損壞） 24.1.6 已作為測試版27.09.2024發佈\n功能 DESKTOP-10316 修正 YouTube 標誌圖示大小（違反服務條款） 錯誤修正 DESKTOP-10296 更新課程音訊裝置後，麥克風顯示警告訊息 24.1.5 已於 2024 年 8 月 26 日發佈為測試版。\n已於 2024 年 9 月 11 日發佈為穩定版。\n錯誤修正 DESKTOP-10180 錄製內容顯示不正確的力量圖表且沒有書籤 24.1.4 錯誤修正 DESKTOP-9965 FlightScope 整合在某些系統上可能失敗\nDESKTOP-9986 站姿階段 VM 中的 NRE\nDESKTOP-10127 開啟錄製時資料方塊清單被清空\n24.1.3 功能 DESKTOP-9949 更新最終用戶授權協議 錯誤修正 DESKTOP-9886 開始捕捉時壓力分佈位置錯誤\nDESKTOP-9936 DPP：捕捉模式：播放模式後壓力條等級保持\nDESKTOP-10049 變更授權可能導致軟體當機\nDESKTOP-10127 開啟錄製時資料方塊清單被清空\n24.1.2 已於 2024 年 6 月 13 日發佈為測試版\n摘要 此次更新解決了多項錯誤，改善裝置偵測和系統穩定性。特別是針對雙壓力板 (DPP) 進行了大量修正。同時也修正了棒球運動中雙板設置版面配置渲染的錯誤。\n棄用警告 **棄用警告：**Motion Plate 4 的支援已在版本 24.1 中移除，將不再於較新的版本中提供。\n錯誤修正 DESKTOP-8570 BodiTrak BT2 16x25-500 偵測為 16x25 且按鈕置中。\nDESKTOP-9145 修正編輯/建立快顯視窗中令人困惑的減號\nDESKTOP-9161 修正資料方塊下拉式選擇問題，無法選擇最後一項\nDESKTOP-9919 棒球：壓力與站姿無法正確渲染板配置\nDESKTOP-9884 DPP：無法在壓力與站姿資料方塊中改變板位置\nDESKTOP-9892 DPP：即使裝置已斷開連線，板位置仍保持顯示\nDESKTOP-9917 DPP：板位置設定應僅針對壓力與站姿圖表顯示\nDESKTOP-9896 使用者變更未結束工作階段導致錄製損毀\nDESKTOP-9932 DPP：修正大小和邊距\nDESKTOP-9933 DPP：按比例修正間隙渲染\nDESKTOP-9934 DPP：由於資料庫和分析管道的變更，更新錄製和資料庫版本\nDESKTOP-9939 DPP：捕捉：設定在 PS 圖表中未正確顯示\nDESKTOP-9967 DPP：即時：站距寬度：距離錯誤且無法儲存設定\nDESKTOP-10016 DPP：寬板和窄板位置的設定在 PS 圖表即時模式中無法運作\nDESKTOP-9966 擷取硬體驗證對沒有感測板可用的授權在設定中仍保持啟用\nDESKTOP-9968 從一個感測板切換到另一個感測板時出錯\nDESKTOP-9982 點擊開啟錄製時手動觸發器被停用\nDESKTOP-9983 雙 Motion Plate 在壓力和站立數據中的邊距不正確\nDESKTOP-10014 SC 中 MC 模組的新增運動功能損壞\nDESKTOP-10024 除非開啟新錄製或關閉程式，否則無法刪除學生資料夾中的物理影片檔案\nDESKTOP-10031 沒有連接 DPP 時仍顯示板距設置\nDESKTOP-10041 調整說明壓力條何時不可見的提示文字\nDESKTOP-10042 停用連接的雙力量/Motion 板並開始捕捉時拋出錯誤\nDESKTOP-10043 雙力量型板第一次無法工作\n功能 DESKTOP-10023 更新 Xceed 工具套件庫版本/授權 改進 DESKTOP-9929 分析條目多次重新建立 24.1.1 於 2024 年 7 月 5 日以測試版發布\n史詩 DESKTOP-7172 [NUCA] - 通知使用者如何執行/捕捉活動類型\nDESKTOP-8053 [HELU] 家庭版 - 限制使用者\nDESKTOP-9571 [HELU] 家庭版 - 限制使用者\nDESKTOP-9760 24.1 UI 改進\nDESKTOP-9374 [BSL] 棒球步幅長度\n功能 DESKTOP-7007 NUCA - 管理影片檔案\nDESKTOP-7049 避免書籤圖示重疊\nDESKTOP-7715 NUCA - 實作\nDESKTOP-8056 [HELU] 在 DDBB 使用者表中建立新欄位，並在程式碼中反映\nDESKTOP-8057 HELU - 2. 實作主要邏輯\nDESKTOP-8068 HELU - 2.1 研究從線上匯入的邏輯\nDESKTOP-8069 HELU - 3. Windows「選擇使用者」和「捕捉」視窗的變更\nDESKTOP-8070 HELU - 4. 檔案總管視窗的變更\nDESKTOP-8071 HELU - 5.1 實作從使用者 B 切換到 A 的可能性第 1 部分\nDESKTOP-8072 HELU - 5.2 實作從使用者 B 切換到 A 的可能性第 2 部分\nDESKTOP-8678 重寫 Ref\u003c\u003e 實作以降低配置\nDESKTOP-9349 [MMC2] - 分離 Aruco 和 Charuco 程式碼\nDESKTOP-9354 更新 FlightScope Mevo+ SDK\nDESKTOP-9430 重寫基本影片類型以改進性能/減少配置\nDESKTOP-9479 [RUL] 史詩規格：重新命名「使用者」\nDESKTOP-9493 切換時間戳時鐘使用多媒體時鐘\nDESKTOP-9587 升級 Spinnaker SDK 至 3.2.0.57\nDESKTOP-9595 [DPP] - 顯示個別壓力墊感測區域，並在墊之間分割\nDESKTOP-9614 [BSL] - 使 P\u0026S 資料方塊中的站距寬度數字動態/靜態（可設定）\nDESKTOP-9676 [BTI] 建立 API 以根據產品提供可下載的內容\nDESKTOP-9677 [BTI] 確認下載後反白標示「尚未點擊的動作」\nDESKTOP-9711 MCSC - 停用高爾夫與棒球的 KCS 分析\nDESKTOP-9742 [BSL] - 新增動態（即時）站距寬度分析模型\nDESKTOP-9755 更新 Foresight SDK（支援新的 Foresight Falcon 與 QuadMAX）\nDESKTOP-9805 更新程式碼簽署憑證\nDESKTOP-9522 改善啟動畫面工具提示\nDESKTOP-9842 [BSL] - 新增支援階段站姿關鍵指標（在關鍵指標資料方塊中）\nDESKTOP-9883 DPP：支援英制與公制間距\nDESKTOP-9778 [DPP] 透過桌面軟體中的功能旗標進行啟用控制\nDESKTOP-8746 [DPP] 使用者可配置板距的 UX 設計\nDESKTOP-9422 [DPP] 1 - 支援不同的板間距 / 距離\nDESKTOP-8747 [DPP] 2 - 為使用者可配置的板距實作 GUI\nDESKTOP-8745 [DPP] 2 - 當板距未知時隱藏站距寬度\nDESKTOP-9506 [DPP] 2 - 建立 DPP 模擬裝置\nDESKTOP-9801 [DPP] 支援更新 / 自訂板配置\nDESKTOP-9908 DPP - 播放模式下的壓力與站姿\nDESKTOP-9870 [PDF] 1 - 新增感測板定義與自動偵測濾波器\nBug 修復 DESKTOP-9020 如果選定項目是清單中的最後一個元素，資料方塊不會顯示從下拉選單中選取的項目\nDESKTOP-9073 新校準工具提示應進行變更\nDESKTOP-9080 「開啟」應變更為「檔案總管」\nDESKTOP-9492 相機插入 / 拔出導致系統崩潰\nDESKTOP-9513 相機在播放中重設校準設定\nDESKTOP-9566 資料庫移動修復\nDESKTOP-9609 當未偵測到任何板時，允許使用者在硬體設定中變更選定的板\nDESKTOP-9623 Motion Catalyst 新版本可用 / 更新按鈕無法運作\nDESKTOP-9648 重設體重後捕捉視角關閉修復\nDESKTOP-9659 壓力測試在一定數量的錄製後停止\nDESKTOP-9673 DPP - COP 速度資料方塊 - 似乎是無效的錯誤訊息\nDESKTOP-9691 測試最近似乎經常失敗\nDESKTOP-9693 CoreAudio：ConnectivityService，不要拋出未實作的例外狀況\nDESKTOP-9698 從偵錯工具編譯 / 執行時失敗，顯示「您必須安裝或更新 .NET…」\nDESKTOP-9700 測試的平行 / 多處理程序執行已損毀\nDESKTOP-9709 滑雪跳躍 CoM 資料方塊在 SC 中彈出\nDESKTOP-9733 使用 GPU 預處理時，感測板偵測會產生稍有不同的結果\nDESKTOP-9756 在某些情況下，序列化的版面配置設定未更新\nDESKTOP-9762 計重對話方塊無法運作\nDESKTOP-9796 啟用與停用鏡頭修正導致崩潰\nDESKTOP-9800 [DPP] 1 - 僅連接一個墊時雙壓力板類型的不良行為\nDESKTOP-9804 「未啟用任何捕捉來源」訊息對話框缺少空格或換行符\nDESKTOP-9806 修正錄製的學生變更\nDESKTOP-9830 [DPP] DPP 首次使用時無法正常運作\nDESKTOP-9855 成果物組建失敗\nDESKTOP-9879 無法啟動成果物：授權驗證未成功\nDESKTOP-9890 DPP：捕捉：自訂距離設定同步修正\nDESKTOP-9891 DPP：播放：自訂距離設定修正\nDESKTOP-9893 DPP - 即時模式的壓力和站立數據\nDESKTOP-9894 DPP - 寬設定中 COP 消失\nDESKTOP-9903 DPP：PS 圖表設定修正\nDESKTOP-9906 板位置應僅在 DPP 連接時顯示\nDESKTOP-9911 ONNX runtime 管道測試失敗\nDESKTOP-9914 SC 啟動時出現錯誤訊息\nDESKTOP-8971 在啟動捕捉模式時提醒使用者硬體配置是否正確（防止使用無效設置進行捕捉）\nDESKTOP-9205 修正授權設定彈出視窗按鈕\nDESKTOP-9747 瀏覽 Swing Catalyst Online 中的錄製可能失敗\nDESKTOP-9884 DPP：壓力和站立數據資料方塊設定修正\nDESKTOP-9027 登入 Swing Catalyst Online 可能失敗\n10.3.5 於 2024 年 3 月 21 日發佈為測試版\n於 2024 年 4 月 11 日發佈為穩定版\n棄用警告 棄用警告： 下一個主要版本將不再支援 Motion Plate 4。\n功能 DESKTOP-9805 更新程式碼簽署憑證 錯誤修正 DESKTOP-9351 MMC - 修正不應繪製網格的問題\nDESKTOP-9709 滑雪跳躍 CoM 資料方塊在 SC 中彈出\nDESKTOP-9763 嘗試透過 Google / Google Oauth 登入時控制代碼無效\nDESKTOP-9796 啟用和停用鏡頭修正導致當機\nDESKTOP-9822 資料視覺效果無法保持關閉。持續出現。\nDESKTOP-9833 高爾夫客戶可看到 Motion Catalyst 活動類型\nDESKTOP-9835 10.3.4 版本中左手握桿的力向量不正確\n10.3.4 於 2024 年 2 月 2 日發佈為測試版\n於 2023 年 2 月 15 日發佈為穩定版\n錯誤修正 DESKTOP-9657 使用旋轉濾波器時鏡頭修正無法運作\nDESKTOP-9748 修正雙壓力板的內部尺寸\nDESKTOP-9759 使用 DirectShow/網路攝影機時的記憶體洩漏\nDESKTOP-9781 載入 COP 速度資料方塊時出錯\n10.3.3 於 2024 年 1 月 22 日發佈為測試版\n錯誤修復 DESKTOP-9626 [FPD] 自動偵測在捕捉模式下導致軟體崩潰\nDESKTOP-9635 選擇不同的資料方塊有時會導致錯誤\nDESKTOP-9653 FPD - 自動偵測 - 壓力條在校準前似乎仍可見\nDESKTOP-9657 使用旋轉濾波器時鏡頭修正無效\nDESKTOP-9694 Windows 11 記憶體完整性功能防止 FTDI 驅動程式安裝\nDESKTOP-9696 開啟錄製檔有時因圖形資料載入錯誤而失敗\nDESKTOP-9706 在播放模式下自動偵測感測板角點無效\nDESKTOP-9710 連續執行多次力向量自動偵測時軟體崩潰\nDESKTOP-9712 NHibernate 在儲存校準歷史記錄時拋出例外\nDESKTOP-9715 資料視覺校準問題\nDESKTOP-9720 資料視覺校準自動偵測導致 AccessViolationException\nDESKTOP-9731 無法在健身運動後切換至高爾夫揮杆\nDESKTOP-9732 修正校準設定視窗外仍可見的相機校準網格\nDESKTOP-9736 板檢測器在捕捉中的非受控記憶體洩漏\nDESKTOP-9737 修正力向量切換按鈕失序\nDESKTOP-9739 資料視覺按鈕在初始化狀態下仍可點擊\nDESKTOP-9744 正面視角左相機檢視：壓力條左右翻轉\nDESKTOP-9746 修正板未連接時執行資料分析校準\n10.3.2 於 2023 年 12 月 13 日發布測試版\n功能 Force Plate Detector：最佳化效能、在 GPU 上執行並在處理時顯示載入視窗\nDESKTOP-9612 反白顯示階段核取方塊預設應不勾選\n錯誤修復 DESKTOP-8514 [mjpeg] 影像中找不到 JPEG 資料\nDESKTOP-9315 MotionCatalyst 應用程式更新連結無效\nDESKTOP-9461 Office365 電子郵件整合偶爾無法傳送電子郵件\nDESKTOP-9559 若無人站在板上，不顯示基本站姿和站距寬度\nDESKTOP-9579 修正從線上下載錄製檔\nDESKTOP-9593 修正反白顯示階段\nDESKTOP-9611 註冊 ForesightGC2 模擬硬體系統在啟動時導致崩潰\nDESKTOP-9643 使用 NVIDIA 編碼器時視訊編碼器失敗\nDESKTOP-9652 視訊緩衝系統錯誤（InvalidOperationException：集合已修改）\nDESKTOP-9679 SAM imagenet 正規化前處理步驟中的不正確常數\n10.3.1 於 2023 年 11 月 13 日發布測試版\n史詩 DESKTOP-8639 [MMC] - 內部參數校準\nDESKTOP-8492 [AIFPD] AI 力量板檢測器\nDESKTOP-9076 [GA4] 在現有專案中遷移分析\nDESKTOP-9255 [FPD] 力量板檢測器\n功能 DESKTOP-7772 更新線上客戶端以避免使用 RestSharp\nDESKTOP-8388 KCS - 新增 CMJ 指標\nDESKTOP-8438 研究：相機設定檔案\nDESKTOP-8653 MMC - 建立內在濾波著色器\nDESKTOP-8683 重構 HotKeyVM 以支援 BookmarksPreset，允許跳轉到書籤 3\nDESKTOP-8744 [SDD] 1 - 實現新感測板版本和壓力墊版本，含自動檢測濾波器\nDESKTOP-8825 MMC - 在視訊濾波管道中整合 OpenCV 處理\nDESKTOP-9103 調整捕捉和播放模式期間資料視覺化菜單選項的可見性\nDESKTOP-9110 MMC - 實現相機校準後端\nDESKTOP-9117 改進 Launch Monitor 連接性的視覺回饋\nDESKTOP-9118 MCSC - 在菜單中實現品牌設計\nDESKTOP-9121 所有圖表資料方塊的同步縮放\nDESKTOP-9148 改進 Launch Monitor 命名\nDESKTOP-9171 MMC - 為偵測 aruco 效果建立測試\nDESKTOP-9181 [CD] 錄製：提取和保存視訊規格到錄製元資料\nDESKTOP-9228 [CD] 建立端點以產生存儲的臨時存取權限\nDESKTOP-9241 MCSC - 僅在使用者連接力量板時顯示活動類型選擇器\nDESKTOP-9263 [FPD] 1 - 建立發佈 NuGet 套件的管道\nDESKTOP-9264 [FPD] 1 - 具有 AI 板檢測功能的新 .NET 專案\nDESKTOP-9265 [FPD] 2 - UI 觸發板檢測\nDESKTOP-9284 [CD] 規則：收集錄製統計資料\nDESKTOP-9285 [CD] 檢索授權擁有者和統計資訊\nDESKTOP-9286 [CD] 收集錄製的規則邏輯\nDESKTOP-9287 [CD] 建立功能標誌以啟用收集資料同意\nDESKTOP-9288 [CD] 建立背景工作以提取錄製以進行進一步收集\nDESKTOP-9289 [CD] 建立背景任務以將錄製上傳至資料湖\nDESKTOP-9290 [CD] 為收集資料同意建立快顯視窗\nDESKTOP-9312 MMC - 實現鏡頭修正校準和回饋的改進\nDESKTOP-9331 支援播放不包含視訊檔案的錄製\nDESKTOP-9339 新增檔案型虛擬相機\nDESKTOP-9346 MMC - 改進校準演算法 - 新增關於板距離的啟發式方法\nDESKTOP-9348 MMC - 改進測試\nDESKTOP-9350 MMC - 如果使用者退出分頁/設定則停止校準\nDESKTOP-9359 實現 Full Swing (FSG) Pro Studio 整合的重新連接功能\nDESKTOP-9363 [CD] 使用資料收集條件/定義建立 REST 端點\nDESKTOP-9364 實現力量板 COP 軌跡的濾波/平滑化\nDESKTOP-9385 [CD] 持續保存/管理收集的錄製\nDESKTOP-9386 [CD] 每日配額驗證\nDESKTOP-9391 [FPD] 3 - 將 SAM 整合到管道\nDESKTOP-9393 MMC - 校準品質明顯下降時應捨棄校準\nDESKTOP-9408 新增 X 軸和 Y 軸的扭矩 (力矩)\nDESKTOP-9415 [FPD] 5 - 研究模型的加密/解密\nDESKTOP-9417 改進授權控制中授權錯誤的顯示方式\nDESKTOP-9418 更新 Foresight SDK\nDESKTOP-9494 [FPD] 2 - 當使用者點擊觸發按鈕時擷取影像以執行自動偵測\nDESKTOP-9558 將 Bertec SDK 更新至最新版本\n錯誤修正 DESKTOP-4559 鍵盤快速鍵停止工作 / 使用拖放開啟揮杆後應用程式失去焦點\nDESKTOP-7521 DSGraphCreateScope.Dispose() 中的 NRE\nDESKTOP-7522 InsufficientDataHeuristic 中的 OverflowException\nDESKTOP-7969 當沒有內容時隱藏展開器 (例如在相機設定中)\nDESKTOP-8061 每次軟體重新啟動時必須重新登入 SC Online\nDESKTOP-8872 啟動時 NHibernate 崩潰，原因為子字串索引超出範圍\nDESKTOP-8973 檔案總管：Launch Monitor 篩選器中的撞擊係數最小值為 0.7，應為 0.0\nDESKTOP-9014 MotionCatalyst 一般設定：「啟用音效」核取方塊的快顯資訊欄應該被停用\nDESKTOP-9021 FLIR 相機的過度/不正確記錄\nDESKTOP-9046 研究：當使用者切換到螢幕上的另一個應用程式時，校準快顯視窗應該最小化\nDESKTOP-9065 標題功能表：「設定/說明/關於/結束工作階段」功能表在滑鼠懸停時應顯示提示\nDESKTOP-9066 Foresight：OnStatusData 回呼中的引數超出範圍例外\nDESKTOP-9067 檔案總管：部分按鈕在滑鼠懸停時需要額外的提示\nDESKTOP-9112 測試在 Rider 2023.1 中無法執行\nDESKTOP-9114 在使用亞洲語言/地區設定的系統上降噪著色器編譯失敗\nDESKTOP-9123 修正「找不到校準檔案」對話框中的 ODE\nDESKTOP-9138 匯出後清空匯出清單需要過多步驟\nDESKTOP-9143 關鍵指標資料方塊可能出現裁切/截斷\nDESKTOP-9146 修正群組編輯/建立快顯視窗中的捲動\nDESKTOP-9165 GoPro「網路攝影機」導致崩潰\nDESKTOP-9207 修正「啟用或停用連結播放」提示\nDESKTOP-9208 修正使用者建立時的電子郵件驗證\nDESKTOP-9225 在即時重播中繪圖可能導致卡在重播模式中\nDESKTOP-9235 MCSC - 給予星標 (我的最愛) 導致清單方塊項目跳動\nDESKTOP-9236 我的最愛運動圖示 (「星標」) 應在滑鼠懸停在作用中運動類型整個標題上時顯示\nDESKTOP-9238 改進壓力分佈橫條的放置位置\nDESKTOP-9239 許多單元測試未執行 (IsolatedProcess 類別)\nDESKTOP-9250 使用 2 個相機並使用 NVIDIA 編碼器時視訊編碼/儲存可能失敗\nDESKTOP-9252 使用雙力量板時跳台 COP 基準站姿不正確\nDESKTOP-9269 修正匯出時使用者名稱過長造成的重疊\nDESKTOP-9272 為關鍵指標「按鈕」新增提示\nDESKTOP-9279 對於使用這些觸發器的運動，應自動啟用離板跳起觸發器和力量峰值觸發器\nDESKTOP-9295 棒球 COP 資料在 10.0 和 10.1 版本間變化劇烈\nDESKTOP-9309 Ab3d.PowerToys v11.0.8585 授權已過期/不允許使用\nDESKTOP-9340 修正變更使用者邊距和選擇邏輯\nDESKTOP-9351 MMC - 修正網格在不應顯示時被繪製的問題\nDESKTOP-9356 離板跳起觸發器修正\nDESKTOP-9358 檔案總管中某些工作階段預設為隱藏\nDESKTOP-9376 Launch Monitor 資料方塊標題應為「Launch Monitor」而非「LaunchMonitor」\nDESKTOP-9379 課程錄製在處理/編碼課程時掛起\nDESKTOP-9388 若錄製沒有感測器數據，則不顯示體重下拉選單\nDESKTOP-9400 資料方塊選擇下拉方塊中的項目未按字母順序排序\nDESKTOP-9404 非常長的使用者名稱修正\nDESKTOP-9405 Vision Datum 相機在未設定自訂媒體類型時導致當機\nDESKTOP-9409 MMC - Camera Matrix 物件上的 AccessViolationException\nDESKTOP-9421 當麥克風觸發器啟用時，捕捉在體重測量前開始\nDESKTOP-9431 VideoSinkElementWPF.Dispose() 中的 TaskCanceledException\nDESKTOP-9432 Launch Monitor 識別碼使用不正確的屬性轉換為文字\nDESKTOP-9472 打開具有空白力資料的錄製時發生例外\nDESKTOP-9501 安裝程式：遠端支援快捷方式不正確\nDESKTOP-9512 若在播放期間捕捉來源變更，資料視覺化按鈕會變成停用\nDESKTOP-9568 鏡像和旋轉視頻角度不起作用\nDESKTOP-9594 [SDD] 修正 DD 旋轉\n10.2.4 於 2023 年 09 月 09 日以測試版發佈\n功能 DESKTOP-9418 更新 Foresight SDK 錯誤修正 DESKTOP-9416 自訂電子郵件設定無法運作 10.2.3 於 2023 年 08 月 17 日以測試版發佈\n功能 DESKTOP-9336 改善與 FullSwing ProStudio 的相容性 錯誤修正 DESKTOP-4559 鍵盤快捷鍵不再運作/使用拖放開啟揮杆後應用程式失去焦點\nDESKTOP-9021 FLIR 相機的過度/不正確記錄\nDESKTOP-9040 關閉應用程式時的 TaskCanceledException\nDESKTOP-9066 Foresight：OnStatusData 回呼中的引數超出範圍例外\nDESKTOP-9245 開啟設定後，使用者應保留在捕捉模式中，不再進行體重測量\nDESKTOP-9378 某些電子郵件提供者若已選取但未設定，可能在啟動時導致當機\n10.2.2 於 2023 年 08 月 14 日作為正式版發佈\n於 2023 年 07 月 26 日以測試版發佈\n功能 DESKTOP-9313 更新 ForeSight 標誌 (2023) 錯誤修復 DESKTOP-9106 UseCustomLivePressureFilterThreshold 被保存到所有 xml 檔案中\nDESKTOP-9114 在某些情況下，降噪濾波器會導致影片圖像無法顯示\nDESKTOP-9245 打開設置後，使用者應保留在捕捉模式中，無需再次量測體重\nDESKTOP-9252 使用雙力量板時，滑雪跳躍 COP 基礎站姿不正確\nDESKTOP-9253 在更改錄製的使用者之前，需要先通知使用者\nDESKTOP-9310 由於 Firebase 分析現有鎖定檔案導致啟動時崩潰\nDESKTOP-9323 P\u0026S 資料方塊針對左手使用者的基礎站姿方向不正確\nDESKTOP-9325 P\u0026S 資料方塊 CoP 基礎站姿略有不正確（針對 BP 和單一 MP）\n10.2.1 於 2023 年 7 月 3 日發佈為測試版\n史詩 DESKTOP-8717 [IDE2] 資料匯出設置對話框\nDESKTOP-8728 [NED] 桌面端新分析\nDESKTOP-8803 [PDB] - 壓力分佈條\n功能 DESKTOP-8948 可以更改錄製的使用者 錯誤修復 DESKTOP-8828 Foresight SDK：某些客戶連接設備時應用金鑰驗證失敗\nDESKTOP-8929 安裝程式構建成品不再具有正確的檔案名稱\nDESKTOP-9048 捕捉選項：「觸發器」標題一旦被點擊就會消失\nDESKTOP-9052 「開啟知識中心」按鈕應在知識中心開發完成前保持隱藏\nDESKTOP-9060 研究：版本 10.1 中的影片編碼格式已更改，導致客戶播放問題\nDESKTOP-9072 未校準板時，不應顯示壓力分佈\nDESKTOP-9105 修復雙壓力系統的初始元件版面配置檢測\nDESKTOP-9109 將多個揮杆匯出為原始資料時出現除以零/溢位異常\nDESKTOP-9116 修復版權年份\nDESKTOP-9132 當人離開地面時，壓力條負荷不應為 100%\nDESKTOP-9136 登入 SC Online 無法正常運作\nDESKTOP-9137 將「跟隨 COP」設為預設力向量行為\nDESKTOP-9142 ShaderCompilerCaching 中的競速條件會導致著色器加載失敗\nDESKTOP-9147 FV - 跟隨 COP 設置對棒球板效果不佳\nDESKTOP-9154 WPF 渲染執行緒失敗時關閉應用程式\nDESKTOP-9156 力向量在由上而下視角中無法正常運作，應隱藏\nDESKTOP-9162 ClockTicker 中的錯誤\nDESKTOP-9164 修復新的 Fox/Lynx 相機型號（第 2 代）\nDESKTOP-9168 視窗大小未被記住\nDESKTOP-9211 修復使用者變更取消\nDESKTOP-9213 改進體重測量彈出文字\nDESKTOP-9214 棒球板的原始資料匯出無法正確運作\nDESKTOP-9222 打開錄製時 CopSample 中出現 NRE\nDESKTOP-9226 分析後體重下拉選單消失\nDESKTOP-9230 資料庫移動功能在 10.1.5 版本中無法運作\nDESKTOP-9233 修復體重對話框無法開啟\nDESKTOP-9245 開啟設定後，使用者應保持在捕捉模式，無需再次稱重\nDESKTOP-9246 為壓力分佈條新增描述（「深入了解壓力分佈」）\nDESKTOP-9247 校準描述修正\nDESKTOP-9248 修復使用者站在板上時的壓力分佈條\n10.2.0 內部測試版本專用\n功能 DESKTOP-7397 將 Spinnaker SDK 更新至最新版本\nDESKTOP-8113 IDE2 - 實現新的圖形使用者介面 - 資料方塊\nDESKTOP-8490 更新 Bertec (Acquire) 力量板 SDK\nDESKTOP-8623 將衝量新增至 UnitsNET\nDESKTOP-8634 IDE2 - 圖形使用者介面 - 新出口配置對話框\nDESKTOP-8635 IDE2 - 調整 TSV 出口程序，僅根據配置進行出口\nDESKTOP-8636 IDE2 - 圖形使用者介面 - 檔案總管中的新出口列表\nDESKTOP-8637 IDE2 - 圖形使用者介面 - 變更 StackPanel 出口選項\nDESKTOP-8735 重構自動力量觸發器\nDESKTOP-8764 IBW - 1：為體重測量程序建立架構\nDESKTOP-8765 IBW - 4：在分析中使用測量的體重\nDESKTOP-8766 IBW - 3：即時體重測量顯示\nDESKTOP-8767 IBW - 1：為使用者體驗原型建立使用者介面元素/骨骼\nDESKTOP-8768 IBW - 4：在 KCS 中使用測量的體重\nDESKTOP-8769 IBW - 3：實現編輯功能和重新啟動稱重程序\nDESKTOP-8770 IBW - 2：建立體重測量演算法\nDESKTOP-8771 IBW - 4：在播放中實現體重編輯按鈕\nDESKTOP-8772 IBW - 3：將體重序列化至資料庫和錄製\nDESKTOP-8783 實現 UnitsNet 衝量數量\nDESKTOP-8793 更新遠端支援 Teamviewer\nDESKTOP-8800 ATM - 驗證目前的自動化\nDESKTOP-8801 ATM - 改進管道以向 Slack 報告錯誤\nDESKTOP-8813 [PDB] 1 - 使用目前選項實現資料視覺化選單\nDESKTOP-8814 [PDB] 2 - 將「壓力分佈」納入資料視覺化選單\nDESKTOP-8818 [PDB] 3 - 在檢視區中呈現壓力分佈\nDESKTOP-8830 調查 FlightScope 高爾夫聆聽器 SDK 的使用\nDESKTOP-8852 實現 UnitsNet 5.0 中運算子的變更\nDESKTOP-8858 IBW - 4：強制捕捉時進行稱重\nDESKTOP-8871 [BDC] 在資料湖中儲存錄製擁有者的識別碼\nDESKTOP-8904 [NED] 將目前的 GA 遷移至新格式\nDESKTOP-8912 在圖形資料方塊中新增離板跳起力峰值\nDESKTOP-8917 [NED] 從現有 SDK 遷移現有功能\nDESKTOP-8932 讓使用者可以關閉資料方塊中的「感測板上沒有人」警告\nDESKTOP-8942 更新至最新版本的 Microsoft.Graph nuget/SDK\nDESKTOP-8985 IBW：警告使用者手動編輯現有錄製的體重所帶來的後果\nDESKTOP-9022 在圖表中加入顏色以視覺化階段\nDESKTOP-9053 [PDB] 4 - 附加即時和播放模型以呈現壓力值\nDESKTOP-9082 更新 Foresight SDK\nDESKTOP-9104 [PDB] 5 - 從 VideoForceVectorVM 重構校準程序\nDESKTOP-9122 圖表中的階段：在設定中新增選項以突顯顏色\nDESKTOP-9125 更新使用 set-output 的管線\n錯誤修正 DESKTOP-5528 使用鍵盤快捷鍵時書籤無法正確設定\nDESKTOP-7388 模擬硬體無法正常運作\nDESKTOP-8786 使用未啟用任何活動類型功能旗標的授權時當機\nDESKTOP-8863 嘗試使用沒有設定檔圖片的 Microsoft 帳戶登入時出現錯誤\nDESKTOP-8866 TestUiThread 導致測試程序無法完成\nDESKTOP-8888 停止課程錄製時出現錯誤\nDESKTOP-8925 變更 LaunchMonitorNetworkRecevierBase 的記錄層級以避免過度記錄\nDESKTOP-8934 切換資料方塊後關鍵指標遺漏警告無法呈現\nDESKTOP-8943 UI 測試在管線環境中失敗\nDESKTOP-8963 IBW：修正在感測板組態中出現的體重對話框\nDESKTOP-8966 Fox / Lynx 相機裝置濾波器無法運作\nDESKTOP-9025 開啟具有手動觸發器的錄製時應用程式當機\nDESKTOP-9049 設定體重對話框通常需要兩次校準\n上次更新：2026-01-19 | 在官方支援網站上檢視",
    "description": "DESKTOP-11248：新增UI版面配置切換的快速鍵",
    "tags": [
      "Changelog",
      "Troubleshooting",
      "Flir",
      "Lynx-Camera"
    ],
    "title": "軟體版本更新日誌",
    "uri": "/sc-support/zh-hant/reference/changelog/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 參考",
    "content": "9.8.5 於 2022 年 8 月 29 日以測試版發佈\n於 2022 年 8 月 30 日以穩定版發佈\n錯誤修復 DESKTOP-8369 - MVS 未初始化。 9.8.4 於 2022 年 8 月 5 日以測試版發佈\n錯誤修復 DESKTOP-8264 關閉應用程式時當機（AccessViolationException） 功能 DESKTOP-8292 僅在掉幀數達 10 幀時才顯示掉幀警告 9.8.3 於 2022 年 7 月 20 日以穩定版發佈\n於 2022 年 7 月 8 日以測試版發佈\n功能 DESKTOP-8201 更新 NVIDIA 驅動程式修補程式以相容新驅動版本 (516.40) 錯誤修復 DESKTOP-8212 啟動時訊息對話框當機\nDESKTOP-8203 MVS - 首次執行應用程式時當機\nDESKTOP-8202 首次執行應用程式時當機 - Autofac\nDESKTOP-8191 Fox 相機預設使用 8 位元 ADC 以提升 FPS\nDESKTOP-8179 MVS - GigE 型號掉幀過多\nDESKTOP-7994 MVS - 變更曝光設定時影片/播放可能會卡住\n9.8.2 於 2022 年 6 月 20 日以測試版發佈\n功能 由於整合錯誤，我們已停用 ForeSight GC3 的支援。我們正在與 Foresight 合作以解決 SDK 中的錯誤，以盡快重新啟用此支援。\n錯誤修復 DESKTOP-8104 FLIR 相機缺少部分設定\nDESKTOP-8041 MVS - 變更乙太網路相機曝光快門時當機\nDESKTOP-7970 MVS - 重設相機設定導致當機\nDESKTOP-7965 MVS - ROI（Region of Interest）無法運作\nDESKTOP-7956 為 Imaging Source DFK 型號設定 Bayer 濾波器\nDESKTOP-7955 停止錄製後課程掛起。\nDESKTOP-7074 變更 DirectShow 相機設定時出現錯誤 (RefObjectDisposedException)\nDESKTOP-7025 由於存在更高版本，安裝程式相依性在某些情況下未被覆蓋\n9.8.1 於 2022 年 4 月 12 日以測試版發佈\n史詩 DESKTOP-6323 - 新增可顯示多個資料來源的圖表資料方塊\nDESKTOP-7587 - 改善 Imaging Source 相機支援\nDESKTOP-7846 - 新增 Foresight GC-3 支援\n功能 DESKTOP-6927 - 新增設定以停用音訊通知\nDESKTOP-7096 - 新增更多高爾夫球桿（挖起杆）\nDESKTOP-5928 - 改進比較模式中的連結/取消連結檢視區功能\n錯誤修正 DESKTOP-7564 - 不允許在捕捉/分析模式下刪除最後一個使用者\nDESKTOP-7400 - 高爾夫活動類型移除捕捉選項中的倒數計時器\nDESKTOP-4503 - 繪圖工具有時會從一個攝影機角度切換到另一個\nDESKTOP-7456 - 即時 COP 分析中發生當機（UpdateCopView 中的 ODE）\n影像來源攝影機 - 改進 DESKTOP-7581 - 某些 DirectShow 攝影機不允許配置媒體類型\nDESKTOP-7582 - 某些 DirectShow 攝影機顯示完全扭曲的影像\nDESKTOP-7590 - DirectShow 樣本擷取器未正確協商所需的媒體類型\nDESKTOP-7619 - 停止/啟動 DirectShow 攝影機時發生 ODE（MJPEG）\nDESKTOP-7641 - 當 DirectShow 攝影機被拔下時，所有其他 DS 攝影機停止工作\nDESKTOP-3097 - 在安裝校準檔案之前停止從壓力墊 / 平衡板串流\nDESKTOP-6999 - 使用相同的匯出圖示\nDESKTOP-7474 - 名字或姓氏不能包含空格\nDESKTOP-7479 - 第一次揮桿/錄製時沒有「準備好」通知\nDESKTOP-7281 - 匯出開始對話框中的文字錯誤\nDESKTOP-7312 - 力量板斷開連線通知中存在混合語言/不佳英文\nDESKTOP-7039 - 載入新圖表渲染時出現錯誤\n9.7.9 於 2022 年 3 月 21 日發佈為穩定版本\n於 2022 年 3 月 1 日發佈為測試版本\n錯誤修正 DESKTOP-7732 Foresight SDK/GC3 更新不起作用（已移除，不穩定的廠商 SDK，將在下一版本推出）\nDESKTOP-7550 應用程式在啟動時凍結（在啟動畫面期間）\n9.7.8 於 2022 年 1 月 6 日發佈為測試版本\n功能 DESKTOP-7170 新增對 ForeSight GC3 的支援\nDESKTOP-7296 使用 BodiTrak 時在資料方塊中新增垂直力支援\nDESKTOP-7461 改進 Trackman 延遲的處理\n錯誤修正 DESKTOP-7467 影片播放期間當機（AccessViolationException）\nDESKTOP-7429 左手受試者的壓力板百分比和腳印翻轉\nDESKTOP-7404 TrackMan 發球監測在捕捉期間失敗（所請求區間的數據不足）\n9.7.7 於 2021 年 12 月 15 日發佈為穩定版本\n於 2021 年 12 月 6 日發佈為測試版本\n功能 DESKTOP-7431 更新 Foresight 徽標\nDESKTOP-6942 更新 FullSwing 徽標\nDESKTOP-6913 將「更新已過期」通知連結到網路商店\n錯誤修正 DESKTOP-7410 Swing Catalyst 中出現 IDS Directshow 介面\nDESKTOP-7374 硬體裝置提供錯誤時間戳時，HardwareDataMonitor 出錯\nDESKTOP-7311 無法在新群組檢視中捲動使用者\nDESKTOP-7303 「診斷」重新導向至不存在的頁面 (404)\nDESKTOP-7162 拔下 DirectShow 攝像機時，應用程式可能會陷入例外/錯誤迴圈\nDESKTOP-5898 啟用快速緩衝編碼時，出現資料不足的錯誤提示\n9.7.6 於 24.11.2021 發佈為穩定版本\n於 16.11.2021 發佈為測試版\n已知問題 DESKTOP-7162 拔下 DirectShow 攝像機時，應用程式可能會陷入例外/錯誤迴圈\nDESKTOP-7404 TrackMan Launch Monitor 在捕捉期間失敗（請求區間資料不足）\n錯誤修復 DESKTOP-7348 瀏覽和安裝校準檔案不總是有效\nDESKTOP-7211 使用 Ctrl + 捲動來縮放影片影像會導致奇怪的縮放行為\nDESKTOP-7123 在輸入名稱/電子郵件時記錄傳送器崩潰\nDESKTOP-7107 關閉應用程式時崩潰 (ObjectDisposedException: 無法存取已處置的物件。)\nDESKTOP-7014 在評估錄製模式下無法使用手動觸發\n9.7.5 於 15.11.2021 發佈為測試版\n新功能 DESKTOP-7246 新增對雙平衡板/Motion Plate 5060 的支援\nDESKTOP-7336 對不支援外部校準檔案的裝置隱藏瀏覽/下載和安裝校準功能\n錯誤修復 DESKTOP-7333 Nvidia 工作階段限制修補程式在更新驅動程式後失敗\nDESKTOP-7267 Wix 安裝程式：將 Motion Catalyst 從 9.7.1 更新至 9.7.4 不起作用，程式仍在執行\nDESKTOP-7256 WindowsDeviceModel 中出錯：已移除的裝置不在內部清單中\nDESKTOP-7253 新圖表的垂直軸範圍不正確（缺少上/下間距）\nDESKTOP-7252 壓力和站姿 COP 百分比未遵循所選的視角\nDESKTOP-7242 已安裝驅動程式的 The Imaging Source 攝像機無法運作\nDESKTOP-7169 在錄製之間切換時書籤未被保存\nDESKTOP-7120 在測試集–選定的活動類型中滑鼠捲動無法運作\nDESKTOP-7056 連接某些類型的裝置時 Windows 裝置模型出錯（The Imaging Source 攝像機）\nDESKTOP-6817 BodiTrak：關閉感測板設定視窗時發生未處理的例外\n9.7.4 於 15.10.2021 發佈為測試版\n錯誤修復 DESKTOP-7118 雙 Motion Plate 的裝置版面配置設定不可見\nDESKTOP-7106 關閉 uEye 攝像機時出錯 (ObjectDisposedException: 安全控制代碼已關閉)\nDESKTOP-7094 SciChart 垂直和水平線的顏色錯誤\nDESKTOP-7087 VideoSourceManagementService 中崩潰 (ODE)\nDESKTOP-6997 力量圖表可見資料範圍可以縮小（更改書籤時），但無法增長\nDESKTOP-6976 GPU 記憶體/資源洩漏 (SharpDXException…記憶體不足…)\nDESKTOP-6956 下載並安裝平衡板 2 的校準文件導致文件被壓縮兩次，並導致 ArgumentNullException\n9.7.3 於 27.09.2021 發佈為測試版\n錯誤修復 DESKTOP-7029 新圖表渲染書籤階段垂直註解標籤偏移\nDESKTOP-7028 SciChart 目前位置標記位置錯誤\nDESKTOP-7027 新圖表渲染不再正確顯示「大」模式\nDESKTOP-7026 新圖表渲染比舊渲染更鋸齒狀/混疊\nDESKTOP-7019 新圖表渲染不顯示「零線」\nDESKTOP-7016 安裝程式允許在應用程式執行時更新，導致安裝損毀\nDESKTOP-6974 儲存含有 Launch Monitor 數據的捕捉時出錯 (InvalidOperationException: 無法儲存 ‘NaN’ 值。)\n9.7.2 於 20.09.2021 發佈為測試版\n功能 DESKTOP-6377 在安裝過程中安裝 FLIR 驅動程式\nDESKTOP-5977 在安裝過程中安裝 Bertec/MeasureX 驅動程式\n錯誤修復 DESKTOP-6991 沒有人在板上的 Dual Motion Plate 錄製會導致 GUI 凍結和速度變慢\nDESKTOP-6979 VideoPresenterRenderSource 中的 NRE\nDESKTOP-6978 硬體設定中的偵測版面配置即使在正確偵測後仍顯示警告\nDESKTOP-6970 力圖表對於目前位置顯示錯誤的 Newton/NewtonMeter 值\nDESKTOP-6961 嘗試載入「垂直力（按壓力）」資料方塊時出錯\nDESKTOP-6784 啟動相機時的 ODE\nDESKTOP-6706 縮放放大無法正常運作\nDESKTOP-5898 啟用快速緩衝時編碼會收到「接收的資料不足」錯誤通知\nDESKTOP-4621 捕捉模式版面配置在揮桿間隙間未被保存\n9.7.1（包含 9.6 的變更） 史詩 DESKTOP-6309 家庭版\nDESKTOP-5947 新設定\nDESKTOP-5920 啟動檢視改善/錯誤修復\nDESKTOP-5904 新增對雙 Motion Plate 的支援\nDESKTOP-5750 新增對 BodiTrak 設備的支援\nDESKTOP-5448 新圖表渲染 (SciChart)\nDESKTOP-5233 新增安裝程式 (使用 WiX)\n功能 DESKTOP-6361 新增圖表平移/縮放支援\nDESKTOP-6145 支援雙 Motion Plate 自動偵測和配置\nDESKTOP-6143 支援使用雙 Motion Plate 捕捉資料\nDESKTOP-5948 實現資料方塊 VM 中分析條目的基於 RefCount 的生命週期控制\nDESKTOP-5935 在堆疊和檔案總管中新增刪除鍵支援\nDESKTOP-5931 最佳化 DirectX 設備的使用\nDESKTOP-5927 優化應用程式中的一般執行緒使用\nDESKTOP-5916 改進開啟錄製的性能\nDESKTOP-5915 改進開啟錄製的穩定性\nDESKTOP-5879 雙力量板支援離板跳起和力量峰值觸發器\nDESKTOP-5810 啟動檢視 - 新增匯入按鈕\nDESKTOP-5752 新增對 BodiTrak2 Vector 裝置的支援\nDESKTOP-5751 新增對自動偵測 BodiTrak 裝置的支援\nDESKTOP-4475 在 Launch Monitor 設定中停用「已啟用」也會停用「用作觸發器」\n錯誤修正 DESKTOP-6794 CaptureInfoLable 和 CaptureInfoText 可能為空或 null\nDESKTOP-6789 如果在 Swing Catalyst 棒球模式中開啟高爾夫揮桿，下一次擷取顯示的活動類型為高爾夫揮桿\nDESKTOP-6783 校準檔案安裝成功對話方塊使用了錯誤的圖示\nDESKTOP-6731 所選繪圖工具的滑鼠遊標對所有工具來說並不正確\nDESKTOP-6627 某些活動類型串流一段時間後出現「收到的資料不足」\nDESKTOP-6623 關閉感測板設定對話方塊時出現錯誤對話方塊\nDESKTOP-6622 校準檔案遺失錯誤彈出視窗無法幫助使用者採取行動\nDESKTOP-6614 壓力板設定對話方塊顯示校準未載入，即使檔案已安裝\nDESKTOP-6330 減少來自 JumpOffTrigger 和 ForcePeakTrigger 的日誌垃圾資訊\nDESKTOP-6185 使用雙力量板硬體的錄製上傳和從線上下載時會遭到損壞\nDESKTOP-6184 雙力量板不支援 SkiJump Forward 角動量資料方塊\nDESKTOP-6182 使用 SkiJump 授權的全新安裝以錯誤的活動類型進行擷取\nDESKTOP-6181 安裝 SkiJump 授權時，力量板偵測螢幕使用後/前術語\nDESKTOP-6026 CaptureProgressUserControl（重放面板）在重放時變為黑色\nDESKTOP-5901 在比較模式中，填滿影片按鈕對兩個檢視區不起作用\nDESKTOP-5894 啟用非連結播放無法正常運作\nDESKTOP-5893 分析功能表活動類型選擇器與其他擷取按鈕分開動畫播放\nDESKTOP-5884 檢視區狀態面板活動類型選擇器已損壞/不顯示數值\nDESKTOP-5883 開啟錄製有時會導致運動（和其他屬性）被更改\nDESKTOP-5882 開啟錄製時發生死鎖\nDESKTOP-4854 差點數不能為負數\nDESKTOP-4553 我從線上下載錄製內容時，吐司通知提示「上傳」\nDESKTOP-5728 在使用 AMD CPU 的電腦上，擷取時會出現黑色控制台視窗\nDESKTOP-5720 DirectX 裝置當機/死鎖\nDESKTOP-5695 Spinnaker 相機在某些系統上停止採集時造成凍結\nDESKTOP-5882 開啟錄製時發生死鎖\nDESKTOP-5679 Bertec FP5250（52x49.5cm）力量板未被正確偵測\nDESKTOP-5651 建立新使用者或編輯現有使用者時出現錯誤。已為 SelectedSportsList 新增 null 檢查。\nDESKTOP-5601 52x49 雙板大小描述錯誤\nDESKTOP-5471 傳送課程錄製需要 CC 位址\nDESKTOP-5266 使用 Spinnaker 相機的相機設定中發生當機（AccessViolationException）\n9.5.3.33270 2021年3月11日星期四的測試版\n2021年4月13日星期二的公開版\n錯誤修正 DESKTOP-5266 - 使用Spinnaker相機時的相機設定當機(AccessViolationException)\nDESKTOP-5517 - 無法再選擇「空白」資料方塊\nDESKTOP-5571 - 變更/選擇不同項目時資料方塊不更新\nDESKTOP-5628 - 捕捉有時失敗(影片緩衝區的間隔內沒有幀)\nDESKTOP-5738 - 在播放時可能觸發錄製\n9.5.3.32970 2021年2月22日星期四的測試版\n錯誤修正 DESKTOP-5557 - 課程音頻問題可能會出現破裂/失真\nDESKTOP-5595 - 使用舊課程錄製功能時無法恢復課程錄製\nDESKTOP-5601 - 52x49雙力量板尺寸描述錯誤\nDESKTOP-5631 - 為每個接收到的樣本建立新的PressurePadView\nDESKTOP-5679 - Bertec FP5250 (52x49.5公分)力量板無法正確偵測\n9.5.1.32970 2021年1月25日星期一的測試版\n改進 DESKTOP-5089 - 變更捕捉模型緩衝以更早恢復緩衝\nDESKTOP-5189 - 新增精簡版授權支援\nDESKTOP-5210 - Spinnaker：若相機在錯誤的子網路/IP問題時提供回饋\nDESKTOP-5242 - 改進開啟錄製的效能\nDESKTOP-5317 - 將更多驅動程式/需求捆綁至安裝程式\nDESKTOP-5380 - 新增同時顯示背部/正面發力圖表的支援\nDESKTOP-5386 - 新增雙力量板50x60版面配置且具自動偵測功能的支援\nDESKTOP-5387 - 新增雙力量板分析(即時)的支援\nDESKTOP-5388 - 新增雙力量板分析(播放)的支援\nDESKTOP-5426 - 為壓力和站姿資料方塊新增相機視角選項\nDESKTOP-5429 - 新增受試者扭矩資料方塊\nDESKTOP-5430 - 新增雙力量板52x49.5版面配置且具自動偵測功能的支援\nDESKTOP-5443 - 將Spinnaker SDK更新至2.2.0.48\nDESKTOP-5459 - 允許點擊資料方塊標題版面配置圖示以切換背部/正面/合併檢視\n錯誤修正 DESKTOP-4621 - 捕捉模式版面配置在揮杆之間未被儲存\nDESKTOP-5129 - 將「刪除揮杆」重新命名為「刪除錄製」\nDESKTOP-5208 - 力量板校準時發生錯誤(ArgumentOutOfRangeException)\nDESKTOP-5275 - Spinnaker：變更相機設定時UserSetLoad中的AccessException導致相機鎖定\nDESKTOP-5307 - GCQuad：Swing Catalyst中沒有球桿數據可見,但設備上可見\nDESKTOP-5324 - Spinnaker：在捕捉模式下斷開FLIR USB相機時在相機設定清單中建立重複項目\nDESKTOP-5326 - 擷取期間拋出錯誤：ActiveCaptureModel.Dispose()：所有作用中的擷取都未完成!\nDESKTOP-5357 - Spinnaker：裝置斷開連線後相機仍留在相機清單中\nDESKTOP-5360 - 使用 Launch Monitor 擷取時出錯（NRE）\nDESKTOP-5364 - 對話方塊有時會出現在頂層視窗「下方」\nDESKTOP-5368 - 所有影片幀必須為相同像素目標檔案容器：(SourceFormat 為 null)\nDESKTOP-5396 - 開啟第二個錄製時，資料方塊加載掛起\nDESKTOP-5412 - 啟動時因與 OBS Virtual Cam 衝突而崩潰，沒有錯誤提示\nDESKTOP-5416 - 開始串流失敗快顯視窗的文本不正確\nDESKTOP-5447 - 在進階設定中按下硬體配置 - 序列包含多個匹配元素\nDESKTOP-5471 - 發送課程錄製需要 CC 地址\nDESKTOP-5475 - 棒球扭矩/z 力矩顯示異常值\nDESKTOP-5505 - Y 軸上的水平力顯示翻轉\nDESKTOP-5507 - 左手高爾夫球手 - 力量 X 水平圖表翻轉\nDESKTOP-5549 - 書籤快捷方式套用至所有已開啟的錄製\n9.4.4.32396 穩定版於 2020 年 12 月 7 日星期一發布\n測試版於 2020 年 11 月 11 日星期五發布\n改進 DESKTOP-5317 - 隨安裝程式一起提供更多驅動程式/依賴項 錯誤修正 DESKTOP-5175 - 暫停和繼續課程時，課程音訊悶沉/聽不見\nDESKTOP-5360 - 使用 Launch Monitor 擷取時出錯（NRE）\nDESKTOP-5382 - 相機初始化失敗時的過度執行緒睡眠\nDESKTOP-5412 - 啟動時因與 OBS Virtual Cam 衝突而崩潰，沒有錯誤提示\nDESKTOP-5416 - 開始串流失敗快顯視窗的文本不正確\nDESKTOP-5475 - 棒球扭矩/z 力矩顯示異常值\n9.4.3.31378 穩定版於 2020 年 10 月 23 日星期三發布\n測試版於 2020 年 9 月 11 日星期五發布\n主要功能 DESKTOP-5064 - 新增 GCHawk 支援\nDESKTOP-5066 - 新增平衡板 3 XL 感測板支援\nDESKTOP-5232 - 新增 FLIR Spinnaker SDK 和 BlackFly S 相機支援\n改進 DESKTOP-5210 - Spinnaker：若相機在錯誤子網路上提供回饋 / IP 問題\nDESKTOP-5292 - 改進設定封包大小過大與 NIC MTU 的回饋\nDESKTOP-3484 - 移除 Motion Catalyst 的 32 位元版本\nDESKTOP-4711 - 沒有平衡板的使用者應該能看到揮桿速度和節奏資料方塊\nDESKTOP-4918 - 修正擷取選項選單的工具提示\nDESKTOP-4977 - 改進擷取逾時情況下的日誌記錄（TimeoutException）\nDESKTOP-5026 - 優化壓力數據程式碼\nDESKTOP-5043 - 改進使用 NVENC 視訊編碼器時不支援 NVIDIA 驅動程式的錯誤回饋\nDESKTOP-5056 - 移除冗餘的自訂 WPF 插入符號\nDESKTOP-5076 - 擷取模型在擷取來源停止時建立擷取\nDESKTOP-5099 - 捕捉時發生崩潰，PrecisionClockSystemClock已釋放\nDESKTOP-5123 - 改用 Sentry 取代 Raygun 進行即時錯誤回報\nDESKTOP-5063 - 新增對來自 GCQuad/GCHawk 的無球桿數據錄製的支援\n錯誤修復 DESKTOP-5253 - FrameRateMeasurement 中出現錯誤 (ODE)\nDESKTOP-5287 - Spinnaker 相機可能陷入無反應/異常狀態\nDESKTOP-5307 - GCQuad：Swing Catalyst 中未顯示球桿數據，但裝置上可見\nDESKTOP-5309 - 關閉應用程式時出現錯誤 (Spinnaker：事件未註冊)\nDESKTOP-5324 - Spinnaker：在捕捉模式下斷開 FLIR USB 相機會在相機設定清單中建立重複項目\nDESKTOP-5329 - 相對扭矩值不正確（數值已四捨五入）\nDESKTOP-5357 - Spinnaker：裝置斷開連線後相機仍留在相機清單中\nDESKTOP-5359 - VideoStreamDecoder 中發生崩潰/記憶體損毀\nDESKTOP-5077 - 離板跳起觸發器 GetStandardDeviation 即使授權為高爾夫仍在執行\nDESKTOP-5193 - Bertec Acquisition 中出現錯誤 (ODE)\nDESKTOP-5223 - 在捕捉和播放中錄製揮桿一段時間後，所有資料方塊消失\nDESKTOP-5235 - RemoteLicenseService 中出現 TaskCanceledException\nDESKTOP-5250 - SentryErrorReporter.AllowSendEvent 中出現錯誤 (NRE)\nDESKTOP-5251 - SentryErrorReporterLimit.ReadFromFile 中出現錯誤 (IOException)\nDESKTOP-5252 - SentryErrorReporter.AllowSendEvent 中出現錯誤 (ArgumentException)\nDESKTOP-5254 - SentryErrorReporter.AllowSendEvent 中出現錯誤 (NRE)\nDESKTOP-5258 - Spinnaker：缺少 Frame Rate Auto 實作，導致相機重置後無法變更幀速率\nDESKTOP-5269 - 使用 SkyTrak 時釋放時出現日誌錯誤\nDESKTOP-5271 - 移除/展開 StartupModel.RunApplicationAsync() 中的例外\nDESKTOP-5274 - 某些 Spinnaker BlackFly S 型號始終恢復使用分塊\nDESKTOP-5275 - Spinnaker：UserSetLoad 中的 AccessException 在變更相機設定時鎖定相機\nDESKTOP-5277 - 捕捉多個錄製時力量板/平衡板超時/未收到數據\nDESKTOP-5282 - 力量板裝置 (Bertec) 可能經常被新增/移除\nDESKTOP-5283 - 如果資料庫很大，儲存新錄製/恢復緩衝速度很慢\nDESKTOP-5285 - 記錄方法名稱/檔案參數混亂\nDESKTOP-5286 - MeasureX 裝置中出現錯誤 (ODE)\nDESKTOP-5289 - FLIR/Point Grey 單色相機型號 (Spinnaker) 無法運作\nDESKTOP-5290 - 新增對 FLIR 乙太網路相機 (Spinnaker) 的大幀/封包大小支援\nDESKTOP-5291 - 時間戳不佳的影片幀未回報為遺漏的幀\nDESKTOP-5294 - 停止 (Spinnaker/FLIR) 相機可能無限期掛起\nDESKTOP-5296 - 開啟和關閉設定對話框時儲存相機設定時出現 NRE\nDESKTOP-5305 - FLIR/Point Grey (Spinnaker) 相機設定未正常更新\nDESKTOP-5211 - 連線至 FLIR 相機時出現錯誤 (Spinnaker (GenTL)：擷取偶爾失敗 (SPINNAKER_ERR_IO) 寫入至暫存器位址時出現錯誤：000C0004)\nDESKTOP-5215 - 透過電子郵件分享課程無法運作\nDESKTOP-5219 - 啟用 Launch Monitor 但未連線的手動觸發時發生崩潰 (NRE)\nDESKTOP-5231 - 如果開啟錄製失敗，資料方塊可能永遠消失\nDESKTOP-5239 - 捕捉時當機（ActiveCaptureModel.RemoveJob() 中的 ODE）\nDESKTOP-5246 - 捕捉時當機（在裝置時鐘漂移啟發式演算法中）\nDESKTOP-4869 - 已刪除的使用者仍可被使用\nDESKTOP-4875 - 資料庫路徑中的字體連字 / unicode 問題\nDESKTOP-4966 - FFEncoderProfile_H264_nvenc 無法套用修補程式，導致偵錯時啟動時鎖死\nDESKTOP-4982 - 由於影片接收器池中的不正確緩衝區處理而導致非受管例外\nDESKTOP-4988 - 刪除繪圖形狀時當機\nDESKTOP-5007 - Direct Show 攝影機接收 90 個影格後凍結\nDESKTOP-5011 - 4 個資料圖表的高度略有差異\nDESKTOP-5025 - 發送課程時，CC 或 TO 中無效電郵格式的警告僅在日誌中顯示\nDESKTOP-5028 - 使用 IDS uEye 攝影機進行捕捉可能因 System.ArgumentException: Value is not monotonically bigger than last value 而失敗\nDESKTOP-5028 - DSFilterEnumerator.Update() 的日誌洪泛\nDESKTOP-5032 - UniqueMachineIDGenerator 因「存取被拒」錯誤而失敗\nDESKTOP-5050 - 使用會丟棄影格的攝影機進行捕捉不再正確同步\nDESKTOP-5083 - Directshow: Logitech C920 收到的資料不足且在停止串流時未同步\nDESKTOP-5088 - 關閉 Swing Catalyst 時發生 InvalidOperationException\nDESKTOP-5090 - IDS: 在串流時變更像素時鐘值可能導致致命未處理例外\nDESKTOP-5092 - 除非重新啟動軟體，否則影片延遲功能無法運作\nDESKTOP-5095 - DirectShow / Halcon / 偵錯攝影機: 在串流影片 8 秒後，出現收到資料不足警告，SC 再次進入緩衝狀態\nDESKTOP-5100 - 修正角度繪圖工具的各種問題\nDESKTOP-5108 - PressureDataBuffer 中未處理的 ArgumentNullException\nDESKTOP-5138 - BP3s 可使用「下載並安裝校準檔案」\nDESKTOP-5174 - 新 GPU 編碼器可能因大型影片檔案導致播放緩慢/不順暢\nDESKTOP-5220 - 影像旋轉/翻轉等功能損毀（使用 DirectX 濾波時）\n9.3.2.29769 2020 年 4 月 3 日（星期五）\n已修正\nDESKTOP-5170 - 無法透過 Gmail 傳送大型課程 9.3.1.16388 2020 年 3 月 4 日（星期三）\n已修正\nDESKTOP-4846 - 按壓力的垂直力資料方塊未填滿整個資料方塊欄位\nDESKTOP-4914 - Google Oauth2 登入不再運作\nDESKTOP-4949 - SC 9.2 安裝程式在已安裝 .NET Framework 4.8 時仍嘗試下載並安裝\nDESKTOP-4980 - 校準已啟動，隨後力量板斷線。導致 ODE\nDESKTOP-4990 - WPF 綁定洩漏\nDESKTOP-5027 - 使用 IDS uEye 攝影機進行捕捉可能因 System.ArgumentExceptionMessage: Value is not monotonically bigger than the last value 而失敗\nDESKTOP-5028 - 訊息: DSFilterEnumerator.Update: 無法為 DirectShow 攝影機建立類別列舉器\nDESKTOP-5032 - UniqueMachineIDGenerator 因「存取被拒」錯誤而失敗\nDESKTOP-5038 - 捕捉時發生未處理例外:「CaptureModelExceptionType: FailedToStartBuffering」\nDESKTOP-5044 - NVENC 影片編碼器有時因「無法鎖定位元流緩衝區: 無效參數 (8)」而失敗\nDESKTOP-5045 - 捕捉錯誤（使用「物件的目前狀態使操作無效」監聽資料來源時出現錯誤）\nDESKTOP-5048 - 從播放過渡到直播串流 (捕捉) 的時間增加，導致軟體速度變慢\nDESKTOP-5050 - 使用會掉幀的攝影機進行捕捉時，不再能正確同步\nDESKTOP-5052 - Intel QuickSync (QSV) 無法與某些 DirectShow 攝影機配合使用\nDESKTOP-5078 - Point Grey Chameleon 斷開連線，導致嚴重例外。(f2cStopCapture Failed)\nDESKTOP-5079 - Launch Monitor：即使在設定中已停用，仍出現「裝置未連線」訊息\nDESKTOP-5094 - VideoSinkFrameQueue 的佇列在移除並處置幀時可能為空，導致嚴重 IOE\nDESKTOP-5095 - DirectShow / Halcon / Debug 攝影機：串流影片 8 秒後，出現資料接收不足警告，SC 進入緩衝狀態。\n改進\nDESKTOP-4449 - 調查從影片攝影機擷取 FPS \u003e 500 時的問題\nDESKTOP-4917 - 改進測試版本通知，警告升級風險\nDESKTOP-4963 - 自動將類別名稱+方法前綴新增至日誌陳述式\nDESKTOP-4994 - 最佳化力量板緩衝\nDESKTOP-5043 - 改進使用 NVENC 影片編碼器時不支援 NVIDIA 驅動程式的使用者錯誤回饋\nDESKTOP-5051 - 在 FFmpeg 呼叫中記錄使用的編碼器\nDESKTOP-5054 - 使用鍵盤快速鍵切換捕捉模式及開放式揮杆\nDESKTOP-5062 - 將 Foresight SDK 更新至最新版本 (v2.4.5.0)\n9.3.0.16037 2020 年 1 月 20 日星期二\n新功能\n更快的影片編碼。影片編碼現在使用 Swing Catalyst 執行所在電腦的圖形卡上的圖形處理單元 (GPU) 進行編碼。支援 Nvidia 和 Intel GPU，以及機器中弱 GPU 的 CPU 影片編碼。\n支援 Balance Plate 3s\n已修正\nDESKTOP-4791 - 上傳至 Swing Catalyst Online 失敗：「請求本文過大，超過允許的最大限制」\nDESKTOP-4873 - Halcon 攝影機 - 取得的影片幀可能有重複時間戳\nDESKTOP-4875 - 資料庫路徑中的字型連字 / unicode 問題\nDESKTOP-4882 - 無法為非 ASCII 影片檔案產生影片索引，導致無法開啟錄製內容\nDESKTOP-4895 - CaptureModel：「A Task was canceled」\nDESKTOP-4902 - 比較模式中檢視區 B 的資料方塊無法始終載入\nDESKTOP-4919 - 書籤同步工具無法同步所有書籤\nDESKTOP-4924 - 影片播放位置/幀有時無法正確顯示\nDESKTOP-4940 - VideoSourceConnectivityService.FindCameras() 擲回 NullReferenceException\nDESKTOP-4940 - CaptureModel 中的例外：「GetPercentBufferFull: _clock==null」\nDESKTOP-4962 - 更正 PressurePadDevicesModel 中的日誌前綴\nDESKTOP-4979 - 校準力量板時發生 ObjectDisposedException\nDESKTOP-4990 - 修復 WPF 繫結洩漏\nDESKTOP-5017 - WebCam 錯誤 - 「Graph does not have a StartTime set」\n改進\nDESKTOP-4892 - 升級內含的 Teamviewer QuickSupport\nDESKTOP-4965 - 支援從包含多個資料夾的目錄匯入錄製\nDESKTOP-4802 - 播放期間的性能改進\n9.2.0.15409 2019 年 12 月 9 日星期一\n新功能\n新增對 SkyTrak Launch Monitor 的支援\n新增對 Dragon (120 FPS) USB 相機的支援\n修復\nDESKTOP-4498 - 「裝置空間不足警告」未在GUI中顯示，僅在日誌中出現\nDESKTOP-4597 - DirectShow 錯誤處理因 Windows 更新而故障\nDESKTOP-4598 - 捕捉時發生例外：「Already have this timeline」\nDESKTOP-4613 - 在特定情況下缺少節奏和 Rhythm 資料方塊\nDESKTOP-4630 - 連接 Zebris / SAM Balance Lab 板時，平衡板 3 無法偵測\nDESKTOP-4646 - DPI 縮放比例未正確運作\nDESKTOP-4654 - 設定-\u003e硬體中的錯誤訊息有拼寫錯誤：「plateis」\nDESKTOP-4688 - 開啟錄製時，任務可能堆積並導致應用程式凍結\nDESKTOP-4719 - 資料方塊內容偶爾無法顯示\nDESKTOP-4740 - 開啟相機配置對話方塊如果無法連接相機可能導致當機\nDESKTOP-4744 - SC 線上登入時當機，未處理的例外：「This Freezable cannot be frozen」\nDESKTOP-4762 - 壓力測試播放時出現 FileLoadException 和 FileNotFoundException\nDESKTOP-4778 - BaseDataboxGraphVM 和 CenterOfPressureTracePlaybackVM 中發生 ArgumentNullException，隨後出現多個 ODE\nDESKTOP-4781 - 壓力測試 DataBoxSwingDynamicsVM 時出現 ODE\nDESKTOP-4783 - 如果索引檔案以不同版本建立，影片播放可能失敗\nDESKTOP-4790 - 重設檢視區 B 的書籤無法運作\nDESKTOP-4792 - CaptureModel 無法正確處理捕捉源無法開始緩衝的情況\nDESKTOP-4794 - 預覽啟動失敗導致應用程式當機\nDESKTOP-4811 - 拖放操作後軟體有時無回應\nDESKTOP-4843 - DirectShow 相機未正確報告丟棄的幀\nDESKTOP-4844 - 高幀率 DirectShow 相機無法正確編碼\n改進\nDESKTOP-4614 - 進一步最佳化 WPF 影片呈現\nDESKTOP-4670 - 揮桿的原始資料匯出使用錯誤的命名法：體重轉移\nDESKTOP-4704 - 用停用 Launch Monitor 的選項取代捕捉選項中的核取方塊\nDESKTOP-4730 - 透過分別呈現背景來改進資料方塊圖表性能\nDESKTOP-4741 - 一般（播放導向）性能最佳化\nDESKTOP-4777 - 將應用程式更新為 .net 4.8\nDESKTOP-4788 - 變更無效授權訊息\n9.1.2.14915 2019 年 10 月 14 日 (星期五)\n修復\nDESKTOP-4601 - 在播放模式時如有觸發器，Swing Catalyst 會恢復緩衝\nDESKTOP-4612 - Swing Catalyst 在錄製揮桿時偶爾會凍結\nDESKTOP-4634 - 感測板設定中缺少取樣率\nDESKTOP-4643 - 棒球：在板自動偵測時選擇是會出現空值\nDESKTOP-4644 - 棒球：力量板有時會方向顛倒（交換方向）\nDESKTOP-4649 - TakeVM 中的記憶體洩漏，開啟錄製時分配/洩漏球桿菜單項目\nDESKTOP-4650 - 通過儲存/重複使用建立的關鍵幀索引來優化影片檔案的開啟\nDESKTOP-4655 - 免費試用按鈕連結無效\nDESKTOP-4658 - 開啟錄製時資料方塊濾波處理中的記憶體洩漏\nDESKTOP-4660 - 播放/預覽不同影片檔案時的記憶體洩漏\nDESKTOP-4668 - BaseballProtocolAnalysis 中的 OverflowException\nDESKTOP-4667 - 在設定模式下拔下 BP 時 SC 當機\nDESKTOP-4668 - 開啟錄製時出現死鎖\nDESKTOP-4669 - 開啟錄製時出現多個記憶體洩漏\nDESKTOP-4683 - 開啟錄製時，資料方塊有時無法正確顯示\nDESKTOP-4685 - 在設定模式下反覆拔插 BP 後點擊播放時 SC 當機\nDESKTOP-4687 - 開啟影片檔案時的記憶體洩漏（ffms2 索引子物件）\nDESKTOP-4695 - 棒球書籤分析對右手使用者失敗\nDESKTOP-4697 - 某些棒球錄製的資料方塊完全不顯示\nDESKTOP-4701 - 開啟多個錄製時拋出未處理的例外\nDESKTOP-4707 - PointGreyAcquisitionScope.Dispose() 中的 NullReferenceException\nDESKTOP-4709 - SubscribeSafe 中未處理的 ObjectDisposedException\nDESKTOP-4722 - 棒球：扭矩圖表顛倒\nDESKTOP-4724 - 在特定情況下無法變更資料方塊\nDESKTOP-4728 - 比較模式：檢視區 B 的資料方塊未更新\nDESKTOP-4732 - 應用程式啟動時記錄中出現授權相關錯誤\nDESKTOP-4735 - 比較模式：從檢視區 A 選擇時資料方塊在檢視點之間同步，但不應該同步\nDESKTOP-4738 - 左手棒球選手的前板 X軸反向\nDESKTOP-4755 - BaseDataboxGraphVM 和 CenterOfPressureTracePlaybackVM 中的 ODE，後面還有多個 ODE\nDESKTOP-4758 - 棒球記錄中僅來自一個力量板的力資料的未處理 ArgumentException\nDESKTOP-4759 - 壓力測試播放時 PlaybackModel 中的 ODE\nDESKTOP-4760 - 力量 X、Y 和 Z 圖表資料方塊中的「Optional 無值」\nDESKTOP-4761 - 嘗試關閉攝影機時的 ODE\nDESKTOP-4642 - 設定子系統需要在檔案系統存取上進行鎖定\n9.1.1.13560 週三，2019 年 7 月 31 日\n已修復\nDESKTOP-4583 - PerfMapper：「已新增具有相同金鑰的項目。」\nDESKTOP-4564 - 在緩衝期間重新連接影片攝影機時，即時影像保持黑色\nDESKTOP-4552 - 當使用者數量很多時，從 Online 下載時儲存按鈕被隱藏\nDESKTOP-4550 - 連接/斷開力量板時當機\nDESKTOP-4547 - 拔下 AVT 攝影機時的 ODE\nDESKTOP-4487 - DpiAwareWindow 在 DisableWpfScaling() 中失敗\nDESKTOP-4454 - IDS uEye 攝影機因無效的 Region of Interest 設定而停止工作\n9.1.0.13278 2019 年 7 月 1 日（星期一）\n新功能\n棒球多板數據分析\n設定 -\u003e 硬體中平衡板的自動偵測\n已修復\nDESKTOP-3788 - 播放：按住方向鍵逐幀步進不再有效\nDESKTOP-3952 - FFmpegProbeJob：「InvalidOperationException：工作只能在完成狀態下銷毀（RanToCompletion、Faulted 或 Canceled）」\nDESKTOP-3961 - 編碼課程出現問題時向終端使用者提供回饋\nDESKTOP-4011 - 連接兩個力量板且兩者都需要校準時，會顯示兩個校準警告，應該只顯示一個警告\nDESKTOP-4046 - 僅匯出為影片不會建立任何檔案\nDESKTOP-4150 - 電郵分享：自動完成方塊隱藏了「收件人」和「副本」欄位\nDESKTOP-4202 - 攝影機旋轉時設定中沒有視覺標記\nDESKTOP-4205 - 切換硬體後錯誤訊息仍然保留\nDESKTOP-4216 - 跳台滑雪 - 儘管選擇了英制單位，前向角動量和垂直速度仍以公制顯示\nDESKTOP-4217 - 棒球播放模式下無壓力和站立數據\nDESKTOP-4222 - 棒球 - 資料方塊下拉列表 - X 和 Y 上的壓力中心缺少軸後的「 」\nDESKTOP-4236 - 即使使用者未使用繪圖工具，橡皮擦仍保持選中狀態\nDESKTOP-4239 - 未連接硬體時，即時預覽中顯示壓力和站立資料方塊\nDESKTOP-4250 - 使用跳台滑雪授權時，棒球中心感測板可見\nDESKTOP-4254 - 具有壓力板的棒球：準備捕捉 - 壓力和站立資料方塊在感測板和組合板之間閃爍\nDESKTOP-4255 - 具有壓力板的棒球：感測板 \u003e 設定 \u003e 設定無法正確開啟\nDESKTOP-4256 - 扭矩資料方塊缺少百分比資訊\nDESKTOP-4257 - 具有壓力錄製的棒球：儘管沒有人在錄製上，壓力和站立仍顯示微小運動\nDESKTOP-4258 - 書籤相關文字使用高爾夫揮桿書籤的名稱而非棒球\nDESKTOP-4260 - CoP-X 和 CoP-Y 資料方塊的最大值和最小值都可以是 100%\nDESKTOP-4261 - 從具有壓力設定的棒球中移除平衡板會拋出未處理的例外狀況\nDESKTOP-4263 - 壓力和站立 - 即時預覽 - COP 在版面配置外呈現並旋轉 90 度\nDESKTOP-4264 - 壓力和站立 - 即時預覽 - 每足位置的 COP 位置錯誤\nDESKTOP-4265 - 壓力和站立 - 即時預覽 - COP 閃爍\nDESKTOP-4266 - 壓力和站立 - 即時預覽 - 基本站姿位置錯誤\nDESKTOP-4268 - 壓力和站立 - 站姿條在開始即時預覽前出現\nDESKTOP-4270 - 從具有壓力的棒球切換到棒球會停用裝置\nDESKTOP-4271 - 棒球 - 力資料方塊缺少無人在板上之錄製的資訊\nDESKTOP-4272 - 無感測板的錄製日誌資訊需要改進\nDESKTOP-4273 - 關於方塊：按一下 NVIDIA 連結時沒有任何反應\nDESKTOP-4276 - GUI - 力資料旋轉圖示和文字需要更新\nDESKTOP-4285 - 後力量板在棒球設定中旋轉 180 度\nDESKTOP-4288 - 「足趾/腳跟」和「左/右」對於棒球是相反的\nDESKTOP-4289 - 在比較模式中，後板和前板的順序在兩個檢視中相反\nDESKTOP-4290 - 跳台滑雪 - 可偵測具有壓力版面配置的棒球，然後應用程式關閉\nDESKTOP-4291 - 棒球和具有壓力的棒球下拉選項並非總是可用\nDESKTOP-4302 - ReactiveUI 中未處理的例外狀況導致硬當機\nDESKTOP-4305 - 設定中的旋轉標記在力量板和平衡板之間不一致\nDESKTOP-4313 - 「此 PlotModel 已被其他 PlotView 控制項使用」\nDESKTOP-4314 - 棒球設置：捕捉選項\\觸發器中出現 Launch Monitor\nDESKTOP-4315 - 使用高爾夫許可證的棒球設置在啟動自動偵測時導致應用程式崩潰\nDESKTOP-4316 - 開啟棒球錄製時關閉 Swing Catalyst 發生錯誤\nDESKTOP-4318 - 資料方塊中的警告不一致\nDESKTOP-4335 - MP5 缺少 CoP-X 和 CoP-Y 資料方塊\nDESKTOP-4337 - 滑雪跳躍 - 為足部尺寸和質量中心新增限制條件\nDESKTOP-4344 - 相機重新連接時出現相機重複\nDESKTOP-4351 - 如果未偵測到人員，資料方塊中的選項按鈕應隱藏\nDESKTOP-4368 - 力量板的自動偵測可能導致應用程式崩潰\nDESKTOP-4369 - 無法變更 IDS 相機解析度\nDESKTOP-4379 - 「無法存取已處置的物件。物件名稱：‘VideoSinkPoolBase’。」\nDESKTOP-4392 - 棒球設置圖形表示不對齐\nDESKTOP-4394 - 棒球：COP 在即時預覽和配置模式中位置錯誤\nDESKTOP-4401 - 某些擁有有效更新和支援計畫的客戶在更新後無法執行 9.0\nDESKTOP-4407 - 在檢視區 B 中新增錄製時比較模式無法運作\nDESKTOP-4411 - 在主功能表頁面時拔出 1 個力量板會關閉 SC\nDESKTOP-4413 - 棒球協議分析（書籤）不夠穩健\nDESKTOP-4435 - 「RX 分析項目發生錯誤 =\u003e VM 轉換鏈：Optional 沒有值」\nDESKTOP-4436 - 壓力和站姿。COP 軌跡顯示在板邊界外\nDESKTOP-4439 - BP2 和 MP5 的緩衝檢視中未顯示壓力和站姿資料方塊\nDESKTOP-4453 - 使用高爾夫許可證時，棒球感測板在感測板下拉式功能表中可用\nDESKTOP-4459 - 「無法載入計數器名稱資料，因為從登錄讀取了無效索引」\nDESKTOP-4462 - InvalidOperationException：「無法找到裝置的核心音訊 ID」\nDESKTOP-4470 - 透過偵錯檢視器啟用自訂濾波器不會變更或影響 BP\nDESKTOP-4471 - .NET Framework 先決條件在某些電腦上安裝失敗\nDESKTOP-4478 - 緩衝丟棄幀啟發式演算法無法運作\nDESKTOP-4485 - 校準失敗在 GUI 中不提供警告\nDESKTOP-4486 - 相機設定清單中的相機預覽影像被裁剪\nDESKTOP-4493 - 重播播放速度在揮桿之間未被記住\nDESKTOP-4504 - 校準時發生 NotImplementedException\nDESKTOP-4510 - 修正初始板方向\nDESKTOP-4515 - 壓力板在棒球配置中旋轉 180 度\nDESKTOP-4534 - 校準時發生未處理的例外狀況\nDESKTOP-4548 - 從課程分享電子郵件的電子郵件正文中移除「做得很好！」文本\n改進\nDESKTOP-3921 - 感測板偵測螢幕現在可偵測平衡板和 Motion Plate\nDESKTOP-4058 - 將現有圖表資料方塊選項/核取方塊移至資料方塊選項功能表\nDESKTOP-4267 - 在具有「合併資料」的圖表資料方塊中，合併圖表應為預設值\nDESKTOP-4277 - 支援多平臺設置中所有 FP/PP 裝置的旋轉/翻轉變換\nDESKTOP-4278 - 為繼續捕捉新增快速鍵\nDESKTOP-4280 - 改進裝置版面配置未正確偵測/配置時的錯誤處理\nDESKTOP-4325 - UI：更新說明對話框\nDESKTOP-4346 - 改進捕捉緩衝進度條的平順度\nDESKTOP-4390 - 新增圖示表示資料方塊中顯示的是哪個平臺的數據\nDESKTOP-4502 - 儲存資料方塊中顯示的平臺設定\nDESKTOP-4508 - 支援將書籤重設為預設分析\nDESKTOP-4057 - 為壓力板渲染新增內邊框，以視覺化壓力區域\n9.0.1.12906 2019年5月7日（星期二）\n已修正\nDESKTOP-4487 - DPI 識別感知視窗失敗\nDESKTOP-4476 - DirectShow 攝影機自動模式控制無法運作\nDESKTOP-4446 - 傳送超過 2 分鐘的課程導致例外狀況\nDESKTOP-4379 - 「無法存取已處置的物件。物件名稱：VideoSinkPoolBase」\nDESKTOP-4380 - VideoDevice：「並非所有物件都已釋放」\n9.0.0.12603 2019年4月1日（星期一）\n新功能\n設定 → 硬體中感測板的自動偵測\n支援新運動：棒球\n支援多感測板：2 個力量板，以及 2 個力量板 + 1 個壓力墊。多平臺支援僅適用於棒球\n新的圖形主題\n已修正\nDESKTOP-3142 - 影片檢視區有時會卡住並顯示黑屏\nDESKTOP-3767 - 串流時斷開攝影機連接可能導致應用程式當機\nDESKTOP-3806 - 捕捉模式和播放中的攝影機角度顛倒\nDESKTOP-3909 - 捕捉失敗，攝影機相關錯誤：「ReadyToCaptureHelper != null」\nDESKTOP-3916 - 重新插入力量板或平衡板時，裝置斷開連接訊息仍然出現在捕捉模式中\nDESKTOP-3954 - 編輯並關閉群組時，焦點移到下面的群組/使用者\nDESKTOP-3955 - 課程音訊麥克風無法變更（預設回到清單中最上面的裝置）\nDESKTOP-3960 - 編碼課程時發生 FFmpegException\nDESKTOP-3963 - 評分篩選行為與其他篩選不一致\nDESKTOP-3965 - 多個平臺的力量板裝置通知失敗\nDESKTOP-3983 - 將壓力墊替換為力量板後，仍顯示壓力墊未連接的警告\nDESKTOP-4000 - 首次安裝時，設定中已選取麥克風選項，但使用者必須選擇要使用的麥克風\nDESKTOP-4010 - AVT Prosilica 曝光和增益設定無法編輯\nDESKTOP-4015 - 「工作的例外狀況未被觀察，既未透過等待工作進行，也未存取其例外狀況屬性。結果，未觀察的例外狀況由最終化工具執行緒重新擲回。」\nDESKTOP-4020 - 使用已處置的原生影像導致原生/非受控當機\nDESKTOP-4022 - 重現並修正設定中的重複攝影機\nDESKTOP-4028 - 感測板診斷按鈕導向 404 頁面\nDESKTOP-4047 - 診斷按鈕無法啟動 SensorEdge 應用程式\nDESKTOP-4048 - 4 台 Point Grey Blackfly 攝影機與 Motion Plate 的同步問題\nDESKTOP-4147 - 啟動應用程式時發生 NullReferenceException\nDESKTOP-4149 - 選擇英制系統時 COP速度資料方塊的測量單位不匹配\nDESKTOP-4159 - 前向角動量資訊框中缺少「最大值時機」的說明\nDESKTOP-4206 - 建立使用者時電子郵件驗證不完整\nDESKTOP-4207 - 平衡板 2 的即時預覽讀數不準確\nDESKTOP-4208 - 捕捉選項中的觸發器子選單未更新\nDESKTOP-4217 - 儘管選擇了英制系統，但垂直速度仍以公制顯示數據\nDESKTOP-4219 - 使用 Manta 時：「序列不包含任何元素」\nDESKTOP-4220 - 使用 Blackfly 時：InnerException(1): System.NullReferenceException\nDESKTOP-4221 - 使用 IDS PoE 攝影機時發生崩潰\nDESKTOP-4223 - 繪圖面板 - 選擇工具行為不一致\nDESKTOP-4238 - 未處理的例外狀況導致 6 個錯誤訊息彈出且系統崩潰\nDESKTOP-4241 - 高爾夫的垂直力 - Z 軸資料方塊圖表不正確\nDESKTOP-4242 - 錄製後播放在播放時凍結\nDESKTOP-4243 - Launch Monitor「啟用」核取方塊狀態始終為啟用且不被記憶\nDESKTOP-4245 - 使用 Foresight FSX (GC2) 和 4 台 Blackfly 錄製揮桿會導致硬體崩潰\nDESKTOP-4279 - 在比較模式中檢視區 B 的錄製中可選擇運動類型會導致 SC 崩潰\nDESKTOP-4292 - 棒球和高爾夫的垂直力 (Z 軸) 零點應為 100%（例如體重）\nDESKTOP-4306 - AOL 郵件無法運作\nDESKTOP-4317 - 使用壓力墊和力量板時發生 NullReferenceException\nDESKTOP-4355 - HomeMenuVM / DrawControl：「呼叫執行緒無法存取此物件，因為另一個執行緒擁有該物件。」\nDESKTOP-4361 - 傳送電子郵件按鈕呈灰色\nDESKTOP-4364 - 透過電子郵件傳送課程時「寄件者」不能為空\nDESKTOP-4375 - 左手球手的水平力圖表符號錯誤\nDESKTOP-4380 - VideoDevice：「並非所有物件都已釋放」\nDESKTOP-4382 - PressureDataBufferFiltered 中發生 NullReferenceException\nDESKTOP-4387 - 壓力垂直力圖表的起點錯誤\nDESKTOP-4391 - 重新啟動 Swing Catalyst 時 Launch Monitor 延遲會重設\nDESKTOP-4395 - 從 SC 呼叫診斷工具時移除啟動參數\nDESKTOP-4396 - 從 BP3 感測板設置中移除下載和安裝按鈕\nDESKTOP-4400 - 修正使用多個力量板時的體重計算\n改進\nDESKTOP-2045 - 使用 OAuth 進行 Gmail 登入\nDESKTOP-3065 - 將 Teamviewer 快速支援升級至 13.2.26558.0 版本\nDESKTOP-3953 - 應限制使用者資訊中的障礙指數值\nDESKTOP-4006 - 填入資料方塊的空資訊框\nDESKTOP-4310 - 刪除群組最後一個使用者時的警告\nDESKTOP-3969 - 實作「檢查更新」按鈕使其正常運作\n外部軟體需求\nForesight FSX。所需版本為 3.0 或更新版本 8.0.5.12067 2019年2月5日（星期二）\n已修正：\nDESKTOP-4022 - 設定中出現重複的攝影機 8.0.4.10901 2018年11月12日（星期一）\n已修正：\nDESKTOP-3888 - 嘗試匯入不相容的錄製版本時未顯示訊息\nDESKTOP-3955 - 課程音訊麥克風無法變更\nDESKTOP-3997 - 修正損壞的Google Analytics整合\nDESKTOP-4010 - AVT Prosilica曝光度和增益設定無法編輯\nDESKTOP-4019 - 修正遺失的壓力條\nDESKTOP-4038 - 確保不支援的壓力板不會顯示\n8.0.3.10512 2018年10月17日（星期三）\n改進：\nDESKTOP-3889 - 如果已在「A」中，無法重新開啟堆疊中的揮杆\nDESKTOP-3887 - 在工作階段中首次點擊錄製時，上傳按鈕會停用\n已修正：\nDESKTOP-3899 - Fullswing E6 連接不穩定\nDESKTOP-3882 - 8.0 啟動當機\nDESKTOP-3880 - Foresight GC2 需要重新啟用才能連接\nDESKTOP-3875 - 匯出錄製/堆疊為原始資料失敗\nDESKTOP-3869 - COP速度圖表在X軸上鏡像\nDESKTOP-3863 - 可以建立兩個或多個同名群組\nDESKTOP-3862 - 只有在啟動Swing Catalyst時已選擇設定，Trackman才會顯示為已連接\nDESKTOP-3847 - Halcon攝影機設定未被保留，即使它們已啟用\nDESKTOP-3846 - Halcon：關閉攝影機設定時發生ObjectDisposedException\nDESKTOP-3827 - 擷取後出錯：找不到路徑的一部分\nDESKTOP-3820 - 為Halcon攝影機開啟設定時當機\nDESKTOP-3800 - Halcon攝影機設定不可見\nDESKTOP-3797 - 影片：無法存取已處置的物件\nDESKTOP-3759 - 覆寫磁碟上的課程時未顯示警告\nDESKTOP-3721 - 使用Halcon時，攝影機設定清單中有空項目\nDESKTOP-3308 - 磁碟空間不足時移除「…並當機」訊息\nDESKTOP-3051 - 電子郵件品牌預設名稱為「Studio」\nDESKTOP-3733 - MeasureX SDK：「信號量逾時期間已過期。」\n8.0.2.10144 2018年7月30日（星期一）\n改進：\nDESKTOP-3432 - 連接/開啟攝影機失敗未正確處理 已修正：\nDESKTOP-3232 - 相機斷開連接後，從 AVT (Manta) 相機捕捉時發生 ObjectDisposedException\nDESKTOP-3272 - 結束工作階段時 AVT/PvAPI 中發生 ObjectDisposedException\nDESKTOP-3461 - 學生名字包含特殊字元時，錄製的導出可能失敗\nDESKTOP-3606 - Fullswing E6 整合在 8.0 版本中不適用（沒有足夠的數據可供捕捉）\nDESKTOP-3715 - 錄製數據 data.xml 中的 Unicode 編碼損壞\nDESKTOP-3734 - 壓力板超時\nDESKTOP-3735 - “無法為給定的 ID 建立串流器”，隨後應用程式崩潰\nDESKTOP-3739 - COP “點” 在回放模式/錄製後可見（不應顯示）\nDESKTOP-3781 - 壓力和站姿資料方塊僅使用壓力數據\nDESKTOP-3795 - 啟動 Swing Catalyst 時 Launch Monitor 始終顯示未啟用，儘管之前已選擇過\n8.0.1.9744 2018 年 7 月 4 日（星期三）\n摘要\nDESKTOP - 升級至 Bertec SDK 2.0 版本\nDESKTOP - 升級至 Foresight GCQuad SDK 2.1.71 版本\nDESKTOP - 安裝程式現在會建立桌面圖示\nDESKTOP - Halcon 改進\nDESKTOP - 球桿選擇菜單不再意外關閉\n8.0.0.9528 2018 年 6 月 12 日（星期二）\n摘要\nDESKTOP - 支援 Foresight GCQuad Launch Monitor\nDESKTOP - 新增課程模組\nDESKTOP - 眾多大小功能增強和錯誤修復\n新增：\nDESKTOP-2828 - 支援 ForeSight GCQuad Launch Monitor\nDESKTOP-2639 - 新增 COP-Y 圖表資料方塊\nDESKTOP-2638 - 新增 COP-X 圖表資料方塊\nDESKTOP-2370 - 跨工作階段保留堆疊\nDESKTOP-2361 - 測量繪圖工具\nDESKTOP-2360 - 在分析模式中快速訪問相機設置\nDESKTOP-2312 - 將 SensorEdge 診斷工具整合至軟體\nDESKTOP-2297 - 支援 Bertec 平衡（力量）板\nDESKTOP-2296 - 為學生列表新增排序清單圖形介面\nDESKTOP-2231 - 支援匯出力資料（原始數據匯出）\nDESKTOP-2222 - 支援匯出聯繫資訊\nDESKTOP-2171 - 透過從力量板跳起來觸發捕捉（離板跳起觸發）\nDESKTOP-2135 - 支援 Foresight FSX 2.0\nDESKTOP-1877 - 從應用程式內啟動 TeamViewer/遠端支援\nDESKTOP-1786 - 快捷鍵：空格鍵用於手動觸發\nDESKTOP-1717 - 當相機丟失幀以及其他問題時顯示警告\nDESKTOP-1615 - 新增對 FSX 2 HMT 數據的支援\nDESKTOP-1430 - 新增使用者設定以調整視窗 DPI/縮放乘數\nDESKTOP-1331 - 支援每個監視器的 DPI 設定\nDESKTOP-821 - 在授權對話框中新增重新整理按鈕\nDESKTOP-286 - 按姓氏或名字排序高爾夫球手的選項\n改進：\nDESKTOP-1674 - 在檔案總管視窗中新增視覺回饋，顯示目前選定的工作階段\nDESKTOP-2037 - 未設定書籤時顯示力量圖表\nDESKTOP-2102 - 定期刷新線上視窗中的內容\nDESKTOP-2147 - 在設定中移動視窗時還原/最大化視窗\nDESKTOP-2254 - 視訊攝影機在捕捉期間故障時自動恢復捕捉（緩衝）\nDESKTOP-2259 - 捕捉裝置未同步時顯示警告\nDESKTOP-2272 - 檔案總管：展開工作階段時自動選取工作階段中的第一筆錄製\nDESKTOP-2304 - 使對話框不總是在最上層\nDESKTOP-2404 - 將 FFmpeg 更新至 3.1 版本\nDESKTOP-2435 - 改進 Swing Explorer 更新回應速度\nDESKTOP-2466 - 反轉堆疊順序\nDESKTOP-2518 - 學生清單：按名字排序，再按姓氏排序\nDESKTOP-2530 - 改進資料方塊圖表的效能\nDESKTOP-2548 - 新增支援 52 度挖起杆\nDESKTOP-2987 - 新增 ForeSight GCQuad 球軌跡支援（飛行方程式 API）\n修正：\nDESKTOP-1550 - 課程螢幕擷取在高 DPI 系統上無法捕捉整個螢幕/視窗\nDESKTOP-1714 - Halcon 有時無法重新啟動緩衝\nDESKTOP-1960 - 課程螢幕擷取在分解度超過 2560x1600 時當機（Surface Pro）\nDESKTOP-2108 - 升級至 7.0 版本時資料庫為空\nDESKTOP-2118 - 線上登入失敗\nDESKTOP-2132 - 使用 LM 觸發太早（在可聽通知前）時捕捉無法恢復\nDESKTOP-2133 - 課程按最舊的優先排序\nDESKTOP-2134 - 匯入的視訊未整合到一個工作階段中\nDESKTOP-2137 - 課程錄製音訊在某些音效卡上會失去同步並偶爾凍結\nDESKTOP-2151 - 在觸發剛好可用之前觸發時凍結/死鎖\nDESKTOP-2184 - 有時課程被錄製但視訊為黑色\nDESKTOP-2203 - 因 PlaybackVM 中的 NRE 導致當機\nDESKTOP-2209 - 因 VideoViewVM 中的 IndexOutOfRangeException 導致當機\nDESKTOP-2210 - PointGrey 影像一致性錯誤會停止攝影機串流\nDESKTOP-2226 - 嘗試執行授權不支援的產品版本時新增回饋\nDESKTOP-2236 - 嘗試捕捉時當機（因 CaptureModel 中的 InvalidCastException DirectShowLib.Systemclock）\nDESKTOP-2240 - 因 InvalidOperationException 導致當機：無法在 CollectionChanged 事件期間變更 ObservableCollection\nDESKTOP-2248 - 從平衡板接收的資料不足。停止接收資料一段時間後\nDESKTOP-2251 - 無法在分析模式中檢視群組下的大量學生清單\nDESKTOP-2285 - 平衡板首次啟動測量時無法載入校準\nDESKTOP-2319 - 在 Windows 7 上執行課程時麥克風無法工作\nDESKTOP-2353 - 高 DPI 時解析度警告對話框出現在螢幕外\nDESKTOP-2356 - 以 32 位元執行時某些 (Halcon) 攝影機無法工作\nDESKTOP-2365 - 刪除已捕捉的錄製會導致後續錄製無法保存\nDESKTOP-2508 - 在堆疊中右鍵點選縮圖時沒有內容功能表\nDESKTOP-2511 - 匯入揮桿失敗時沒有反饋\nDESKTOP-2523 - 嘗試從檔案總管的匯出清單中刪除錄製無法工作\nDESKTOP-2555 - 無法為檢視區 A 設定書籤\nDESKTOP-2580 - MXF 影片檔案在播放期間造成未處理的例外\nDESKTOP-2592 - 在檔案總管視窗中預覽影片時當機\nDESKTOP-2622 - 捕捉時 BP3 斷開連線導致 FP 錯誤訊息/FP 完全停止工作\nDESKTOP-2746 - 變更匯入對話框上的文字\n7.1.16.8080 2018 年 3 月 16 日 (星期五)\n已修復：\nDESKTOP-3457 - 啟動某些 Point Grey GigE 攝影機的預覽或捕捉時發生例外 7.1.15.7766 2018 年 3 月 16 日 (星期五)\n已修復：\nDESKTOP-3301 - 無法存取線上版本 7.1.14.5926 2017 年 8 月 9 日 (星期三)\n已修復：\nDESKTOP-2582 - 播放控制項呈現灰色且時間軸滑桿更新不正確\nDESKTOP-2585 - 應用程式有時會意外當機\n7.1.12.5829 2017 年 7 月 6 日 (星期三)\n已修復：\nDESKTOP-2119 - MP4 錄製中的力資料同步偏差很大\nDESKTOP-2511 - 匯入揮桿失敗時沒有反饋\nDESKTOP-2592 - 在檔案總管視窗中預覽影片時當機\n7.1.11.5708 2017 年 6 月 16 日 (星期五)\n已修復：\nDESKTOP-2581 - 線上版本登入無法工作 7.1.9.5653 beta 2017 年 6 月 9 日 (星期五)\n已修復：\nDESKTOP-2562 - 在特定影片檔案上拖曳時間軸滑桿導致死鎖\nDESKTOP-2564 - GC2 的攜帶距離顯示負整數值\nDESKTOP-2565 - 關於重複攝影機名稱的對話框警告\nDESKTOP-2566 - 某些較舊的 Motion Plate 4 裝置無法工作\n7.1.8 7.1.8.5356 – 2017 年 5 月 18 日 (星期四) 發布\n新增： 新增對平衡板 3 的支援\n改進： DESKTOP-2522 - 升級 Halcon 至 12.0.3\n已修正：\nDESKTOP-2490 - 重新啟動軟體後，Gamma 複選框已停用（在「濾波器」標籤中）\nDESKTOP-2507 - Motion Plate 6 和平衡板 3 的垂直力按壓力計算\nDESKTOP-2508 - 在堆疊中右鍵點擊縮圖時沒有內容選單\nDESKTOP-2517 - 某些影片濾波器值未保存（鏡頭校正和 Gamma）\nDESKTOP-2523 - 嘗試從檔案總管中的匯出清單刪除錄製失敗\nDESKTOP-2555 - 無法為檢視區 A 設置書籤\nDESKTOP-2556 - 首次獲取時壓力數據經常錯誤\nDESKTOP-2559 - GUI 在重播時似乎「卡住」（播放速率為 0）\n7.0.11 7.0.11.3556 2016 年 9 月 31 日星期一 Beta 版 2016 年 11 月 09 日星期三穩定版\n修正\nDESKTOP-2319 – 在 Windows 7 上運行時課程麥克風無法工作\nDESKTOP-2341 – 開啟錄製時出錯 (KeyNotFoundException)\nDESKTOP-2343 – 在 32 位元 Windows 上運行時資料庫遷移失敗\nDESKTOP-2356 – 在 32 位元模式下運行時某些 (Halcon) 攝影機無法工作\nDESKTOP-2380 – 安裝程式無法安裝有效的平衡板驅動程式\nDESKTOP-2419 – 開啟剛錄製的錄製內容時出錯\n改進\nDESKTOP-2305 – 變更遠端支援 TeamViewer 的密碼 新功能\nDESKTOP-821 – 在授權對話框中新增重新整理按鈕\nDESKTOP-2231 – 匯出力資料\n7.0.10 (beta)\n7.0.10.3239 2016 年 8 月 15 日星期一\n修正\nDESKTOP-2301 – 從檔案總管和堆疊中開啟揮桿時可能出現攝影機版面配置錯誤\nDESKTOP-2320 – Halcon/Basler GigE 攝影機在捕捉後無法繼續緩衝\n改進\nDESKTOP-2305 – 變更遠端支援 TeamViewer 的密碼 新功能\nDESKTOP-1615 – 新增對 FSX 2 HMT 數據的支援 7.0.9 7.0.9.3086 2016 年 6 月 24 日星期五\n修正 DESKTOP-2285 – 平衡板在首次開始測量時無法載入校準\n7.0.8 7.0.8.3070 2016 年 6 月 22 日星期三\n修正\nDESKTOP-2138 – 匯出錄製時球飛行軌跡遺失\nDESKTOP-2276 – 雙平衡板配置遺失且無法重新保存\n7.0.7 (beta) 7.0.7.3034 2016 年 6 月 17 日星期五\n修正\nDESKTOP-2248 – 平衡板收到的數據不足。在一段時間後停止接收數據\nDESKTOP-2249 – 拔下觸發器麥克風時發生死鎖\nDESKTOP-1834 – 影片偶爾在重播中卡住，丟幀時無法恢復串流\nDESKTOP-2142 – 使用翻轉影片的監控攝影機時崩潰\nDESKTOP-2239 – 捕捉期間崩潰，PlaybackDragSlider/IPlaybackServiceExtensions.CreateTemporaryPause 中出現 NRE\nDESKTOP-2257 – 因 PlaybackVM 中的 NRE 而崩潰\nDESKTOP-2258 – 捕捉期間崩潰，PlaybackDragSlider 中出現 NRE\nDESKTOP-2261 – 影片檢視區中的縮放按鈕可點擊但不可見\nDESKTOP-2262 – 播放按鈕（播放/暫停、逐幀等）在即時重播中被禁用\nDESKTOP-2264 – 大型影片檔案播放失敗（原始 RGB24 影片）\n7.0.6 7.0.6.2930 於 2016 年 6 月 7 日星期二\n修正\nDESKTOP-2164 – 無法解析 FSX 2 的數據\nDESKTOP-2186 – 重複的授權對話框\nDESKTOP-2203 – 因 PlaybackVM 中的 NRE 而崩潰\nDESKTOP-2205 – 某些 PointGrey 攝影機 (USB2) 的丟幀計算不正確\nDESKTOP-2208 – TakeCapturePlayer 中因 ODE 而崩潰\nDESKTOP-2210 – PointGrey 影像一致性錯誤將停止攝影機串流\nDESKTOP-2211 – MessageDialog 在啟動時缺少佈景主題\nDESKTOP-2213 – 「已在執行」快顯視窗使用錯誤的產品名稱\nDESKTOP-2217 – 分析模式下，開啟錄製時攝影機角度排序順序不一致\nDESKTOP-2220 – 捕捉多個錄製後 CPU 和記憶體使用率極高\nDESKTOP-2221 – 更新安裝程式中的 SensorEdge 驅動程式（已更新憑證/簽章）\nDESKTOP-2227 – 32 位元版本中影片功能已損壞（缺少/不良 dll）\nDESKTOP-2236 – 嘗試捕捉時崩潰（由於 CaptureModel 中 DirectShowLib.Systemclock 的 InvalidCastException）\nDESKTOP-2238 – 因 ViewPortStatusPanelVM.WorkspaceSystemStateChanged 中的 NRE 而崩潰\nDESKTOP-2240 – 因 InvalidOperationException 而崩潰：無法在 CollectionChanged 事件期間變更 ObservableCollection\n改進\nDESKTOP-2215 – 分享課程到 YouTube 時在標題中新增學生名稱 7.0.5 7.0.5.2742 於 2016 年 5 月 25 日星期三\n摘要\nDESKTOP- 資料庫/揮杆探索器和線上探索器性能大幅提升\nDESKTOP- 影片擷取/編碼性能大幅提升（約 2 倍）\nDESKTOP- 新增壓力中心速度資料方塊\nDESKTOP- 資料庫檔案從資料庫資料夾移至資料夾，以將資料庫檔案保留在最快的磁碟機上\nDESKTOP- 支援將帶有數據的錄製/捕捉上傳/下載到線上雲端（尚無法在線上檢視）\nDESKTOP- 繪圖工具的復原功能\nDESKTOP- 影片的縮放/平移\nDESKTOP- 能夠旋轉、翻轉和鏡像影片\n新增\nDESKTOP-78 – 能夠禁用自動觸發\nDESKTOP-186 – 記住「填滿檢視」按鈕的狀態\nDESKTOP-212 – 能夠旋轉、翻轉和鏡像影片\nDESKTOP-225 – 遷移至資料庫中的相對路徑\nDESKTOP-1541 – 改善 COP 軌跡性能（在資料方塊中）\nDESKTOP-1728 – 為錄製添加星級評分\nDESKTOP-1786 – 熱鍵：空格鍵用於手動觸發\nDESKTOP-1788 – 繪圖工具的撤銷功能\nDESKTOP-1836 – 單獨旋轉每個平衡板的設定\nDESKTOP-1867 – 使用 GPU 型影片濾波提高影片編碼速度\nDESKTOP-1909 – 通過增加多執行緒提高影片編碼速度\nDESKTOP-1936 – 新增對 Point Grey ROI 偏移的支援\nDESKTOP-1942 – 允許在主螢幕上配置回饋螢幕\nDESKTOP-1944 – 記住回饋視窗的位置\nDESKTOP-1951 – 從開始功能表移動資料庫\nDESKTOP-2000 – 改善線上檔案總管性能\nDESKTOP-2009 – 能夠跳過主功能表並在啟動時預先選擇學生\nDESKTOP-2086 – 新增縮放和平移功能\nDESKTOP-2135 – 支援 Foresight FSX 2.0\n改進\nDESKTOP-1653 – 在設定書籤之前隱藏力圖表計時值\nDESKTOP-1732 – 升級資料庫視窗未居中\nDESKTOP-1750 – 修正線上忘記密碼頁面的連結\nDESKTOP-1751 – 將資料庫檔案移到資料夾\nDESKTOP-1763 – 估算具有多個子步驟的長期遷移的時間\nDESKTOP-1884 – 僅當未設定書籤時從扭矩資料方塊隱藏計時數字\nDESKTOP-1901 – 斷開網路攝影機連線時無回饋\nDESKTOP-1954 – 改善刪除學生的速度\nDESKTOP-1957 – 刪除學生或群組時顯示揮桿數量\nDESKTOP-1958 – 如果沒有其他學生在此處保存檔案，則刪除整個學生資料夾\nDESKTOP-1961 – 刪除學生失敗時提供回饋\nDESKTOP-2014 – 在比較/疊加模式中嘗試縮放/平移且未選擇檢視區時的回饋應該更明顯\nDESKTOP-2015 – 在堆疊錄製快捷功能表中新增「關閉錄製」選項\nDESKTOP-2016 – 為同步和播放速度按鈕新增工具提示\nDESKTOP-2019 – 在堆疊錄製預覽視窗中隱藏非高爾夫錄製的球桿 + Launch Monitor 資料\nDESKTOP-2065 – 將 Motion Plate 的旋轉限制在 0 到 180 度\nDESKTOP-2136 – 更新 Halcon 至 12.0.2（建議使用者更新 Halcon 執行階段）\nDESKTOP-2147 – 在設定中移動視窗時還原/最大化\n修正\nDESKTOP-260 – 回饋螢幕視窗位置未被記住\nDESKTOP-281 – IO.Ports.SerialStream 中的 ObjectDisposedException\nDESKTOP-1031 – 無法啟動 MeasureX，原因為「不相容的設備」\nDESKTOP-1412 – 切換感測板時校準按鈕禁用/未更新\nDESKTOP-1622 – 自訂 Launch Monitor 單位配置未被採納\nDESKTOP-1692 – AVT 相機的 Gamma 設定為極低值，導致影像泛白\nDESKTOP-1721 – 取消進行中的捕捉導致逾時錯誤\nDESKTOP-1722 – 如果相機傳輸的幀速率低於最高值（例如受曝光限制），捕捉/觸發會失敗\nDESKTOP-1723 – 無法在學生列表中搜尋名字和中間名\nDESKTOP-1734 – 上傳課程/錄製對話框在某些多螢幕設置上不顯示\nDESKTOP-1735 – AVT GigE 相機無法與某些 Realtek NIC 搭配使用\nDESKTOP-1738 – 在新捕捉模型中影片編碼被 Launch Monitor 延遲\nDESKTOP-1739 – 黑白 Point Grey 相機無法運作\nDESKTOP-1749 – Point Grey 相機不使用已配置的解析度\nDESKTOP-1754 – 上傳課程至 Online 失敗並出現警告\nDESKTOP-1755 – Swing Explorer 中的球桿篩選無法正常運作，下拉式球桿選擇已損壞\nDESKTOP-1759 – 啟動時當機時未顯示訊息對話框\nDESKTOP-1768 – TimeLinePlayer.GetEndForTimeLine 拋出 InvalidOperationException：序列不包含任何元素\nDESKTOP-1769 – VideoCaptureServiceInternal.AddVideoSource() 中的 NRE\nDESKTOP-1772 – PointGreyStreamer.Dispose() 中 DllNotFoundException 導致當機\nDESKTOP-1773 – VideoCaptureServiceInternal.HandleTimerTick() 中未處理的工作例外\nDESKTOP-1783 – TakeCapturePlayer.OnDataSourcesChanged() 中來自 TimeLinePlayer.Start/Pause 的 ObjectDisposedException\nDESKTOP-1797 – 在捕捉期間取消揮桿導致當機\nDESKTOP-1800 – WindowManager.Pop() 中的例外：彈出視窗不相等\nDESKTOP-1802 – TimeLinePlayer.Step() 中的例外：不支援步進\nDESKTOP-1814 – 時間軸凍結\nDESKTOP-1816 – 進入主選單後再開始新工作階段時，會話從檔案總管消失\nDESKTOP-1817 – 新增支援以處理沒有學生的 V1 及可能的 JC 資料庫\nDESKTOP-1820 – Swing Explorer 按鈕有時不顯示視窗\nDESKTOP-1822 – 軟體渲染在 6.2.5 中導致完全鎖定\nDESKTOP-1823 – 在某些錄製中 CoP 追蹤軌跡不可見\nDESKTOP-1825 – 如果未安裝 Windows Media Player，啟動時當機\nDESKTOP-1826 – LogError：無法判斷 Windows Media Player 版本。Swing Catalyst 現在將關閉\nDESKTOP-1829 – MeasureX 輸出具有重複時間戳的數據\nDESKTOP-1832 – 開啟錄製後，每隻腳的 CoP 不會立即顯示\nDESKTOP-1833 – 在 ViewPort A/B 中開啟相同錄製導致例外\nDESKTOP-1839 – LogSender 不包含任何檔案\nDESKTOP-1841 – 平衡板的序號有時讀取為 0000\nDESKTOP-1851 – 相機設定列表不更新已啟用/使用中相機的數量\nDESKTOP-1856 – 在捕捉模式中無法開啟已開啟的揮桿\nDESKTOP-1860 – 影片播放有時會跳幀或使用不準確的時間戳\nDESKTOP-1875 – 即時模式中缺少 COP 點\nDESKTOP-1878 – 無法讀取平衡板的 COM 埠，因為名稱後有尾隨空格\nDESKTOP-1886 – AnonymousSafeObserver.OnNext() 中的 KeyNotFoundException\nDESKTOP-1886 – NotSupportedException：此類型的 CollectionView 不支援來自不同於 Dispatcher 執行緒的執行緒對其 SourceCollection 的變更\nDESKTOP-1895 – 相機設定中相機清單重複\nDESKTOP-1904 – 觸發擷取後回放期間影片影像凍結\nDESKTOP-1906 – 防止使用者僅停用 Motion Plate 的力或壓力\nDESKTOP-1907 – 顯示學生螢幕後退出時掛起\nDESKTOP-1911 – FlightScope 數據的發球監測數據方塊中顯示 TrackMan 標誌\nDESKTOP-1912 – Foresight 不提供撞擊係數\nDESKTOP-1913 – 基於 GPU 的濾波處理無法處理旋轉/翻轉/鏡像\nDESKTOP-1914 – 擷取錯誤未傳播到 UI（卡在擷取失敗）\nDESKTOP-1926 – 雙板設置中未從 BP2 獲取數據\nDESKTOP-1929 – Point Grey Firefly MV FMVU-03MTC USB2 無法正常運作\nDESKTOP-1940 – 從 BP1 切換到 BP2 後開始測量時出現校準對話框\nDESKTOP-1943 – 點擊螢幕按鈕且視窗最大化時回饋螢幕不移動\nDESKTOP-1969 – 堆疊中有許多錄製時效能差\nDESKTOP-1972 – Trackman 不總是觸發 SC\nDESKTOP-2005 – 在最小視窗大小（DPI 為 100%）時開始工作階段按鈕不可見\nDESKTOP-2023 – 如果追蹤耗時超過 4 秒，不會擷取 Launch Monitor 數據\nDESKTOP-2034 – 如果未安裝有效授權，顯示授權對話框時當機\nDESKTOP-2043 – YouTube 帳戶資訊未被記住\nDESKTOP-2046 – 主視窗在某些設置上的啟動時不還原位置\nDESKTOP-2108 – 升級到 7.0 時資料庫為空\nDESKTOP-2114 – 首次啟動時相機設定清單為空（無現有設定）\nDESKTOP-2118 – 登入 Online 失敗\nDESKTOP-2122 – 當系統要求使用者確認感測板校準時顯示通用錯誤對話框\nDESKTOP-2129 – 變更學生時堆疊未清除\nDESKTOP-2133 – 課程按最舊優先順序排序\nDESKTOP-2134 – 匯入的影片未合併成一個工作階段\nDESKTOP-2138 – 7.0 上新錄製匯入時遺失球飛行\nDESKTOP-2145 – 檔案總管課程標籤中的頁碼計數器多顯示一個\nDESKTOP-2151 – 在觸發前觸發時凍結/死鎖\nDESKTOP-2154 – 校準力量板時發生例外/錯誤彈出視窗\nDESKTOP-2201 – 首次插入相機時它在相機設定中呈灰色/停用\n6.2 更新 5 6.2.16.2396，2016 年 3 月 9 日星期二\n錯誤 DESKTOP-2043 — YouTube 帳戶資訊未被記住 6.2 更新 4 (測試版) 6.2.15.2378 於 2016 年 3 月 1 日星期二\n錯誤 DESKTOP-2023 — 如果追蹤超過 4 秒，Launch Monitor 數據無法捕捉 6.2 更新 3 6.2.13.2266 於 2016 年 2 月 18 日星期四\n錯誤 DESKTOP-1972 — TrackMan 不總是觸發新捕捉\nDESKTOP-1966 — 變更攝影機 ROI 設定後，影片影像渲染可能出現扭曲\nDESKTOP-1974 — 課程不總是在 Swing Explorer 中顯示\nDESKTOP-1323 — 暫停/取消暫停課程錄製時當機\nDESKTOP-1959 — 無法多次暫停課程\nDESKTOP-1999 — 已取消的錄製仍然顯示在堆疊中\n6.2 更新 2 v6.2.11.2083 於 2016 年 1 月 20 日星期四\n錯誤 DESKTOP-1943 — 點擊螢幕按鈕且視窗最大化時，回饋螢幕不會移動\nDESKTOP-1949 — 即使未啟用，學生螢幕仍在啟動時顯示\nDESKTOP-1955 — 將程式碼簽署憑證更新為 SHA256\n6.2 更新 1 (測試版) v6.2.10.2047 於 2016 年 1 月 14 日星期四\n功能 DESKTOP-1936 — 新增對 Point Grey ROI 偏移的支援 錯誤 DESKTOP-1692 — AVT 攝影機的 Gamma 設定非常低，導致影像褪色\nDESKTOP-1929 — Point Grey Firefly MV FMVU-03MTC USB2 無法運作\nDESKTOP-1825 — 如果未安裝 Windows Media Player，啟動時當機\nDESKTOP-1923 — MessageDialogs 沒有佈景主題\nDESKTOP-1926 — 在雙板設置中無法從 BP2 取得數據\nDESKTOP-1933 — 在 6.2 中匯入影片不會列出任何高爾夫球手\nUX DESKTOP-1908 — 檔案總管中群組錄製的縮圖未顯示學生姓名 詳細資訊 DESKTOP-1932 — 更新 Full Swing Golf 標誌 6.2 v6.2.9.1925 於 2016 年 1 月 5 日星期一\n主要功能 DESKTOP-1662 — 新捕捉流程 (無對話方塊、自動重播、捕捉模式)\nDESKTOP-1667 — 比較兩個揮桿的新疊加檢視模式\n功能 DESKTOP-1475 — 可設定的即時回放播放速度\nDESKTOP-1621 — 支援新的 YouTube API 以分享影片課程\nDESKTOP-1687 — 在所有檢視模式中使用「大型」壓力轉移和站姿方塊\nDESKTOP-1893 — 改進緩衝時的捕捉設備狀態回饋\nDESKTOP-78 — 能夠禁用自動觸發\n影片 DESKTOP-1718 — 改進 PointGrey 時間戳\nDESKTOP-1623 — 支援 AVT/Prosilica gamma 調整\nDESKTOP-1689 — 支援 10 位元影片格式（例如 Sony XAVC）\nDESKTOP-1690 — 支援 MXF 影片檔案\nDESKTOP-1740 — 支援基於 DirectX 的灰度格式呈現\nDESKTOP-1625 — 將 FFmpeg 程式庫更新至 2.6.4\nDESKTOP-1715 — 更新至 Halcon 12.0.1.1（使用者必須更新）\n性能 DESKTOP-1541 — 通過平滑/下採樣改進 COP 軌跡性能\nDESKTOP-1751 — 將資料庫檔案移至資料夾（如果資料庫移至非 SSD 驅動器會更快）\n主要錯誤 DESKTOP-1620 — YouTube API 變更後，YouTube 影片被列為公開\nDESKTOP-1622 — 自訂 Launch Monitor 單位配置未被接受\nDESKTOP-1820 — Swing 檔案總管按鈕有時不顯示視窗\nDESKTOP-1841 — 平衡板序列號有時讀取為 0000\n影片問題 DESKTOP-1722 — 當相機幀速率受曝光限制時無法捕捉\nDESKTOP-1691 — IDS uEye 相機遺忘自動增益/曝光設置\nDESKTOP-1739 — 黑白 Point Grey 相機無法工作\n錯誤 DESKTOP-1723 — 無法在學生清單中搜尋名字和中間名\nDESKTOP-1701 — 結束工作階段刪除檔案時可能會掛起\nDESKTOP-1721 — 取消進行中的捕捉導致超時錯誤\nDESKTOP-1754 — 上傳課程至線上失敗並顯示警告\nDESKTOP-1759 — 啟動時崩潰時未顯示訊息對話方塊\nDESKTOP-1797 — 在捕捉期間取消揮桿時崩潰\nDESKTOP-260 — 回饋螢幕視窗位置未被記住\nDESKTOP-1878 — 由於名稱中的尾部空格，無法讀取平衡板的 COM 連接埠\nDESKTOP-1688 — 當 A/B 同步時，書籤快捷鍵尋求至錯誤位置\n其他影片問題 DESKTOP-1749 — Point Grey 相機不使用配置的解析度\nDESKTOP-1746 — Point Grey 串流有時失敗\nDESKTOP-1873 — Point Grey 有時無法重新啟動緩衝\nDESKTOP-1860 — 影片播放有時跳過幀/使用不準確的時間戳\n使用者體驗 DESKTOP-1906 — 防止使用者只停用 Motion Plate 的力或壓力\nDESKTOP-1569 — 將旋轉力資料方塊重新命名為扭矩\nDESKTOP-1653 — 在設定書籤之前隱藏力圖表的計時值\nDESKTOP-1694 — 嘗試在未登入 YouTube 的情況下分享課程時沒有回饋\nDESKTOP-1191 — 捕捉完成後自動滾動堆疊至最後捕捉的錄製\nDESKTOP-1697 — 錯誤訊息顯示在主監視器而非主視窗的監視器上\nDESKTOP-1711 — 資料庫遷移錯誤處理不當\nDESKTOP-1733 — 開啟錄製會重設檢視角度\nDESKTOP-1750 — 修正線上忘記密碼頁面的連結\n詳細資訊 DESKTOP-225 — 在資料庫中使用相對路徑 (更容易移動 DB 資料夾)\nDESKTOP-1552 — 增加照明控制的逾時時間\nDESKTOP-1553 — 新增選項以停用發球監測斷開連線對話方塊\n錯誤 (其他) DESKTOP-1768 — TimeLinePlayer.GetEndForTimeLine 拋出 InvalidOperationException: 序列不包含任何元素\nDESKTOP-1769 — VideoCaptureServiceInternal.AddVideoSource() 中的 NRE\nDESKTOP-1772 — PointGreyStreamer.Dispose() 中 DllNotFoundException 導致的當機\nDESKTOP-1773 — VideoCaptureServiceInternal.HandleTimerTick() 中未處理的工作例外\nDESKTOP-1782 — 來自 TakeCapturePlayer.OnDataSourcesChanged() 中 TimeLinePlayer.Start/Pause 的 ObjectDisposedException\nDESKTOP-1800 — WindowManager.Pop() 中的例外: 彈出的視窗不相等\nDESKTOP-1802 — TimeLinePlayer.Step() 中的例外: 不支援逐步執行\nDESKTOP-1814 — 時間軸凍結\n6.1 更新 4 v6.1.14 於 2015年12月18日星期五\n錯誤 DESKTOP-1622 — 自訂發球監測單位設定未受尊重\nDESKTOP-1735 — AVT GigE 攝影機無法與某些 Realtek NIC 搭配使用\nDESKTOP-1878 — 由於名稱中有尾隨空格而無法讀取平衡板的 COM 連接埠\n6.1 更新 3 v6.1.13 於 2015年8月25日星期二\n錯誤 DESKTOP-1708 — 嘗試在堆疊中預覽影片時當機\nDESKTOP-1713 — Camera IDS UI-1220LE-M 無法與 SC 搭配使用\nDESKTOP-1699 — 在停用 DX 呈現的某些膝上型電腦上堆疊和檔案總管中的影片預覽失敗\nDESKTOP-1709 — 主視窗顯示後 AllowsTransparency 改變導致的啟動時偶發當機\n6.1 更新 2 v6.1.9 於 2015年7月1日星期三\n錯誤 DESKTOP-1652 — Motion Plate 有時會要求新校準，儘管已校準\nDESKTOP-1655 — 斷開 Bertec Force Plate 連線時重複顯示裝置已斷開連線對話方塊\nDESKTOP-1675 — IDS 攝影機未正確關閉\nDESKTOP-1633 — Prosilica API 錯誤 eErrBadSequence\n6.1 更新 1 (測試版) v6.1.7 於 2015 年 6 月 2 日星期二\n錯誤 DESKTOP-1630 — AutoSwingCapture.CancelCaptureInProgress() 中的 NRE\nDESKTOP-1636 — UEyeCameraAcquisitionScope 建構函式中的 NRE\nDESKTOP-1637 — 連接攝影機時出現錯誤導致永久性錯誤（必須重新啟動 SC）\nDESKTOP-1638 — DragInfoMouse 建構函式中的 NRE\nDESKTOP-1639 — DragDrop.UpdateDragAdornerCommon() 中的 NRE\nDESKTOP-1640 — LessonPreviewDialog 中的 NRE\nDESKTOP-1643 — 安裝程式無法安裝 x64 VS2013 C++ 可轉散發套件\nDESKTOP-1646 — 取消資料庫匯入/匯出時出現錯誤\nDESKTOP-1654 — 感測板可能重設為 BP1\n測試版錯誤 DESKTOP-1379 — MP5 上的 COP 被鏡像 6.1 v6.1.4 於 2015 年 5 月 11 日星期一\n主要功能和改進 DESKTOP-1564 — 資料庫性能更佳，特別是在 Swing Explorer 中\nDESKTOP-1594 — 與 Halcon 影片攝影機的相容性更佳\nDESKTOP-1504 — 即時串流和播放時的影片性能更佳 （實驗性）\nDESKTOP-1465 — 在檔案總管中儲存課程（並重新傳送）\nDESKTOP-1415 — 從 Foresight 模擬數據計算球軌跡\n功能和改進 DESKTOP-1595 — 捕捉過程中的 UI 回應能力更佳\nDESKTOP-1247 — 資料方塊：將 Flight 標籤新增回 Foresight\nDESKTOP-1339 — 新增 Halcon FPS 測量\nDESKTOP-1561 — 更好地支援非常高的幀速率\nDESKTOP-1403 — 開啟 Swing Explorer 的快速鍵\nDESKTOP-1404 — 切換書籤鎖定的快速鍵\nDESKTOP-1405 — 設定書籤的快速鍵\nDESKTOP-1406 — 跳至 Take B 書籤的快速鍵\nDESKTOP-1407 — 同步書籤的快速鍵\nDESKTOP-1460 — 課程中的額外品牌資訊\nDESKTOP-1338 — 啟動時若缺少 Windows 更新則提供反饋\n錯誤 DESKTOP-1344 — 某些 iPhone6 影片導致當機\nDESKTOP-1417 — 退出 Foresight 模擬器時當機\nDESKTOP-1418 — 32 位元 Webcam 導致當機\nDESKTOP-1619 — Swing Explorer 開啟時結束工作階段並進行捕捉導致當機\nDESKTOP-1372 — 透過電子郵件分享課程時，自訂受試者無法正常運作\nDESKTOP-1364 — 串流時安裝平衡板校準檔案時發生錯誤\nDESKTOP-1370 — Halcon 攝影機顯示影像失真\nDESKTOP-1373 — Halcon 時間戳在 500 FPS 攝影機上不準確\nDESKTOP-1549 — Halcon 設定唯讀的開始/停止更新競速條件\nDESKTOP-1560 — Halcon 攝影機設定有時會遺失\nDESKTOP-1588 — Halcon GeniCamTL 不支援 Ximea 攝影機\nDESKTOP-1612 — 攝影機影像過亮\nDESKTOP-1580 — 某些影片檔案不受支援（無幀精確尋位）\nDESKTOP-1016 — 書籤的快速鍵無法與預設書籤搭配使用\nDESKTOP-1384 — 資料夾不總是被清理\nDESKTOP-1411 — 課程品牌設定因過度記憶體使用而失敗\nDESKTOP-1274 — 退出分析模式時，Swing Explorer 不會關閉\nDESKTOP-1293 — 修正舊 MP4 錄製的反向 Fx 通道\nDESKTOP-1351 — 啟動畫面不總是顯示\nDESKTOP-1593 — 即使在設定中未啟用，仍會建立 Procdumps\n6.0 更新 5 (6.0.13) 2015年4月23日（星期四）\n主要錯誤 DESKTOP-1616 — 從 6.0.12 全新安裝升級到 6.1.x 時啟動時當機 6.0 更新 4 (6.0.13) 2015年4月10日（星期五）\n功能 DESKTOP-1457 — 記住檢視模式\nDESKTOP-1561 — 改善對超高幀速率的支援\n錯誤 DESKTOP-1560 — Halcon 攝影機設定有時會遺失\nDESKTOP-1370 — Halcon 攝影機顯示影像失真\nDESKTOP-1411 — 課程品牌設定因過度記憶體使用而失敗\nDESKTOP-1559 — 嘗試讀取無效的電子郵件設定時在啟動時當機\nDESKTOP-1568 — 遷移資料庫後啟動工作階段時當機\n6.0 更新 3 (6.0.8) 2015年2月18日（星期三）\n功能 DESKTOP-1440 — 更新至 Halcon 12 主要錯誤 DESKTOP-553 — 當 SwingCatalyst 視窗移至次要監視器時，課程影片不顯示 SwingCatalyst\nDESKTOP-1327 — 從 3 個影片角度切換到 1 個時影片播放凍結\n錯誤 DESKTOP-1389 — 啟用銳化濾波器時，黑色變成灰色\nDESKTOP-1419 — 在進階相機設定中變更自訂影片格式時沒有影片圖像\nDESKTOP-1399 — 開啟特定錄製時出錯\nDESKTOP-1414 — 壓力/力資料檔案遺失時匯出錄製出錯\nDESKTOP-1422 — 拖曳時出錯\n6.0 更新 2 (6.0.6) 週四，2015 年 1 月 22 日\n錯誤 DESKTOP-1383 — 旋轉力資料沒有任何效果\nDESKTOP-1385 — 力因數應顯示 2 位小數\nDESKTOP-1388 — 以展開的書籤進入捕捉模式時堆疊會消失\n6.0 更新 1 (6.0.5) 週二，2015 年 1 月 20 日\n錯誤 DESKTOP-1371 — 編輯學生對話方塊時當機\nDESKTOP-1377 — NotifyIfRunningLowOnDiskSpace 時當機\nDESKTOP-1381 — 拖曳書籤時 CoP 軌跡不更新\nDESKTOP-1359 — 力圖表反向\nDESKTOP-1367 — 課程在品牌課程中失敗\nDESKTOP-1376 — 課程臨時資料夾被刪除時課程失敗\nDESKTOP-1368 — 「配置」中的 Halcon 設定名稱為空白\nDESKTOP-1374 — Halcon 開啟設定「啟用」核取方塊在啟動時未設定\n使用 CCTV 捕捉時出現問題\nBeta 錯誤 DESKTOP-1379 — MP5 上的 CoP 被鏡像 6.0.3 週三，2014 年 1 月 14 日\n功能和改進 DESKTOP-1003 — 使用 Halcon 的通用相機支援\nDESKTOP-1206 — 新的 GUI\nDESKTOP-1190 — Foresight HMT 支援\nDESKTOP-1280 — 記住資料方塊版面配置\nDESKTOP-1302 — 允許多個具有不同標籤的 Launch Monitor 資料方塊\nDESKTOP-1340 — 減少影片緩衝時的 CPU 使用率\nDESKTOP-1320 — 新的課程影片介紹樣式\nDESKTOP-1336 — 新的 DESKTOP 圖示\nDESKTOP-1335 — 新的啟動畫面\nDESKTOP-1332 — 警告高 DPI\nDESKTOP-1244 — 壓力傳感器啟動計數器/記錄器\n錯誤 DESKTOP-1344 — 某些 iPhone6 影片當機\nDESKTOP-1288 — 如果未設定預設瀏覽器，開啟商店網站時當機\nDESKTOP-1105 — 課程影片未從暫存資料夾刪除\nDESKTOP-1317 — Motion Plate 5 使用了錯誤的壓力濾波器\nDESKTOP-1328 — 更改相機 ROI/解析度導致渲染錯誤\nDESKTOP-1235 — 取消時捕捉錯誤\nDESKTOP-1299 — 中文使用者網際網路連線檢查失敗\nBeta 錯誤 DESKTOP-1334 — 拖曳書籤時動態方塊不更新\nDESKTOP-1337 — 拖曳書籤不更新資料方塊\nDESKTOP-1328 — 更改相機 ROI/解析度導致渲染錯誤\nDESKTOP-1319 — 在選單鍵盤焦點時 Swing Explorer 當機\n5.3.7 週一，2014 年 12 月 1 日\n已修復的錯誤 無法使用 Motion Plate 4 錄製揮桿 (DESKTOP-1271)\n無法下載 BP2 / MP5 的校準檔案 (DESKTOP-1165)\n5.3.5 週四，2014 年 11 月 20 日\n穩定性版本。我們修復了一些報告的建立課程問題，以及無法取得所有 Foresight 數據的問題。作為預防措施，我們現在會記錄更多資訊，以協助診斷未來影片剪輯和課程的問題。\n已修復的錯誤 取消揮桿錄製時偶爾出現錯誤 (DESKTOP-1235)\n完成課程錄製時偶爾出現錯誤 (DESKTOP-1249)\n來自 Foresight 的缺失值導致其他值未顯示 (DESKTOP-1250)\n5.3.2 週二，2014 年 10 月 28 日\n改進 與來自 Full Swing Pro Studio 的 Launch Monitor 數據整合\n支援課程電子郵件中的多個收件人 (DESKTOP-1205)\nForesight 整合現在也適用於以 64 位元模式執行 Swing Catalyst 時\n改善開始新工作階段時主選單中的 TAB 鍵導覽\n已修復的錯誤 修復使用 TrackMan 3e 「過早」觸發捕捉時的錯誤\n修復使用 Point Grey 相機時的兩種當機情況\n建立課程時偶爾當機 (DESKTOP-1224)\n完成捕捉後選定的球桿被重設 (DESKTOP-1061)\n5.2.6 週一，2014 年 10 月 13 日\n已修復的錯誤 DESKTOP-1192 — Motion Plate 5 在 32 位元模式下不運作\nDESKTOP-1092 — 解析特定類型射擊的 FlightScope 數據時出現錯誤\nDESKTOP-1175 — 在資料中心模式和設定對話方塊預覽中，每隻腳的 CoP 不正確\nDESKTOP-1185 — 在比較模式和未連結播放時捕捉揮桿時無影片圖像\n結束 Swing Catalyst 時出現兩種錯誤\n5.2.5.170 (#e196e76) 2014 年 9 月 19 日\n已修復的錯誤 影片擷取中的當機 5.2.4.166 (#af1d6eb) 2014年9月18日\n改進 影片播放器元件已完全重寫\n提高與各種影片檔案/格式的相容性\n影片播放和搜尋現在應該更快速和反應更靈敏\n影片預覽（在檔案總管和堆疊彈出視窗中）應該載入得更快\n結合英制和公制單位的發球監測速度和距離\n已修復的錯誤 開啟影片和影片預覽（在堆疊彈出視窗中）相關的多個當機問題\n開啟使用USB3相機捕捉的影片時的當機\n5.1.5.136 2014年8月22日\n改進 如果沒有數據，隱藏ForeSight球桿數據標籤\n忽略球飛行軌跡計算中的錯誤\n已修復的錯誤 DESKTOP-1097 — 首次建立課程失敗\nDESKTOP-1096 — 缺少ForeSight球飛行軌跡\nDESKTOP-1091 — FlightScope中缺少球桿路徑和桿面相對路徑\nDESKTOP-1075 — 擷取影片時出現偶發錯誤\nDESKTOP-1116 — 多次捕捉後出現記憶體不足錯誤\nDESKTOP-1117 — 開啟影片時第一張影像/影格不總是正確渲染\n5.1.3.118 2014年7月18日\n已修復的錯誤 DESKTOP-1071 — 取消課程保存/編碼/品牌處理時出現錯誤\nDESKTOP-1074 — 嘗試校準平衡板1時出現錯誤\nDESKTOP-1073 — 與書籤相關的罕見當機\nDESKTOP-1064 — 選擇繪圖工具時的罕見當機\nDESKTOP-1075 — 播放期間的罕見當機\nDESKTOP-1081 — 將資料方塊重新命名為壓力轉移和站姿\nDESKTOP-1082 — 課程捕捉時快速啟動「捕捉」按鈕呈現灰色\n許可證檢查中的錯誤和潛在錯誤（DESKTOP-1076、DESKTOP-1067、DESKTOP-1066）\n5.1.1.103 2014年7月14日\n改進 DESKTOP-772 – 按足部顯示COP\nDESKTOP-786 – 在捕捉課程時啟用影片擷取\nDESKTOP-762 – 磁碟空間即將不足時通知使用者\nDESKTOP-535 – 更穩健的感測板校準\nDESKTOP-119 – 支援 ION Launch Monitor 和額外欄位\nDESKTOP-993 – 新增感測板裝置的序號標籤\nDESKTOP-1012 – 為多項工作新增請稍候對話方塊\nDESKTOP-899 – 在設定選單中新增核取方塊以接收測試版通知\n變更 從 Launch Monitor 資料方塊移除騰空時間、最大高度和滾轉\n將桿面對路徑角度新增至 Launch Monitor 資料方塊\nDESKTOP-788 – 限制課程上傳只限於擁有有效軟體更新授權的使用者\n使用新的日誌記錄服務來幫助尋找錯誤\nDESKTOP-845 – 將資料方塊標題重新命名為壓力轉移\n已修正的錯誤 DESKTOP-823 – 匯出至 .take 時 SideSpin 始終為 0\nDESKTOP-755 – 無法在 Swing Catalyst 中最小化主視窗\nDESKTOP-834 – MicCaptureDirectSound.AudioTimerTickHandler() 中 NRE 導致當機\nDESKTOP-635 – MigrationNotification 中的當機\nDESKTOP-652 – 當機傾印時掛起\nDESKTOP-940 – 課程品牌化過度消耗記憶體\nDESKTOP-894 – 進行課程擷取時在退出時掛起\nDESKTOP-927 – 從播放模式切換至擷取模式時偶發當機\nDESKTOP-701 – 在感測板版面配置設定中使用「NotSet」選項導致當機\nDESKTOP-113 – 點擊新版本對話方塊中的「更新」時當機\nDESKTOP-891 – 播放含有感測板數據的錄製時偶發當機\nDESKTOP-250 – 拖放 .take 檔案導致 Swing Catalyst 掛起\nDESKTOP-1014 – 首次啟動時相機清單為空\n5.0 r4 (#13155df) 2014 年 5 月 15 日\n已修正的錯誤 DESKTOP-834 – 修復使用麥克風時的偶發錯誤\nDESKTOP-803 – 修復啟動時偶發當機\nDESKTOP-839 – 修復全新安裝後某些電腦上影片播放無法運作\n修復使用者回饋中對線上網站的連結\n5.0 r3 (#1924d5d) 2014 年 4 月 3 日\n變更 修復授權對話方塊中的網店連結\n若要透過線上方式分享課程，您需要有效的軟體更新授權\n已修正的錯誤 雙平衡板在 5.0 中無法運作\n無法最小化主視窗\n相機設定選單中的當機\n啟動時因不支援的感測板而崩潰\n損壞的資料庫已備份\n5.0 r2 (rev 13509) 2014年3月12日\n改進 新增鍵盤快速鍵以跳轉到書籤（編號1–3）\n防止檔案總管視窗最小化\n在背景暫停播放以加快課程處理速度\n改進授權對話方塊的版面配置以顯示更長的文字\n授權對話方塊按鈕在授權有效時顯示「OK」而非「結束」\n支援從更新版本的V1和JC資料庫匯入\n已修正的錯誤 LessonPreviewDialog中的崩潰\n顯示某些錯誤訊息時的崩潰\n攝像頭設定選單中的崩潰\n測試電子郵件設定時的崩潰\n匯入錄製時缺少ForeSight GC2\n原生程式庫載入失敗；System32被用作工作目錄\n5.0 r1 (rev 13259) 2014年1月20日\n改進 整合支援Swing Catalyst Online，包括下載影片和上傳/分享課程\n新增支援旋轉的iPhone/iPad影片\n改進TrackMan資料方塊\n新增支援3D Motion Plate\n新增改進的動作/平衡板設定對話方塊（支援旋轉和資料預覽）\n改進ForeSight Launch Monitor整合\n已修正的錯誤 使用AVT/Prosilica攝像頭時的崩潰\n多項微小修正\n4.6 4.6.798.12770（2013年9月13日）\n改進 實現TM3e支援\n改進ForeSight GC2整合\n當課程處理對話方塊可見時播放應暫停\n已修正的錯誤 左手高爾夫球手的平衡板資料未保存\n左手高爾夫球手匯出/匯入錄製後力量板資料播放不正確\n觸發捕捉延遲或使用TrackMan 3e作為觸發器時發力資料不同步\n在4.7中開啟舊錄製時（含.dat發力資料）發力資料不同步\n同時觸發揮桿時 Zebris 校準對話方塊會無反應\n在書籤上同步時播放跳到錯誤的書籤位置\n修復移動書籤時偶發的當機問題\n更改高爾夫球手的慣用手導致錄製播放錯誤\n偶發影片擷取錯誤\n使用手動或音訊觸發器時無法從 Launch Monitor 取得數據\n可在相機設定中設定負值裁切值\n4.6.779.12579（2013 年 7 月 10 日）\n改進 將 IDS uEye「USB 2.0」相機圖像的裁切居中 修復的錯誤 使用手動或音訊觸發器時無法從 Launch Monitor 取得數據\n擊球後壓力數據遺失\n同時觸發揮桿時 Zebris 校準對話方塊會無反應\n平衡板在捕捉過程中立即顯示完成\n4.6.773.12549（2013 年 7 月 5 日）\n改進 TrackMan 3e 支援\nTrackMan 在進行練習揮桿但未擊球時不再觸發\nFull Swing Golf 品牌選項\n記住使用的相機數量和填充模式\n開啟錄製時的性能改進\n處理課程對話方塊可見時播放暫停\n修復的錯誤 Windows XP 啟動時當機\n拖動書籤時偶發當機\n關閉/開啟錄製時偶發當機\n解除安裝導致自訂資料路徑被重設，因此授權、設定和資料庫被重設\n書籤未保存\n課程影片在 iOS 裝置上無法正常播放\n透過電子郵件共享的課程影片副檔名為 .wmv 而非正確的 .mp4\n左手使用者的旋轉力/COP 上下顛倒\n使用 uEye 擷取時偶發錯誤\nProsilica 相機影片時間戳記在停止並重新開始時有時不正確\n使用非標準 DPI 設定時，Swing Explorer 和其他視窗的大小可能超出螢幕範圍\n4.6.600.12064（2013 年 5 月 22 日）\n修復的錯誤 修復影片播放中的記憶體洩漏\n修復課程檔案透過電子郵件保存為 .wmv 且有時無法開啟的錯誤\n修復擷取對話方塊有時會無反應的錯誤\n修正揮桿分析有時會當機的錯誤\n修正以全螢幕模式啟動時，右上角時鐘無法運作的錯誤\n修正書籤位置在時間軸上略微偏移的錯誤\n修正課程處理對話框在取消時會懸掛的錯誤\n修正新版本對話框在點擊更新時有時會出現錯誤的問題\n4.6.576.11870（2013年3月22日）\n改進功能 Windows 8 支援 Motion Plate 和 Balance Plate #2 已修正的錯誤 修正錯誤 #2578 – 燈光設定對話框完全為黑色\n修正錯誤 #2580 – 修正揮桿瀏覽器對話框偶發當機的問題\n修正錯誤 #2564 – 修正使用校準壓力板時的預設濾波值\n4.6.550.11732（2013年3月6日）\n改進功能 在視窗樣式中新增說明按鈕，可開啟官方支援網站\n增加課程預覽對話框的大小\n已修正的錯誤 學生搜尋功能可能會中斷並卡在某個學生上\n修正因記憶體洩漏導致的記憶體不足問題\n更新影片程式庫，修正許多與影片播放相關的問題\n修正視窗樣式的錯誤（某些視窗上沒有調整大小控點）\n修正與文字方塊相關的樣式錯誤\n檢視區 B 中的資料方塊在捕捉模式中有時會顯示即時資料\n修正 MOV 檔案（Exilim 相機）的播放\nFlightScope 標誌未能正確縮放，可能會遮蓋重要資料\n4.6.355.11101（2012年2月5日）\n新功能 新增從 JC Video 匯入資料庫的支援\n新增從 V1 匯入資料庫的支援\n新增流媒體相機裁剪功能支援（在設定中設定），用於移除類比影片來源的黑邊\n新增使用可設定的片頭和片尾為課程影片添加品牌的支援\n已修正的錯誤 進階相機設定對話框中的「設定影片來源」按鈕（用於 DirectShow 相機）現在可在 Windows 8 上使用\n多項穩定性改進\n改進功能 支援具有 0 台即時相機的授權\n分析模式 GUI 的細微調整\n4.5 首次發佈：2012年11月14日的 4.5.33 版\n首次發佈共包含 47 項功能和 46 項錯誤修正，之後發佈了額外的錯誤修正。開發耗時 3 個月。\n備註： 所有 3D動作板客戶必須卸載舊的 NI SDK 並安裝 NI 9.6.0 核心執行時期，以便 3D動作板能在 64 位元上運作。\n4.5.82.10907 發布日期：2012年12月17日 相較於4.5.79版本的變更：\n錯誤修正 在即時捕捉時切換角度，學生/回饋螢幕未能更新顯示正確的角度\n將學生/回饋螢幕移動至另一個監視器時，應用程式可能會當機\n4.5.79.10861 發布日期：2012年12月11日 相較於4.5.57版本的變更：\n錯誤修正 修正AVT、Prosilica和PointGrey攝影機造成的大量記憶體洩漏\n修正某些電腦上Swing Explorer中因ExecutionEngineException導致的頻繁當機\n修正Swing Explorer在拖曳錄製時偶發的當機\n課程和電子郵件對話框中的電子郵件自動填入功能未能正常運作\n修正捆綁揮桿自動匯入的錯誤\n4.5.57.10711 發布日期：2012年11月27日 相較於4.5.33版本的變更：\n錯誤修正 修正FlightScope軟體中顯示「用戶端已斷開連線」的錯誤\n修正某些影片無法開啟的錯誤\n修正同一台電腦上機器ID可能隨時間改變的錯誤\n修正32位元和日誌寄送應用程式的開始功能表快捷方式遺失\n修正未提供評論時日誌寄送程式的當機\n若uEye驅動程式已過期，會在攝影機設定選單中顯示回饋訊息\n修正進階攝影機對話框中影片錯誤未能正確報告的錯誤\n修正變更Launch Monitor需要耗時數秒的錯誤\n修正首次啟用Launch Monitor時不正確報告為已先斷開連線的錯誤\n4.5.33.10647 發布日期：2012年11月14日\n功能 64位元支援\n新的視窗樣式並最佳化視窗模式執行\n新增垂直和水平線條繪製工具\n影片角度現已在比較模式中兩個開啟的錄製間自動同步\n硬體：\n支援ForeSight GC2 Launch Monitor\n支援雙平衡板設置，並自動在右手和左手球手間切換\n支援使用任何受支援的Launch Monitor自動觸發捕捉\n支援FlightScope的球桿數據\nMotion Plate驅動程式下載從1.5 GB減少至180MB\n影片：\n支援IDS uEye USB 3.0攝影機\n錄製時旋轉、翻轉和鏡像個別攝影機的影像\n加強對IDS uEye攝影機自動曝光模式的控制支援（亮度偏差）\n普遍改進對DirectShow影片源的支援（例如網路攝影機）\n若uEye驅動程式已過期，會在攝影機設定選單中顯示回饋訊息\n錯誤修復\n修復記憶體不足問題（64 位元版本可利用所有可用記憶體）\n改進 Trackman Performance Studio 整合的穩定性\n改進 IDS uEye 攝影機的支援和穩定性\nSwing Explorer 中撞擊係數的濾波範圍現在符合高達 1.5 的實際範圍\n取消選取課程麥克風現在可以正確停用它\n修復 FlightScope 軟體中顯示「客戶端已斷開連線」的錯誤\n修復未提供評論時日誌寄件者的當機問題\n4.1.278.9889 發行日期：2012 年 7 月 16 日\n功能 比較模式中的連結播放選項\nIDS uEye 和 AVT GigE 攝影機的進階影像品質配置（亮度、對比度、顏色、銳度等）\n改進 GigE 影片擷取的性能和影像品質（更佳的去馬賽克濾波器）\n減少開啟許多錄製時的記憶體使用量\n減少 GigE 攝影機的記憶體使用量\n新增支援播放 Windows Media 影片檔案 (WMV)\n改進 Swing Explorer 中觸控螢幕的拖放功能\n現在強制使用者為攝影機指派角度，以便更輕鬆地比較揮桿\n透過只輪詢所選裝置來改進發球監測連線的穩定性\n錯誤修復 在比較模式中，揮桿 B 的評論並不總是被儲存\n含有破折號和其他各種有效符號的電子郵件現在可在高爾夫球手資料和設定中使用\n停用觸發麥克風現在可以正確停用它\n執行評估版時，授權對話方塊不再顯示「無效授權」\n修復退出 Swing Catalyst 時偶爾出現的「未處理的例外狀況」錯誤訊息\n修復點擊新版本對話方塊中的連結時偶爾出現的「未處理的例外狀況」錯誤訊息\n修復 AVT GigE 攝影機設定的偶爾遺失問題\n4.0.761.9152 發行日期：2012 年 4 月 18 日\n功能 YouTube 課程支援\n自訂電子郵件帳戶支援\n更容易管理麥克風（自動偵測和配置按鈕）\n在安裝時配置 Windows 防火牆以允許 Swing Catalyst 通過\n顯著的性能改進\n影片：\n攝影機設定的進階控制（快門速度、Gain、白平衡、交叉條來源等）\n影片角度始終按相同順序排列\n與其他已安裝的影片軟體共存效果更佳\n攝影機來源黑名單以避免已知問題\n大幅降低記憶體使用量以解決多攝影機問題\n新增對寬屏 DV 影片的支援\n硬體：\n支援 Swing Catalyst Balance Plate v1 \u0026 v2\n支援 IDS uEye 高速 USB 攝影機\n支援自動化照明控制\n擴展對新 AVT GigE 攝影機型號的支援\nGUI：\n分析菜單欄重新設計\nSwing Explorer 重新設計\n攝影機設定重新設計\n觸控螢幕相容\n大幅改進對筆記型電腦和投影機的支援（解析度/寬高比）\n新增授權管理對話框\n改進壓力數據呈現效果（更清晰美觀）\n改進低解析度下的 Launch Monitor 資料方塊版面配置\n3.1.35.7529 r6695 發佈日期：2011 年 4 月 13 日\n功能 將內部足部壓力分佈呈現為熱力圖\n在 Launch Monitor 資料方塊中顯示球的軌跡\n透過電子郵件發送課程\n隱藏資料方塊的純影片模式\n更快的應用程式啟動速度\n硬體：\n自動偵測 3D動作板設置\nTrackMan OEM 支援\n影片：\n支援多種攝影機解決方案，包括擷取卡、DV、CCTV、GigE 和網路攝影機\n進階影片濾波以改善影片品質\n調整影片來源輸出的設定\n錯誤修復\n從舊版本升級有時會失敗或升級不完整 3.0.0.4 rev. 6187 發佈日期：2011 年 1 月 20 日\n功能 全新 GUI 外觀（Office 功能區）\n支援 3D動作板 v4\n課程影片螢幕擷取\n高爾夫球手群組\nGigE 高速攝影機支援\n啟動時檢查新版本\n繪圖工具的顏色和粗細\n對話框中支援快速鍵 (ESC、Enter)\n新增時鐘以顯示時間\n性能改善，特別是在揮桿分析方面\n錯誤修正\n旋轉力計時錯誤\n匯出時支援高爾夫球手名字中的 Unicode 字元 (æøå)\n因問題而使用無站姿旋轉力\nCoM 百分比現在基於所顯示的站姿\n修正記憶體洩漏，現在可以無限串流數據\n修正 Office 中字型被替換成奇怪字型的問題\n2.6.3.2 rev. 4234 發佈日期：20.08.2010\n功能\nFlightScope 5.8.4 支援 (他們那端的文化設定錯誤修正)\n遷移前備份資料庫\n錯誤修正\n旋轉力計時 早期版本 之前版本的變更日誌不公開提供。\n最後更新：2025-02-17 | 在官方支援網站上檢視",
    "description": "Swing Catalyst 軟體版本 9.8 至 2.6.3 的詳細更新日誌",
    "tags": [
      "Changelog",
      "Troubleshooting",
      "Gige-Camera",
      "Usb-Camera"
    ],
    "title": "軟體版本更新日誌（9.8 - 2.6.3）",
    "uri": "/sc-support/zh-hant/reference/changelog-legacy/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "Halcon 客戶所使用的授權加密狗之 USB 驅動程式存在問題。此加密狗為綠色的 USB「Flexera」加密狗。\nHalcon 12 隨附的驅動程式會導致 Windows 崩潰並出現藍屏。\n為避免藍屏，我們建議卸載 Halcon 或手動移除舊驅動程式（若已安裝）。\n受影響範圍：\nWindows 10 版本 2004 組建 \u003e= 19041.423、20H2、21H1 或 21H2\nWindows 11。\n我們建議先卸載 Halcon，然後依照本支援文章中的說明安裝新驅動程式。\n卸載 Halcon 開啟「新增或移除程式」。\n在「應用程式與功能」下，搜尋「halcon」。\n點選清單中出現的項目，然後依序點選「解除安裝」與「解除安裝」。\n點選「是」以繼續卸載 Halcon，等待 Halcon 解除安裝程式啟動，然後點選「解除安裝」以移除 Halcon。\n替代選項：手動移除 Halcon USB 加密狗驅動程式 如果您不想重新啟動電腦，或基於某些原因不想重新安裝 Halcon，可以使用此選項。在大多數情況下，最好改為依照「卸載 Halcon」的選項進行操作。\n驅動程式安裝後會儲存在 Windows 驅動程式存放區的檔案儲存庫中，位置如下：\nC:\\Windows\\System32\\DriverStore\\FileRepository\n一般情況下，您可以前往裝置管理員，解除安裝裝置並選擇刪除驅動程式，但由於插入 USB 加密狗會導致 Windows 崩潰，因此我們需要手動移除。安裝新驅動程式後，Windows 將自動找到適當的（新）驅動程式。\n如何使用 pnputil 移除裝置驅動程式 以下說明中，「引號」內的文字為應輸入命令列的內容（輸入時不含引號）。\n開啟命令提示字元。\n在命令提示字元中，輸入「pnputil -e」以列出所有已安裝的驅動程式。\n在輸出結果的開頭部分，尋找套件名稱包含 Sentinel HASP 或 SafeNet 的驅動程式。\n執行「pnputil /delete-driver drivername.inf /uninstall」以逐一移除這些驅動程式。\n範例：若要移除發行者名稱為 oem53.inf 的驅動程式，請輸入「pnputil /delete-driver oem53.inf /uninstall」並按下 Enter。\n請注意，此情況下 pnputil 的輸出結果來自已安裝更新驅動程式的正常運作系統（缺少舊驅動程式的截圖）。\n對於無法正常運作的系統，應會列出類似的驅動程式，但驅動程式套件提供者可能不同。\n安裝新的 Halcon USB 授權加密狗驅動程式 以下說明中，「引號」內的文字為應輸入命令列的內容（輸入時不含引號）。\n下載並解壓縮新驅動程式，右鍵點選已下載的 zip 檔案，然後點選「解壓縮全部」與「解壓縮」。\n開啟命令提示字元（若先前已關閉）。\n複製已解壓縮驅動程式資料夾的路徑，例如 C:\\Users\\stian\\Downloads\\haspdinst_8.53。\n在命令提示字元中，輸入「cd」並貼上已解壓縮驅動程式的路徑，例如「cd C:\\Users\\stian\\Downloads\\haspdinst_8.53」。\n在命令提示字元中輸入「haspdinst.exe /install」，然後按下 Enter。\n安裝程序隨即開始執行。\n最後更新：2024-06-03 | 在官方支援網站上檢視",
    "description": "如果您不想重新啟動電腦，或基於某些原因不想重新安裝 Halcon，可以使用此選項。在大多數情況下，最好依照...",
    "tags": [
      "Usb-Camera",
      "Licensing"
    ],
    "title": "連接 Halcon USB 授權加密狗時電腦出現藍屏",
    "uri": "/sc-support/zh-hant/cameras-video/halcon-bluescreen-fix/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "為了將完整的高爾夫揮桿動作納入影像畫面，您需要涵蓋約 3.1 公尺 / 10 英尺 的垂直距離。\n請使用以下查詢表來估算鏡頭與高爾夫球手之間所需的最小距離。若使用焦距為 3.8–11mm 的變焦鏡頭，完全廣角端即對應 3.8 mm。\n影像感光元件 3.5 mm 3.8 mm 4.0 mm 4.4 mm 6 mm 8 mm 1/1.2\" [21 mm] - - - - - 2 m 1/1.8\" [14 mm] - - - 2 m - - 1/2\" [13 mm] 1.7 m 2 m - - 4 m - 1/3\" [9 mm] 2.7 m 3 m - - 5.2 m - 市面上有廣角鏡頭及魚眼鏡頭可讓您以更近的距離拍攝，但影像的彎曲與變形會使其不適合用於高爾夫分析，因為此類分析需要評估球桿、身體及手臂的角度。\n最後更新：2021-06-16 | 在官方支援網站上檢視",
    "description": "SwingCatalyst 擊球準備中攝影機擺放的最小距離要求",
    "tags": [],
    "title": "最小攝影機距離",
    "uri": "/sc-support/zh-hant/cameras-video/minimum-distances/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 相機與影片",
    "content": "本文介紹各種相機設定。部分設定的名稱可能因相機類型／製造商不同而略有差異。\n相機設定分為不同的分頁標籤。\n進階相機設定視窗提供所有您可能需要的設定選項，讓我們逐一了解每項設定。\n相機分頁 FLIR Blackfly S 相機的預設設定範例： 上圖所示為預設相機設定，請注意大多數設定均設為 Auto，我們可以調整這些設定，以便更好地掌控運動分析的影像品質。\n幀速率 勾選「幀速率控制啟用」核取方塊後，您可以手動設定幀速率；若未勾選此方塊，幀速率基本上會設為 Auto（注意：此相機的最高幀速率為 226 FPS）。\n若您所獲得的幀速率低於預期，可能是相機的曝光／快門速度設定所導致，例如曝光時間過長時，將無法使用高快門速度。請參閱疑難排解章節。\n更改快門速度：\n除非在室外或光線充足的環境下，否則建議使用手動快門速度。\n曝光時間／快門速度超過 2ms 可能導致運動分析時影像模糊。\n為減少影格模糊，我們建議快門速度低於 2ms（2000μs），在光線充足的情況下，快門速度可低於 1ms（1000μs）。\n影像亮度取決於快門速度、Gain 設定、鏡頭光圈以及可用光線量的綜合效果。\n更改相機 Gain：\n在光線變化的環境下，將 Gain 設為 Auto 較為理想；但若是室內固定環境，將 Gain 設為手動模式則是更好的選擇。\ndB 值越高，影像越亮，但同時也會產生更多雜訊，可能使整體影像品質下降。有時為了降低快門速度以獲得清晰的逐幀影像（例如擊球瞬間的球桿、棒球棒等），適度提高 Gain 值（即使會增加雜訊）是值得的。\n注意：實際 Gain（dB）值可能因型號及製造商不同而有所差異。\n更改 Gamma 及黑階：\n黑階可視為一種亮度調整方式，黑階對應相機感測器上任何像素所能回傳的最小值。\n提高黑階值可使影像變亮。\n我們建議保留預設值。\n如需了解更多改善影像品質的詳細資訊，請參閱附有對比圖片的支援文章：improving-image-quality.md\n更改相機白平衡：\n通常我們建議將此設定保留為 Auto（持續），但若要達到最高幀速率，也需要將其關閉。\n白平衡會影響影像的色溫，若白平衡設定偏差過大，影像將不夠理想，通常會使影像看起來偏紅或偏綠。\n啟用 Auto 白平衡會犧牲部分幀速率，使幀速率降至 200 FPS，而非相機最高的 226 FPS。\n裝置連結頻寬：\n我們建議保留預設設定，但降低此值可減少掉幀情況，代價是 FPS 降低。\n注意：並非所有相機都具有此設定。\nRegion of Interest（ROI / AOI）分頁 對於支援此功能的相機，建議優先使用 Region of Interest／Area of Interest，而非裁切功能。\nRegion of Interest（ROI）是一種縮小影像尺寸並降低每張影像所需頻寬的方法。透過縮小影像尺寸，可以提高幀速率，因為整體像素讀取需求較小。ROI 可對幀速率產生正面影響，並降低相機頻寬使用量。\n若要更改 Region of Interest，可向左拖曳高度滑桿以縮小影像高度。\n由於我們已更改影像高度，現在也可以調整 Y 偏移量，這對於因影像尺寸縮小而需替代實體移動相機的情況很有幫助。\n返回相機分頁並查看幀速率設定後，可以看到最高幀速率現在可設定為 288（這是因為我們透過縮小相機感測器高度套用了 Region of Interest）。\n濾波器分頁 這些設定適用於所有相機類型，但結果可能因解析度和相機設定而有所不同。如需了解更多如何改善相機影像品質的資訊，請參閱本文。\n疑難排解 視相機類型（USB3 或 GigE）不同，可能需要採取不同的疑難排解步驟。\n首先重要的是嘗試找出您所遇到的問題**類型。\nUSB 3.0 使用上可能較為複雜。例如，部分 USB 線纜效能優於其他線纜，而某些 USB 3.0 控制器也可能造成問題。詳情請參閱我們的推薦 USB 元件文章：recommended-usb3-components.md\n燈光閃爍 手動將 FPS 設定為 60 或 120 FPS 應有助於大幅減少閃爍現象。建議考慮將燈光升級為 LED。\n掉幀 降低每台裝置的裝置連結頻寬可能有助於避免掉幀。若降低幅度足夠，頻寬設定將影響幀速率。\n特別是在多相機設定中，降低頻寬有助於以犧牲少量每秒幀數為代價來穩定系統。對於沒有此設定的相機，降低 FPS 並使用 Region Of Interest 可能有助於減少頻寬消耗。\n頻寬使用範例：\nUSB 3.0 標稱傳輸速率為 5Gb/s，即 625 MB/s。\n一台解析度為 1920 x 1200、以 150 FPS 運行的 USB 3.0 相機，每台相機大約使用 345MB/s（每秒百萬位元組）。因此，依照我們對多相機設定的建議，擁有專為機器視覺相機設計的高品質 USB 3.0 線纜，以及獨立的 USB 3.0 控制器卡，以將相機與系統中其他連接的 USB 裝置隔離，是非常重要的。\nRegion Of Interest（ROI） 使用 Region of Interest（或 Area of Interest）將縮小整體影像尺寸並提升 FPS，同時也有助於降低頻寬使用量，進而減少掉幀情況（請參閱上方如何使用 ROI）。\n連線問題（相機斷線） USB 3 可能容易出現連線問題。這些問題通常源於劣質的 USB 3.0 延長線、線纜整體長度過長，或僅僅是因為線纜過度彎折而造成損壞。\n編碼時間／GPU 設定 其他問題\n視您的硬體而定，開啟銳化和降噪濾波器不一定最為適合，關閉這些選項將減少部分 CPU 和 GPU 使用量。您可以在進階相機設定的濾波器分頁中找到相機濾波器。更多關於濾波器的資訊請參閱：improving-image-quality.md\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "SwingCatalyst 進階相機設定指南，包含曝光、Gain 及白平衡設定",
    "tags": [
      "Troubleshooting",
      "Gige-Camera",
      "Usb-Camera",
      "Flir"
    ],
    "title": "進階相機設定指南",
    "uri": "/sc-support/zh-hant/cameras-video/advanced-camera-settings/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "本文說明如何從 Swing Catalyst / Motion Catalyst 匯出錄製。\n如何匯出錄製 錄製可透過多種方式匯出，可從堆疊或檔案總管本身進行。兩者在功能上並無差異。\n從堆疊匯出 從檔案總管匯出 您可以從檔案總管匯出錄製，方法是將錄製拖曳至匯出清單（請參見下方截圖），或以滑鼠右鍵點擊錄製並從可用的匯出選項中選擇。\n檔案總管匯出清單 匯出選項 以錄製檔案匯出（預設選項）可讓其他 Swing Catalyst 或 Motion Catalyst 使用者匯入該錄製。所有與錄製一同收集的資料均會儲存於錄製檔案中。\n若您只希望匯出影片檔案，請選擇「僅限影片」。請注意，若您使用多台攝影機，每個角度將分別匯出為獨立的影片檔案。\n有關原始資料選項的詳細說明，請參閱我們的原始資料文章。\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "錄製可透過多種方式匯出，可從堆疊或檔案總管本身進行。兩者在功能上並無差異。",
    "tags": [],
    "title": "匯出錄製",
    "uri": "/sc-support/zh-hant/software-features/export-recordings/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "Swing Catalyst 與 Motion Catalyst 支援多種鍵盤快速鍵。\n本文詳細說明各項鍵盤快速鍵。\n鍵盤快速鍵可以是單一按鍵，也可以是組合按鍵。\n在本文中，超過單一按鍵的快速鍵會以 + 符號連接表示。\n這並不代表您需要按下鍵盤上的 + 鍵，而是表示您需要同時按下兩個（或更多）按鍵。\n播放 鍵盤熱鍵／快速鍵 動作\nSpace 切換播放／暫停\nRight 向前步進一個影格\nLeft 向後步進一個影格\nShift Right 向前步進總時長的 5%\nShift Left 向後步進總時長的 5%\nUp 增加播放速度\nDown 降低播放速度\n書籤 鍵盤熱鍵／快速鍵 動作／說明\n1、2 或 3 跳至檢視埠 A 中開啟的錄製之書籤 1 至 3 的位置\nAlt + 1、2 或 3 跳至檢視埠 B 中開啟的錄製之書籤 1 至 3 的位置\nCtrl + 1、2 或 3 將檢視埠 A 的書籤 1 至 3 設定至目前播放位置\nCtrl + Alt 1、2 或 3 將檢視埠 B 的書籤 1 至 3 設定至目前播放位置\nCtrl + Shift 1、2 或 3 依書籤 1 至 3 進行同步\nCtrl + B 鎖定／解鎖書籤以進行編輯\n繪圖工具 熱鍵 動作（啟用繪圖工具）\nC 圓形\nR 矩形\nV 箭頭\nL 線條\nA 角度\nF 自由角度\nS 身體搖晃\nE 橡皮擦\nH 手\nT 文字\nB 油漆桶（清除全部）\n動作擷取 熱鍵 動作\nShift+S 切換隱藏骨骼\nShift+C 切換隱藏質量中心符號\nShift+A 切換角度工具\nShift+L 切換連接關節工具\nShift+T 切換追蹤關節工具\nShift+M 切換移動關節工具\n其他 熱鍵 動作／說明\nCtrl + O 開啟／關閉檔案總管\nCtrl + 滑鼠向上滾動 放大（視訊或資料圖表，依滑鼠焦點而定）\nCtrl + 滑鼠向下滾動 縮小（視訊或圖表資料，依滑鼠焦點而定）\nAlt + C 切換捕捉模式（需先選取使用者）\nAlt + A 在檢視埠 A 中開啟堆疊中的最新錄製\nAlt + B 在檢視埠 B 中開啟堆疊中的最新錄製\n最後更新：2025-05-05 | 在官方支援網站上檢視",
    "description": "Swing Catalyst 軟體中所有可用鍵盤快速鍵與熱鍵的完整清單",
    "tags": [
      "Motion-Capture"
    ],
    "title": "鍵盤快速鍵與熱鍵",
    "uri": "/sc-support/zh-hant/software-features/keyboard-shortcuts/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "簡介 什麼是額狀平面扭矩？ 額狀平面扭矩（FPT）測量您在高爾夫揮桿過程中，身體圍繞額狀平面軸所產生的旋轉力。可以將其理解為測量您利用地面反作用力產生旋轉動力的效率。\n當您揮動高爾夫球桿時，雙腳向地面施力，地面同時向上反推。您身體的質量中心與腳部所受力量之間的相互作用，產生了扭矩——一種有助於驅動揮桿的旋轉力。\n功能組成 FPT 功能包含兩個主要組成部分：\nFPT 圖表（DataBox） - 一個時間序列圖表，顯示整個揮桿過程中的扭矩數值及關鍵指標\n3D 視覺化 - 在動作擷取骨骼檢視上即時疊加力臂與力分解的視覺效果\n為什麼這很重要？ 了解您的額狀平面扭矩可以幫助您：\n識別動力產生模式 - 了解您將地面力量轉化為旋轉能量的效率\n視覺化生物力學槓桿 - 在 3D 中查看質量中心與地面力量之間的力臂關係\n分析計時 - 了解峰值扭矩相對於擊球時機的發生時間\n分解力的組成 - 查看地面反作用力如何分布於不同方向\n比較揮桿 - 追蹤您在力量產生方面的變化\n前置條件 若要使用額狀平面扭矩分析，您需要：\n必要條件：含地面反作用力數據的力量板錄製\n必要條件：用於質量中心追蹤的 MoCap 數據\n必要條件：已完成相機校準的設置\n必要條件：體重測量數據（用於標準化數值）\n快速入門 將 FPT DataBox 加入您的版面配置 在分析檢視中開啟已錄製的揮桿\n點擊 DataBox 選單或版面配置編輯器\n在可用的 DataBox 清單中找到額狀平面扭矩\n將其加入您的分析版面配置\nDataBox 將自動從您的錄製中填入數據\n啟用 3D 視覺化 力臂與力分解的視覺效果會在 3D 影像檢視區中與骨骼一同顯示。若要啟用：\n開啟包含 MoCap 與力量板數據的錄製\n在影像檢視中找到力向量設定面板\n啟用您想查看的視覺化選項\n所需數據 若要讓 FPT 分析正常運作，您的錄製必須包含：\n數據類型 是否必要 用途 力量板數據 是 提供地面反作用力（Fx、Fz）及壓力中心 MoCap 是 提供質量中心位置，用於扭矩計算及 3D 視覺化 體重 是 用於標準化扭矩數值以便比較 相機校準 是 確保正確的 3D 對齊所需 擊球書籤 建議 啟用相對於擊球接觸的計時指標 了解顯示內容 圖表 主圖表顯示隨時間變化的扭矩數值：\nX軸（水平）：從揮桿開始到完成位置的時間\nY軸（垂直）：扭矩數值（可顯示百分比及/或絕對值）\n零線：位於零點的水平線——高於與低於零線的數值分別代表相反的旋轉方向\n雙軸系統 圖表可同時顯示兩種不同的刻度：\n左軸（百分比）：顯示以體重標準化的扭矩（Nm/kg，以力因數表示）\n右軸（絕對值）：顯示以 Newton-meter（Nm）為單位的實際扭矩\n關鍵指標 圖表旁顯示三項關鍵指標：\n1. 最大扭矩（力因數） 顯示內容：峰值扭矩力度，以體重標準化\n單位：Nm/kg（以力因數表示）\n範例：數值 0.85 表示您的峰值扭矩為每公斤體重 0.85 Newton-meter\n2. 最大扭矩計時 顯示內容：峰值扭矩相對於擊球時機的發生時間\n單位：毫秒（ms）\n注意：僅在設置了擊球書籤時才會顯示\n範例：-50ms 表示峰值扭矩發生在擊球前 50ms；+20ms 表示擊球後 20ms；0ms 表示恰好在擊球時\n3. 力因數（原始值） 顯示內容：包含方向（正或負）的原始標準化扭矩數值\n單位：Nm/kg\n範例：+0.85 與 -0.85 具有相同的力度，但旋轉方向相反\n階段高亮顯示 啟用後，彩色色帶將疊加在圖表上，顯示您揮桿的不同階段：\n後揮、下揮桿、擊球、隨揮 3D 視覺化 力臂視覺化 力臂視覺化顯示您的質量中心（CoM）與地面反作用力之間的生物力學槓桿關係。\n元素 外觀 顯示內容 力臂線 橘色實線 從您的 CoM 到作用線的垂直距離 作用線 橘色虛線 力的作用方向延伸線 距離標籤 深色背景上的白色文字 力臂距離，單位為公分（±X.X cm） 力向量分解 力分解視覺化將總地面反作用力分解為三個垂直分量。無論相機視角為何，各顏色始終代表相同的物理力方向：\n分量 顏色 物理方向 顯示內容 X 分量 粉紅色 左右（內外側） 側向力分布 Y 分量 青色 上下（垂直） 垂直力分布 Z 分量 綠色 前後（前後側） 前後力分布 每個分量箭頭同時顯示一個百分比標籤，表示該方向占總力的比例。\n相機視角行為 力向量相對於您的相機視角顯示。為清晰起見，呈現為深度方向（進入/穿出螢幕）的分量將被隱藏：\n相機視角 可見分量 隱藏分量 正面角度 X（粉紅色，水平）、Y（青色，垂直） Z（綠色，深度） 目標線視角 Z（綠色，水平）、Y（青色，垂直） X（粉紅色，深度） 注意：顏色始終代表相同的物理方向——粉紅色始終代表內外側力，青色始終代表垂直力，綠色始終代表前後側力。僅螢幕位置會根據相機角度而改變。\n3D 視覺化設定 力臂設定 設定 預設值 說明 顯示力臂 關閉 切換從 CoM 到力作用線的橘色實線 顯示作用線 關閉 切換顯示力方向延伸的橘色虛線 顯示距離標籤 關閉 切換距離數值標籤（±X.X cm） 力分解設定 設定 預設值 說明 顯示 X/Y/Z 分量 關閉 切換所有三個分量箭頭及百分比標籤 設定選項（圖表） 顯示百分比（百分比軸）：預設開啟 - 切換標準化扭矩（Nm/kg）\n顯示 Newton（絕對值軸）：預設關閉 - 切換絕對扭矩（Nm）\n高亮揮桿階段：預設關閉 - 顯示標示揮桿階段的彩色色帶\n顯示網格線：預設開啟 - 顯示水平網格線\n圖表類型：山形圖表（預設）或折線圖\n疑難排解 顯示「平臺上無人」訊息 確認運動員在開始錄製時站在力量板上\n確認已在運動員資料中輸入體重\n確認力量板校準已完成\n圖表數據空白或遺失 確認錄製期間力量板處於啟用狀態\n確認已錄製 MoCap 數據（FPT 計算必要條件）\n確認錄製包含完整的揮桿時長\n計時指標未顯示 在您的錄製中設置擊球書籤 最後更新：2026-01-09 | 在官方支援網站上查看",
    "description": "額狀平面扭矩（FPT）測量您在高爾夫揮桿過程中，身體圍繞額狀平面軸所產生的旋轉力。可以將其理解為測量您利用地面反作用力產生旋轉動力的效率……",
    "tags": [
      "Troubleshooting",
      "Pressure-Data",
      "Force-Data",
      "Motion-Capture"
    ],
    "title": "額狀平面扭矩分析 - 使用者指南",
    "uri": "/sc-support/zh-hant/software-features/frontal-plane-torque/index.html"
  },
  {
    "breadcrumb": "Swing Catalyst 支援 \u003e 軟體與功能",
    "content": "本文介紹在 10.0 版中引入的全新關鍵指標資料方塊。雖然此功能於 10.0 版發布，但本文涵蓋的是 10.2 版中可用的功能，可能與較早版本有所不同。\n適用版本：10.2 及以上。\n適用於：Motion Catalyst\n所需硬體：Force Plates / Motion Plate / Dual Motion Plate。\n需要支援關鍵指標的軟體授權。\n我使用的是哪個版本？\n什麼是關鍵指標？ 關鍵指標源自力資料，並針對此資料進行分析。\n不同的活動類型有不同的關鍵指標，並非所有活動類型都提供相同數量的關鍵指標。\n哪些活動類型提供關鍵指標？ 在 Motion Catalyst 中，以下活動類型提供關鍵指標：\nCounter Movement Jump\nDynamic Balance\nIsometric Mid-Thigh Pull\nPlyo-push up\nPush Up\nRepeated Hops\n靜態平衡\nSquat Jump\nUpper Body Plank\n我們計劃在未來擴展此清單，並支援其他運動項目，例如高爾夫和棒球。\n關鍵指標資料方塊 關鍵指標是一個全新的資料方塊，可顯示活動類型中重要時間點的關鍵數值。\n您可以透過選取每個「磚塊」並從關鍵指標下拉式選單中進行選擇，來自訂要顯示的關鍵指標。這些選擇將在您下次開啟錄製時被記住，類似於系統記住顯示哪個資料方塊的方式。\n顯示選項 您可以將關鍵指標資料方塊的版面配置變更為顯示 4、6 或 8 個指標。\n減少指標數量有助於降低雜亂感並提升可讀性。\n匯出所有關鍵指標（TSV） 關鍵指標資料方塊也支援直接從資料方塊本身，將所有可用的關鍵指標匯出至 TSV（以 Tab 分隔的數值）檔案。\n此錄製缺少關鍵指標 在某些情況下，特定活動類型或已錄製的活動類型無法提供關鍵指標，點擊「更多資訊」可以查看關鍵指標無法使用的原因。\n常見原因：\n未正確執行活動類型／未按照規定流程進行。\n在執行活動類型前移動過多。\n體重設定不正確。\n力量板校準不良（請嘗試重新校準／歸零 Force Plates）。\nForce Plates 設置不當。\n我沒有關鍵指標資料方塊 關鍵指標僅適用於 Motion Catalyst 及特定數量的活動類型。\n可能的原因：\n授權不支援關鍵指標。\n未使用 Motion Catalyst／沒有 Motion Catalyst 的授權。\n活動類型或運動項目不支援關鍵指標。\n最後更新：2023-12-19 | 在官方支援網站上檢視",
    "description": "關鍵指標源自力資料，並針對此資料進行分析。",
    "tags": [
      "Motion-Plate",
      "Force-Data",
      "Licensing"
    ],
    "title": "關鍵指標",
    "uri": "/sc-support/zh-hant/software-features/key-metrics/index.html"
  }
]
