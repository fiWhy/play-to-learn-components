(globalThis.webpackChunkplay_to_learn_components=globalThis.webpackChunkplay_to_learn_components||[]).push([[179],{77364:(i,s,r)=>{var t={"./Binary_Property/ASCII.js":24934,"./Binary_Property/ASCII_Hex_Digit.js":57770,"./Binary_Property/Alphabetic.js":98982,"./Binary_Property/Any.js":72019,"./Binary_Property/Assigned.js":73520,"./Binary_Property/Bidi_Control.js":23101,"./Binary_Property/Bidi_Mirrored.js":58284,"./Binary_Property/Case_Ignorable.js":94991,"./Binary_Property/Cased.js":16723,"./Binary_Property/Changes_When_Casefolded.js":5014,"./Binary_Property/Changes_When_Casemapped.js":8926,"./Binary_Property/Changes_When_Lowercased.js":98149,"./Binary_Property/Changes_When_NFKC_Casefolded.js":54800,"./Binary_Property/Changes_When_Titlecased.js":17066,"./Binary_Property/Changes_When_Uppercased.js":85058,"./Binary_Property/Dash.js":4615,"./Binary_Property/Default_Ignorable_Code_Point.js":62891,"./Binary_Property/Deprecated.js":71290,"./Binary_Property/Diacritic.js":35724,"./Binary_Property/Emoji.js":99781,"./Binary_Property/Emoji_Component.js":43252,"./Binary_Property/Emoji_Modifier.js":12020,"./Binary_Property/Emoji_Modifier_Base.js":3012,"./Binary_Property/Emoji_Presentation.js":22129,"./Binary_Property/Extended_Pictographic.js":39513,"./Binary_Property/Extender.js":6758,"./Binary_Property/Grapheme_Base.js":90019,"./Binary_Property/Grapheme_Extend.js":64785,"./Binary_Property/Hex_Digit.js":34807,"./Binary_Property/IDS_Binary_Operator.js":20458,"./Binary_Property/IDS_Trinary_Operator.js":4347,"./Binary_Property/ID_Continue.js":58684,"./Binary_Property/ID_Start.js":38270,"./Binary_Property/Ideographic.js":13681,"./Binary_Property/Join_Control.js":82545,"./Binary_Property/Logical_Order_Exception.js":76992,"./Binary_Property/Lowercase.js":7359,"./Binary_Property/Math.js":92401,"./Binary_Property/Noncharacter_Code_Point.js":77398,"./Binary_Property/Pattern_Syntax.js":69192,"./Binary_Property/Pattern_White_Space.js":81955,"./Binary_Property/Quotation_Mark.js":55345,"./Binary_Property/Radical.js":70839,"./Binary_Property/Regional_Indicator.js":92988,"./Binary_Property/Sentence_Terminal.js":63970,"./Binary_Property/Soft_Dotted.js":80279,"./Binary_Property/Terminal_Punctuation.js":30303,"./Binary_Property/Unified_Ideograph.js":93857,"./Binary_Property/Uppercase.js":41138,"./Binary_Property/Variation_Selector.js":77985,"./Binary_Property/White_Space.js":8397,"./Binary_Property/XID_Continue.js":7589,"./Binary_Property/XID_Start.js":56847,"./General_Category/Cased_Letter.js":81426,"./General_Category/Close_Punctuation.js":27453,"./General_Category/Connector_Punctuation.js":34547,"./General_Category/Control.js":11879,"./General_Category/Currency_Symbol.js":67104,"./General_Category/Dash_Punctuation.js":15369,"./General_Category/Decimal_Number.js":73044,"./General_Category/Enclosing_Mark.js":32927,"./General_Category/Final_Punctuation.js":44266,"./General_Category/Format.js":24665,"./General_Category/Initial_Punctuation.js":30549,"./General_Category/Letter.js":39718,"./General_Category/Letter_Number.js":41974,"./General_Category/Line_Separator.js":17041,"./General_Category/Lowercase_Letter.js":91042,"./General_Category/Mark.js":39370,"./General_Category/Math_Symbol.js":6460,"./General_Category/Modifier_Letter.js":3268,"./General_Category/Modifier_Symbol.js":98831,"./General_Category/Nonspacing_Mark.js":59190,"./General_Category/Number.js":69744,"./General_Category/Open_Punctuation.js":82842,"./General_Category/Other.js":8339,"./General_Category/Other_Letter.js":37539,"./General_Category/Other_Number.js":7010,"./General_Category/Other_Punctuation.js":84940,"./General_Category/Other_Symbol.js":92141,"./General_Category/Paragraph_Separator.js":44790,"./General_Category/Private_Use.js":9e4,"./General_Category/Punctuation.js":17782,"./General_Category/Separator.js":52424,"./General_Category/Space_Separator.js":23614,"./General_Category/Spacing_Mark.js":69839,"./General_Category/Surrogate.js":76417,"./General_Category/Symbol.js":62437,"./General_Category/Titlecase_Letter.js":11742,"./General_Category/Unassigned.js":28024,"./General_Category/Uppercase_Letter.js":99560,"./Script/Adlam.js":35269,"./Script/Ahom.js":48458,"./Script/Anatolian_Hieroglyphs.js":60018,"./Script/Arabic.js":64773,"./Script/Armenian.js":82801,"./Script/Avestan.js":94173,"./Script/Balinese.js":60873,"./Script/Bamum.js":58506,"./Script/Bassa_Vah.js":26635,"./Script/Batak.js":17308,"./Script/Bengali.js":85228,"./Script/Bhaiksuki.js":20358,"./Script/Bopomofo.js":25815,"./Script/Brahmi.js":29830,"./Script/Braille.js":71856,"./Script/Buginese.js":93792,"./Script/Buhid.js":14690,"./Script/Canadian_Aboriginal.js":98157,"./Script/Carian.js":35551,"./Script/Caucasian_Albanian.js":35680,"./Script/Chakma.js":21283,"./Script/Cham.js":11206,"./Script/Cherokee.js":28998,"./Script/Chorasmian.js":77184,"./Script/Common.js":43613,"./Script/Coptic.js":11727,"./Script/Cuneiform.js":36088,"./Script/Cypriot.js":61835,"./Script/Cyrillic.js":11867,"./Script/Deseret.js":23702,"./Script/Devanagari.js":99390,"./Script/Dives_Akuru.js":4148,"./Script/Dogra.js":37828,"./Script/Duployan.js":15181,"./Script/Egyptian_Hieroglyphs.js":41267,"./Script/Elbasan.js":12792,"./Script/Elymaic.js":59563,"./Script/Ethiopic.js":53261,"./Script/Georgian.js":84933,"./Script/Glagolitic.js":65272,"./Script/Gothic.js":31591,"./Script/Grantha.js":63905,"./Script/Greek.js":11806,"./Script/Gujarati.js":13061,"./Script/Gunjala_Gondi.js":16371,"./Script/Gurmukhi.js":43339,"./Script/Han.js":81047,"./Script/Hangul.js":71283,"./Script/Hanifi_Rohingya.js":64121,"./Script/Hanunoo.js":93596,"./Script/Hatran.js":5958,"./Script/Hebrew.js":12311,"./Script/Hiragana.js":64462,"./Script/Imperial_Aramaic.js":38743,"./Script/Inherited.js":85045,"./Script/Inscriptional_Pahlavi.js":88047,"./Script/Inscriptional_Parthian.js":41660,"./Script/Javanese.js":15177,"./Script/Kaithi.js":81607,"./Script/Kannada.js":57531,"./Script/Katakana.js":1988,"./Script/Kayah_Li.js":49773,"./Script/Kharoshthi.js":77565,"./Script/Khitan_Small_Script.js":24860,"./Script/Khmer.js":22229,"./Script/Khojki.js":13749,"./Script/Khudawadi.js":90894,"./Script/Lao.js":16533,"./Script/Latin.js":78e3,"./Script/Lepcha.js":60404,"./Script/Limbu.js":63856,"./Script/Linear_A.js":2002,"./Script/Linear_B.js":66382,"./Script/Lisu.js":98852,"./Script/Lycian.js":17316,"./Script/Lydian.js":63358,"./Script/Mahajani.js":84806,"./Script/Makasar.js":55139,"./Script/Malayalam.js":3322,"./Script/Mandaic.js":32959,"./Script/Manichaean.js":19054,"./Script/Marchen.js":47639,"./Script/Masaram_Gondi.js":61146,"./Script/Medefaidrin.js":99942,"./Script/Meetei_Mayek.js":95767,"./Script/Mende_Kikakui.js":41928,"./Script/Meroitic_Cursive.js":34789,"./Script/Meroitic_Hieroglyphs.js":50335,"./Script/Miao.js":30098,"./Script/Modi.js":11463,"./Script/Mongolian.js":56533,"./Script/Mro.js":45047,"./Script/Multani.js":16182,"./Script/Myanmar.js":41649,"./Script/Nabataean.js":18186,"./Script/Nandinagari.js":1008,"./Script/New_Tai_Lue.js":55772,"./Script/Newa.js":75475,"./Script/Nko.js":31917,"./Script/Nushu.js":86013,"./Script/Nyiakeng_Puachue_Hmong.js":95852,"./Script/Ogham.js":43899,"./Script/Ol_Chiki.js":48119,"./Script/Old_Hungarian.js":80301,"./Script/Old_Italic.js":18902,"./Script/Old_North_Arabian.js":79733,"./Script/Old_Permic.js":11636,"./Script/Old_Persian.js":46176,"./Script/Old_Sogdian.js":2743,"./Script/Old_South_Arabian.js":68137,"./Script/Old_Turkic.js":42760,"./Script/Oriya.js":47022,"./Script/Osage.js":26680,"./Script/Osmanya.js":61073,"./Script/Pahawh_Hmong.js":98673,"./Script/Palmyrene.js":44254,"./Script/Pau_Cin_Hau.js":68490,"./Script/Phags_Pa.js":31347,"./Script/Phoenician.js":76079,"./Script/Psalter_Pahlavi.js":56001,"./Script/Rejang.js":51808,"./Script/Runic.js":2645,"./Script/Samaritan.js":14510,"./Script/Saurashtra.js":69048,"./Script/Sharada.js":64538,"./Script/Shavian.js":68417,"./Script/Siddham.js":36520,"./Script/SignWriting.js":68355,"./Script/Sinhala.js":74833,"./Script/Sogdian.js":65593,"./Script/Sora_Sompeng.js":43047,"./Script/Soyombo.js":45262,"./Script/Sundanese.js":71895,"./Script/Syloti_Nagri.js":43824,"./Script/Syriac.js":93662,"./Script/Tagalog.js":43883,"./Script/Tagbanwa.js":22226,"./Script/Tai_Le.js":36559,"./Script/Tai_Tham.js":78818,"./Script/Tai_Viet.js":54207,"./Script/Takri.js":27381,"./Script/Tamil.js":36663,"./Script/Tangut.js":78651,"./Script/Telugu.js":26602,"./Script/Thaana.js":18219,"./Script/Thai.js":81322,"./Script/Tibetan.js":5440,"./Script/Tifinagh.js":56685,"./Script/Tirhuta.js":58107,"./Script/Ugaritic.js":3035,"./Script/Vai.js":78545,"./Script/Wancho.js":75337,"./Script/Warang_Citi.js":12141,"./Script/Yezidi.js":73163,"./Script/Yi.js":74391,"./Script/Zanabazar_Square.js":89485,"./Script_Extensions/Adlam.js":27109,"./Script_Extensions/Ahom.js":91734,"./Script_Extensions/Anatolian_Hieroglyphs.js":4853,"./Script_Extensions/Arabic.js":27741,"./Script_Extensions/Armenian.js":34121,"./Script_Extensions/Avestan.js":81562,"./Script_Extensions/Balinese.js":50994,"./Script_Extensions/Bamum.js":38738,"./Script_Extensions/Bassa_Vah.js":59430,"./Script_Extensions/Batak.js":17717,"./Script_Extensions/Bengali.js":69387,"./Script_Extensions/Bhaiksuki.js":50187,"./Script_Extensions/Bopomofo.js":87340,"./Script_Extensions/Brahmi.js":70559,"./Script_Extensions/Braille.js":50882,"./Script_Extensions/Buginese.js":68678,"./Script_Extensions/Buhid.js":47247,"./Script_Extensions/Canadian_Aboriginal.js":23717,"./Script_Extensions/Carian.js":22601,"./Script_Extensions/Caucasian_Albanian.js":66772,"./Script_Extensions/Chakma.js":2380,"./Script_Extensions/Cham.js":60058,"./Script_Extensions/Cherokee.js":175,"./Script_Extensions/Chorasmian.js":27539,"./Script_Extensions/Common.js":55775,"./Script_Extensions/Coptic.js":29737,"./Script_Extensions/Cuneiform.js":64249,"./Script_Extensions/Cypriot.js":14070,"./Script_Extensions/Cyrillic.js":60473,"./Script_Extensions/Deseret.js":10119,"./Script_Extensions/Devanagari.js":70152,"./Script_Extensions/Dives_Akuru.js":10474,"./Script_Extensions/Dogra.js":51570,"./Script_Extensions/Duployan.js":52804,"./Script_Extensions/Egyptian_Hieroglyphs.js":68495,"./Script_Extensions/Elbasan.js":56296,"./Script_Extensions/Elymaic.js":34914,"./Script_Extensions/Ethiopic.js":19250,"./Script_Extensions/Georgian.js":72721,"./Script_Extensions/Glagolitic.js":60654,"./Script_Extensions/Gothic.js":11968,"./Script_Extensions/Grantha.js":93921,"./Script_Extensions/Greek.js":53681,"./Script_Extensions/Gujarati.js":81046,"./Script_Extensions/Gunjala_Gondi.js":42781,"./Script_Extensions/Gurmukhi.js":67642,"./Script_Extensions/Han.js":61003,"./Script_Extensions/Hangul.js":13037,"./Script_Extensions/Hanifi_Rohingya.js":43624,"./Script_Extensions/Hanunoo.js":88263,"./Script_Extensions/Hatran.js":26713,"./Script_Extensions/Hebrew.js":71323,"./Script_Extensions/Hiragana.js":2173,"./Script_Extensions/Imperial_Aramaic.js":57573,"./Script_Extensions/Inherited.js":83551,"./Script_Extensions/Inscriptional_Pahlavi.js":68547,"./Script_Extensions/Inscriptional_Parthian.js":53154,"./Script_Extensions/Javanese.js":82722,"./Script_Extensions/Kaithi.js":65041,"./Script_Extensions/Kannada.js":27669,"./Script_Extensions/Katakana.js":72758,"./Script_Extensions/Kayah_Li.js":3868,"./Script_Extensions/Kharoshthi.js":48274,"./Script_Extensions/Khitan_Small_Script.js":88719,"./Script_Extensions/Khmer.js":41866,"./Script_Extensions/Khojki.js":64658,"./Script_Extensions/Khudawadi.js":43905,"./Script_Extensions/Lao.js":88585,"./Script_Extensions/Latin.js":99502,"./Script_Extensions/Lepcha.js":60143,"./Script_Extensions/Limbu.js":6570,"./Script_Extensions/Linear_A.js":7309,"./Script_Extensions/Linear_B.js":30052,"./Script_Extensions/Lisu.js":15835,"./Script_Extensions/Lycian.js":29795,"./Script_Extensions/Lydian.js":78840,"./Script_Extensions/Mahajani.js":52027,"./Script_Extensions/Makasar.js":43234,"./Script_Extensions/Malayalam.js":5455,"./Script_Extensions/Mandaic.js":81573,"./Script_Extensions/Manichaean.js":90567,"./Script_Extensions/Marchen.js":42674,"./Script_Extensions/Masaram_Gondi.js":91685,"./Script_Extensions/Medefaidrin.js":73935,"./Script_Extensions/Meetei_Mayek.js":12166,"./Script_Extensions/Mende_Kikakui.js":34212,"./Script_Extensions/Meroitic_Cursive.js":46027,"./Script_Extensions/Meroitic_Hieroglyphs.js":45226,"./Script_Extensions/Miao.js":42953,"./Script_Extensions/Modi.js":85878,"./Script_Extensions/Mongolian.js":50803,"./Script_Extensions/Mro.js":6344,"./Script_Extensions/Multani.js":86265,"./Script_Extensions/Myanmar.js":89463,"./Script_Extensions/Nabataean.js":1207,"./Script_Extensions/Nandinagari.js":4942,"./Script_Extensions/New_Tai_Lue.js":64065,"./Script_Extensions/Newa.js":18110,"./Script_Extensions/Nko.js":15908,"./Script_Extensions/Nushu.js":78816,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":16446,"./Script_Extensions/Ogham.js":49384,"./Script_Extensions/Ol_Chiki.js":34972,"./Script_Extensions/Old_Hungarian.js":86028,"./Script_Extensions/Old_Italic.js":47989,"./Script_Extensions/Old_North_Arabian.js":35854,"./Script_Extensions/Old_Permic.js":57219,"./Script_Extensions/Old_Persian.js":56274,"./Script_Extensions/Old_Sogdian.js":92186,"./Script_Extensions/Old_South_Arabian.js":32823,"./Script_Extensions/Old_Turkic.js":66950,"./Script_Extensions/Oriya.js":54564,"./Script_Extensions/Osage.js":25852,"./Script_Extensions/Osmanya.js":54362,"./Script_Extensions/Pahawh_Hmong.js":99360,"./Script_Extensions/Palmyrene.js":75402,"./Script_Extensions/Pau_Cin_Hau.js":63469,"./Script_Extensions/Phags_Pa.js":11766,"./Script_Extensions/Phoenician.js":69709,"./Script_Extensions/Psalter_Pahlavi.js":34977,"./Script_Extensions/Rejang.js":61951,"./Script_Extensions/Runic.js":92471,"./Script_Extensions/Samaritan.js":80525,"./Script_Extensions/Saurashtra.js":26768,"./Script_Extensions/Sharada.js":75781,"./Script_Extensions/Shavian.js":51754,"./Script_Extensions/Siddham.js":37675,"./Script_Extensions/SignWriting.js":48050,"./Script_Extensions/Sinhala.js":48309,"./Script_Extensions/Sogdian.js":66783,"./Script_Extensions/Sora_Sompeng.js":57292,"./Script_Extensions/Soyombo.js":85905,"./Script_Extensions/Sundanese.js":85764,"./Script_Extensions/Syloti_Nagri.js":32997,"./Script_Extensions/Syriac.js":57890,"./Script_Extensions/Tagalog.js":13784,"./Script_Extensions/Tagbanwa.js":90619,"./Script_Extensions/Tai_Le.js":93420,"./Script_Extensions/Tai_Tham.js":71072,"./Script_Extensions/Tai_Viet.js":76184,"./Script_Extensions/Takri.js":37464,"./Script_Extensions/Tamil.js":39843,"./Script_Extensions/Tangut.js":92443,"./Script_Extensions/Telugu.js":17481,"./Script_Extensions/Thaana.js":82012,"./Script_Extensions/Thai.js":44588,"./Script_Extensions/Tibetan.js":19981,"./Script_Extensions/Tifinagh.js":99695,"./Script_Extensions/Tirhuta.js":62529,"./Script_Extensions/Ugaritic.js":64792,"./Script_Extensions/Vai.js":23867,"./Script_Extensions/Wancho.js":53462,"./Script_Extensions/Warang_Citi.js":63630,"./Script_Extensions/Yezidi.js":73953,"./Script_Extensions/Yi.js":86294,"./Script_Extensions/Zanabazar_Square.js":67176,"./index.js":77402,"./unicode-version.js":68494};function n(i){var s=a(i);return r(s)}function a(i){if(!r.o(t,i)){var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}return t[i]}n.keys=function(){return Object.keys(t)},n.resolve=a,i.exports=n,n.id=77364},77552:()=>{},45887:()=>{},41587:()=>{}},i=>{"use strict";i.O(0,[206],(()=>{return s=35121,i(i.s=s);var s}));i.O()}]);