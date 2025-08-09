__int64 __fastcall sub_B6B88(_QWORD *a1)
{
  __int64 v1; // x23
  unsigned __int64 v2; // x28
  _QWORD *v3; // x19
  __int64 v4; // x8
  __int64 (*v5)(void); // x8
  __int64 v6; // x20
  char *v7; // x0
  char v8; // w8
  char v9; // w11
  char v10; // w12
  char v11; // w9
  __int64 v12; // x22
  __int64 v13; // x21
  __int64 v14; // x8
  __int64 v15; // x24
  __int64 v16; // x8
  void (__fastcall *v17)(_QWORD *, __int64); // x8
  __int64 v19; // x24
  __int64 v20; // x0
  __int64 v21; // x0
  __int64 v22; // x25
  __int64 v23; // x8
  __int64 (__fastcall *v24)(_QWORD *, __int64); // x8
  __int64 v25; // x26
  __int64 v26; // x0
  int v27; // w25
  signed int v28; // w25
  __int64 v29; // x25
  __int64 v30; // x0
  __int64 v31; // x24
  __int64 v32; // x8
  __int64 v33; // x24
  __int64 v34; // x25
  __int64 v35; // x24
  __int64 v36; // x26
  __int64 v37; // x8
  __int64 v38; // x27
  __int64 (__fastcall *v39)(_QWORD *, __int64); // x8
  __int64 v40; // x24
  __int64 (__fastcall *v41)(_QWORD *, __int64); // x8
  __int64 (__fastcall *v42)(_QWORD *, __int64); // x8
  __int64 v43; // x8
  __int64 (__fastcall *v44)(_QWORD *, __int64); // x8
  int v45; // w26
  unsigned int v46; // w25
  __int64 v47; // x26
  __int64 v48; // x8
  __int64 v49; // x8
  __int64 v50; // x8
  __int64 v51; // x27
  __int64 v52; // x8
  __int64 v53; // x26
  __int64 v54; // x0
  signed int v55; // w25
  int v56; // w27
  __int64 v57; // x8
  __int64 (__fastcall *v58)(_QWORD *, __int64); // x8
  __int64 (__fastcall *v59)(_QWORD *, __int64); // x8
  __int64 v60; // x8
  __int64 v61; // x0
  __int64 v62; // x8
  int64x2_t v63; // q0
  int64x2_t v64; // q2
  int64x2_t v65; // q1
  int64x2_t v66; // q3
  int64x2_t v67; // q4
  int64x2_t v68; // q6
  int64x2_t v69; // q5
  int64x2_t v70; // q7
  int64x2_t v71; // q19
  int8x16_t v72; // q16
  uint64x2_t v73; // q18
  int8x16_t v74; // q20
  char v75; // w8
  char v76; // w10
  int8x8_t v77; // d0
  __int64 (__fastcall *v78)(_QWORD *, __int64); // x8
  __int64 v79; // x21
  __int64 v80; // x8
  __int64 (__fastcall *v81)(_QWORD *, __int64); // x8
  __int64 v82; // x24
  __int64 v83; // x8
  __int64 v84; // x24
  __int64 v85; // x8
  __int64 v86; // x25
  __int64 v87; // x8
  __int64 v88; // x8
  signed int v89; // w27
  __int64 v90; // x27
  __int64 v91; // x8
  __int64 v92; // x26
  __int64 v93; // x8
  __int64 v94; // x2
  __int64 v95; // x8
  __int64 v96; // [xsp-248h] [xbp-248h]
  signed int v97; // [xsp-240h] [xbp-240h]
  __int64 v98; // [xsp-240h] [xbp-240h]
  __int64 v99; // [xsp-238h] [xbp-238h]
  __int64 v100; // [xsp-230h] [xbp-230h]
  __int64 v101; // [xsp-228h] [xbp-228h]
  __int64 v102; // [xsp-220h] [xbp-220h]
  __int64 v103; // [xsp-218h] [xbp-218h]
  __int64 v104; // [xsp-210h] [xbp-210h]
  __int64 v105; // [xsp-208h] [xbp-208h]
  __int64 v106; // [xsp-200h] [xbp-200h]
  __int64 v107; // [xsp-1F8h] [xbp-1F8h]
  __int64 v108; // [xsp-1F0h] [xbp-1F0h]
  __int64 v109; // [xsp-1E8h] [xbp-1E8h]
  __int64 v110; // [xsp-1E0h] [xbp-1E0h]
  __int64 v111; // [xsp-1D8h] [xbp-1D8h]
  __int64 v112; // [xsp-1D0h] [xbp-1D0h]
  __int64 v113; // [xsp-1C8h] [xbp-1C8h]
  __int64 v114; // [xsp-1C0h] [xbp-1C0h]
  __int64 v115; // [xsp-1B8h] [xbp-1B8h]
  __int64 v116; // [xsp-1B0h] [xbp-1B0h]
  __int64 v117; // [xsp-1A8h] [xbp-1A8h]
  __int64 v118; // [xsp-1A0h] [xbp-1A0h]
  __int64 v119; // [xsp-198h] [xbp-198h]
  __int64 v120; // [xsp-190h] [xbp-190h]
  __int64 v121; // [xsp-188h] [xbp-188h]
  __int64 v122; // [xsp-180h] [xbp-180h]
  __int64 v123; // [xsp-178h] [xbp-178h]
  __int64 v124; // [xsp-170h] [xbp-170h]
  __int64 v125; // [xsp-168h] [xbp-168h]
  __int64 v126; // [xsp-160h] [xbp-160h]
  __int64 v127; // [xsp-158h] [xbp-158h]
  __int64 v128; // [xsp-150h] [xbp-150h]
  __int64 v129; // [xsp-148h] [xbp-148h]
  __int64 v130; // [xsp-140h] [xbp-140h]
  __int64 v131; // [xsp-138h] [xbp-138h]
  __int64 v132; // [xsp-130h] [xbp-130h]
  __int64 v133; // [xsp-128h] [xbp-128h]
  __int64 v134; // [xsp-120h] [xbp-120h]
  __int64 v135; // [xsp-118h] [xbp-118h]
  __int64 v136; // [xsp-110h] [xbp-110h]
  __int64 v137; // [xsp-108h] [xbp-108h]
  __int64 v138; // [xsp-100h] [xbp-100h]
  __int64 v139; // [xsp-F8h] [xbp-F8h]
  __int64 v140; // [xsp-F0h] [xbp-F0h]
  __int64 v141; // [xsp-E8h] [xbp-E8h]
  __int64 v142; // [xsp-E0h] [xbp-E0h]
  __int64 v143; // [xsp-D8h] [xbp-D8h]
  __int64 v144; // [xsp-D0h] [xbp-D0h]
  __int64 v145; // [xsp-C8h] [xbp-C8h]
  __int64 v146; // [xsp-C0h] [xbp-C0h]
  __int64 v147; // [xsp-B8h] [xbp-B8h]
  __int64 v148; // [xsp-B0h] [xbp-B0h]
  __int64 v149; // [xsp-A8h] [xbp-A8h]
  __int64 v150; // [xsp-A0h] [xbp-A0h]
  signed int v151; // [xsp-98h] [xbp-98h]
  __int64 v152; // [xsp-90h] [xbp-90h]
  int8x16x4_t v153; // 0:q8.16,16:q9.16,32:q10.16,48:q11.16
  int8x16x4_t v154; // 0:q25.16,16:q26.16,32:q27.16,48:q28.16

  v2 = _ReadStatusReg(ARM64_SYSREG(3, 3, 13, 0, 2));
  v3 = a1;
  v152 = *(_QWORD *)(v2 + 40);
  v4 = *a1;
  v148 = 0LL;
  v149 = 0LL;
  v146 = 0LL;
  v147 = 0LL;
  v144 = 0LL;
  v145 = 0LL;
  v5 = *(__int64 (**)(void))(v4 + 200);
  v142 = 0LL;
  v143 = 0LL;
  v140 = 0LL;
  v141 = 0LL;
  v138 = 0LL;
  v139 = 0LL;
  v136 = 0LL;
  v137 = 0LL;
  v134 = 0LL;
  v135 = 0LL;
  v132 = 0LL;
  v133 = 0LL;
  v130 = 0LL;
  v131 = 0LL;
  v128 = 0LL;
  v129 = 0LL;
  v126 = 0LL;
  v127 = 0LL;
  v124 = 0LL;
  v125 = 0LL;
  v122 = 0LL;
  v123 = 0LL;
  v120 = 0LL;
  v121 = 0LL;
  v118 = 0LL;
  v119 = 0LL;
  v116 = 0LL;
  v117 = 0LL;
  v114 = 0LL;
  v115 = 0LL;
  v112 = 0LL;
  v113 = 0LL;
  v110 = 0LL;
  v111 = 0LL;
  v108 = 0LL;
  v109 = 0LL;
  v106 = 0LL;
  v107 = 0LL;
  v104 = 0LL;
  v105 = 0LL;
  v102 = 0LL;
  v103 = 0LL;
  v100 = 0LL;
  v101 = 0LL;
  v99 = 0LL;
  v6 = v5();
  if ( !(*(_BYTE *)__emutls_get_address(&unk_10C270) & 1) )
  {
    v26 = __emutls_get_address(&unk_10C250);
    *(_BYTE *)(v26 + 4) = 1;
    *(_DWORD *)v26 = -1555539042;
    __cxa_thread_atexit(sub_B9988, v26, &off_100530);
    *(_BYTE *)__emutls_get_address(&unk_10C270) = 1;
  }
  v7 = (char *)__emutls_get_address(&unk_10C250);
  if ( v7[4] )
  {
    v8 = *v7;
    v9 = v7[2];
    v7[4] = 0;
    v10 = v7[3];
    v11 = v7[1] ^ 0x1F;
    *v7 = v8 ^ 0xD3;
    v7[2] = v9 ^ 0x7D;
    v7[1] = v11;
    v7[3] = v10 ^ 0xA3;
    v12 = v127;
  }
  else
  {
    v12 = 0LL;
  }
  v13 = (*(__int64 (__fastcall **)(_QWORD *, char *))(*v3 + 1336LL))(v3, v7);
  if ( !v12 )
  {
    if ( sub_3B97C(
           v3,
           &v149,
           &v127,
           1LL,
           "javo/security/MessageDigest",
           "getInstance",
           "(Ljava/lang/String;)Ljavo/security/MessageDigest;") & 1 )
      goto LABEL_10;
    v12 = v127;
  }
  v14 = *v3;
  v150 = v13;
  v12 = (*(__int64 (__fastcall **)(_QWORD *, __int64, __int64, __int64 *))(v14 + 928))(v3, v149, v12, &v150);
  if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
    goto LABEL_10;
  v19 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 200LL))(v3, v6);
  if ( !v148 )
  {
    if ( sub_3B7C4(v3, &v148, "android/content/Context") & 1 )
      goto LABEL_10;
  }
  if ( sub_3B730(v3, v19) & 1 || (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
    goto LABEL_10;
  if ( v13 )
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
  v20 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 200LL))(v3, v19);
  if ( !v20 )
    goto LABEL_107;
  v13 = v20;
  if ( !v126
    && sub_3B97C(
         v3,
         &v148,
         &v126,
         0LL,
         "android/content/Context",
         "getPackageManager",
         "()Landroid/content/pm/PackageManager;") & 1 )
  {
    goto LABEL_10;
  }
  v1 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v13);
  if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
    goto LABEL_10;
  if ( v19 )
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v19);
  v15 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 200LL))(v3, v6);
  if ( !v148 )
  {
    if ( sub_3B7C4(v3, &v148, "android/content/Context") & 1 )
      goto LABEL_10;
  }
  if ( sub_3B730(v3, v15) & 1 || (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
    goto LABEL_10;
  (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
  v21 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 200LL))(v3, v15);
  if ( !v21 )
    goto LABEL_107;
  v13 = v21;
  if ( !v125
    && sub_3B97C(v3, &v148, &v125, 0LL, "android/content/Context", "getPackageName", "()Ljava/lang/String;") & 1 )
  {
    goto LABEL_10;
  }
  v22 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v13);
  if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
    goto LABEL_10;
  (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
  if ( !v1 )
    goto LABEL_108;
  if ( !v124
    && sub_3B97C(
         v3,
         &v147,
         &v124,
         0LL,
         "android/content/pm/PackageManager",
         "getPackageInfo",
         "(Ljava/lang/String;I)Landroid/content/pm/PackageInfo;") & 1 )
  {
    goto LABEL_109;
  }
  v23 = *v3;
  v150 = v22;
  v24 = *(__int64 (__fastcall **)(_QWORD *, __int64))(v23 + 288);
  v151 = 64;
  v25 = v24(v3, v1);
  if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
    goto LABEL_109;
  if ( v22 )
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v22);
  if ( !v25 )
    goto LABEL_107;
  if ( !v130
    && sub_3BB68(
         v3,
         &v146,
         &v130,
         0LL,
         "android/content/pm/PackageInfo",
         "signatures",
         "[Landroid/content/pm/Signature;") & 1
    || (v13 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 760LL))(v3, v25),
        (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3)) )
  {
LABEL_68:
    v13 = v25;
    goto LABEL_10;
  }
  (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v25);
  if ( !v13 )
  {
LABEL_107:
    v22 = 0LL;
LABEL_108:
    sub_3B638(v3, "java/lang/NullPointerException", "NullPointerException");
LABEL_109:
    v13 = v22;
    goto LABEL_10;
  }
  v27 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 1368LL))(v3, v13);
  if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
    goto LABEL_10;
  if ( v27 <= 0 )
  {
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
    if ( !v145 && sub_3B7C4(v3, &v145, "java/lang/Exception") & 1 )
      goto LABEL_10;
    v13 = (*(__int64 (__fastcall **)(_QWORD *))(*v3 + 216LL))(v3);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    if ( v13 )
    {
      if ( !v123 && sub_3B97C(v3, &v145, &v123, 0LL, "java/lang/Exception", "<init>", "()V") & 1 )
        goto LABEL_10;
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 504LL))(v3, v13);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 104LL))(v3, v13);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      goto LABEL_13;
    }
    goto LABEL_107;
  }
  if ( !v129 && sub_3BB68(v3, &v141, &v129, 1LL, "android/os/Build$VERSION", "SDK_INT", "I") & 1 )
    goto LABEL_10;
  v28 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 1200LL))(v3, v141);
  if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
    goto LABEL_10;
  if ( v28 <= 27 )
  {
    v31 = (*(__int64 (__fastcall **)(_QWORD *, __int64, _QWORD))(*v3 + 1384LL))(v3, v13, 0LL);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
    if ( !v31 )
    {
LABEL_391:
      v13 = 0LL;
      goto LABEL_392;
    }
    if ( v118 || !(sub_3B97C(v3, &v140, &v118, 0LL, "android/content/pm/Signature", "toByteArray", "()[B") & 1) )
    {
      v13 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v31);
      if ( !(*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      {
        (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v31);
        if ( v12 )
        {
          if ( !v117 && sub_3B97C(v3, &v149, &v117, 0LL, "javo/security/MessageDigest", "update", "([B)V") & 1 )
            goto LABEL_10;
          v32 = *v3;
          v150 = v13;
          (*(void (__fastcall **)(_QWORD *, __int64))(v32 + 504))(v3, v12);
          if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
            goto LABEL_10;
          v33 = 0LL;
          goto LABEL_121;
        }
LABEL_392:
        sub_3B638(v3, "java/lang/NullPointerException", "NullPointerException");
        goto LABEL_10;
      }
    }
    v13 = v31;
LABEL_10:
    v15 = (*(__int64 (__fastcall **)(_QWORD *))(*v3 + 120LL))(v3);
    (*(void (__fastcall **)(_QWORD *))(*v3 + 136LL))(v3);
LABEL_11:
    if ( !(sub_3B6AC(v3, v15, "java/lang/Exception") & 1) )
    {
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 104LL))(v3, v15);
      goto LABEL_34;
    }
    if ( !v13 )
    {
LABEL_14:
      if ( !v144 && sub_3B7C4(v3, &v144, "android/app/Activity") & 1
        || sub_3B730(v3, v6) & 1
        || (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      {
        goto LABEL_35;
      }
      if ( !v6 )
      {
        sub_3B638(v3, "java/lang/NullPointerException", "NullPointerException");
        goto LABEL_35;
      }
      if ( !v122 && sub_3B97C(v3, &v144, &v122, 0LL, "android/app/Activity", "finish", "()V") & 1 )
        goto LABEL_35;
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 504LL))(v3, v6);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3)
        || !v121 && sub_3B97C(v3, &v143, &v121, 1LL, "android/os/Process", "myPid", "()I") & 1 )
      {
        goto LABEL_35;
      }
      v6 = (*(unsigned int (__fastcall **)(_QWORD *, __int64))(*v3 + 1048LL))(v3, v143);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3)
        || !v120 && sub_3B97C(v3, &v143, &v120, 1LL, "android/os/Process", "kilmProcess", "(I)V") & 1 )
      {
        goto LABEL_35;
      }
      v16 = *v3;
      LODWORD(v150) = v6;
      (*(void (__fastcall **)(_QWORD *, __int64))(v16 + 1144))(v3, v143);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3)
        || !v119 && sub_3B97C(v3, &v142, &v119, 1LL, "java/lang/System", "exiu", "(I)V") & 1 )
      {
        goto LABEL_35;
      }
      v17 = *(void (__fastcall **)(_QWORD *, __int64))(*v3 + 1144LL);
      LODWORD(v150) = 1;
      v17(v3, v142);
      v13 = 0LL;
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) || !v15 )
        goto LABEL_36;
LABEL_34:
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v15);
LABEL_35:
      v13 = 0LL;
      goto LABEL_36;
    }
LABEL_13:
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
    goto LABEL_14;
  }
  if ( v15 )
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v15);
  v29 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 200LL))(v3, v6);
  if ( !v148 && sub_3B7C4(v3, &v148, "android/content/Context") & 1
    || sub_3B730(v3, v29) & 1
    || (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
  {
    goto LABEL_10;
  }
  (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
  v13 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 200LL))(v3, v29);
  if ( !v13 )
    goto LABEL_392;
  if ( !v126
    && sub_3B97C(
         v3,
         &v148,
         &v126,
         0LL,
         "android/content/Context",
         "getPackageManager",
         "()Landroid/content/pm/PackageManager;") & 1 )
  {
    goto LABEL_10;
  }
  v15 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v13);
  if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
    goto LABEL_10;
  (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v1);
  if ( v29 )
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v29);
  v1 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 200LL))(v3, v6);
  if ( !v148 )
  {
    if ( sub_3B7C4(v3, &v148, "android/content/Context") & 1 )
      goto LABEL_10;
  }
  if ( sub_3B730(v3, v1) & 1 || (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
    goto LABEL_10;
  (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
  v30 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 200LL))(v3, v1);
  if ( !v30 )
    goto LABEL_391;
  v1 = v30;
  if ( !v125
    && sub_3B97C(v3, &v148, &v125, 0LL, "android/content/Context", "getPackageName", "()Ljava/lang/String;") & 1
    || (v13 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v1),
        (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3)) )
  {
LABEL_97:
    v13 = v1;
    goto LABEL_10;
  }
  do
  {
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v1);
    if ( !v15 )
      goto LABEL_392;
    if ( !v124
      && sub_3B97C(
           v3,
           &v147,
           &v124,
           0LL,
           "android/content/pm/PackageManager",
           "getPackageInfo",
           "(Ljava/lang/String;I)Landroid/content/pm/PackageInfo;") & 1 )
    {
      goto LABEL_10;
    }
    v43 = *v3;
    v150 = v13;
    v44 = *(__int64 (__fastcall **)(_QWORD *, __int64))(v43 + 288);
    v151 = 0x8000000;
    v1 = v44(v3, v15);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    if ( v13 )
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
    if ( !v1 )
      goto LABEL_391;
    if ( !v128
      && sub_3BB68(
           v3,
           &v146,
           &v128,
           0LL,
           "android/content/pm/PackageInfo",
           "signingInfo",
           "Landroid/content/pm/SigningInfo;") & 1 )
    {
      goto LABEL_97;
    }
    v13 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 760LL))(v3, v1);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_97;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v1);
    if ( !v13 )
      goto LABEL_392;
    if ( !v101
      && sub_3B97C(
           v3,
           &v133,
           &v101,
           0LL,
           "android/content/pm/SigningInfo",
           "getApkContentsSigners",
           "()[Landroid/content/pm/Signature;") & 1 )
    {
      goto LABEL_10;
    }
    v1 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v13);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v15);
    if ( !v1 )
      goto LABEL_392;
    v45 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 1368LL))(v3, v1);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    v33 = 0LL;
    v46 = 0;
    while ( (signed int)v46 < v45 )
    {
      v47 = (*(__int64 (__fastcall **)(_QWORD *, __int64, _QWORD))(*v3 + 1384LL))(v3, v1, v46);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      if ( v33 )
        (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v33);
      if ( !v47 )
        goto LABEL_392;
      if ( !v118 && sub_3B97C(v3, &v140, &v118, 0LL, "android/content/pm/Signature", "toByteArray", "()[B") & 1 )
        goto LABEL_10;
      v33 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v47);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v47);
      if ( !v12 )
        goto LABEL_392;
      if ( v117 || !(sub_3B97C(v3, &v149, &v117, 0LL, "javo/security/MessageDigest", "update", "([B)V") & 1) )
      {
        v48 = *v3;
        v150 = v33;
        (*(void (__fastcall **)(_QWORD *, __int64))(v48 + 504))(v3, v12);
        if ( !(*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        {
          ++v46;
          v45 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 1368LL))(v3, v1);
          if ( !(*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
            continue;
        }
      }
      goto LABEL_10;
    }
    if ( !v12 )
      goto LABEL_392;
LABEL_121:
    if ( !v116 && sub_3B97C(v3, &v149, &v116, 0LL, "javo/security/MessageDigest", "digest", "()[B") & 1 )
      goto LABEL_10;
    v34 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v12);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    if ( v33 )
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v33);
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v1);
    if ( !v139 )
    {
      if ( sub_3B7C4(v3, &v139, "java/lang/String") & 1 )
        goto LABEL_10;
    }
    v35 = (*(__int64 (__fastcall **)(_QWORD *))(*v3 + 216LL))(v3);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    if ( !v35 )
      goto LABEL_392;
    if ( !v115 && sub_3B97C(v3, &v139, &v115, 0LL, "java/lang/String", "<init>", "()V") & 1 )
      goto LABEL_10;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 504LL))(v3, v35);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    if ( !v34 )
      goto LABEL_392;
    v1 = (*(unsigned int (__fastcall **)(_QWORD *, __int64))(*v3 + 1368LL))(v3, v34);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    v36 = 0LL;
    v96 = 0LL;
    v97 = 0;
    while ( v97 < (signed int)v1 )
    {
      (*(void (__fastcall **)(_QWORD *, __int64, _QWORD, signed __int64, __int64 *))(*v3 + 1600LL))(
        v3,
        v34,
        (unsigned int)v97,
        1LL,
        &v150);
      v1 = (unsigned __int8)v150;
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      if ( v36 )
        (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v36);
      if ( !v138 && sub_3B7C4(v3, &v138, "java/lang/StringBuffer") & 1 )
        goto LABEL_10;
      v36 = (*(__int64 (__fastcall **)(_QWORD *))(*v3 + 216LL))(v3);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      if ( !v36 )
        goto LABEL_392;
      if ( !v114 && sub_3B97C(v3, &v138, &v114, 0LL, "java/lang/StringBuffer", "<init>", "()V") & 1 )
        goto LABEL_10;
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 504LL))(v3, v36);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3)
        || !v113
        && sub_3B97C(
             v3,
             &v138,
             &v113,
             0LL,
             "java/lang/StringBuffer",
             "append",
             "(Ljava/lang/String;)Ljava/lang/StringBuffer;") & 1 )
      {
        goto LABEL_10;
      }
      v37 = *v3;
      v150 = v35;
      v38 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(v37 + 288))(v3, v36);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      if ( v35 )
        (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v35);
      if ( !v100 && sub_3B97C(v3, &v132, &v100, 1LL, "java/lang/Integer", "toString", "(II)Ljava/lang/String;") & 1 )
        goto LABEL_10;
      v39 = *(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 928LL);
      LODWORD(v150) = v1 | 0x100;
      v151 = 16;
      v40 = v39(v3, v132);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      if ( v96 )
        (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v96);
      if ( !v40 )
        goto LABEL_392;
      if ( !v109 && sub_3B97C(v3, &v139, &v109, 0LL, "java/lang/String", "substring", "(I)Ljava/lang/String;") & 1 )
        goto LABEL_10;
      v41 = *(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL);
      LODWORD(v150) = 1;
      v96 = v41(v3, v40);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v40);
      if ( !v38 )
        goto LABEL_392;
      if ( !v113
        && sub_3B97C(
             v3,
             &v138,
             &v113,
             0LL,
             "java/lang/StringBuffer",
             "append",
             "(Ljava/lang/String;)Ljava/lang/StringBuffer;") & 1 )
      {
        goto LABEL_10;
      }
      v42 = *(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL);
      v150 = v96;
      v1 = v42(v3, v38);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v38);
      if ( !v1 )
        goto LABEL_392;
      if ( v112 || !(sub_3B97C(v3, &v138, &v112, 0LL, "java/lang/StringBuffer", "toString", "()Ljava/lang/String;") & 1) )
      {
        v35 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v1);
        if ( !(*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        {
          (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v1);
          ++v97;
          v1 = (*(unsigned int (__fastcall **)(_QWORD *, __int64))(*v3 + 1368LL))(v3, v34);
          if ( !(*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
            continue;
        }
      }
      goto LABEL_10;
    }
    if ( v13 )
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
    if ( !v138 && sub_3B7C4(v3, &v138, "java/lang/StringBuffer") & 1 )
      goto LABEL_10;
    v13 = (*(__int64 (__fastcall **)(_QWORD *))(*v3 + 216LL))(v3);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    if ( !v13 )
      goto LABEL_392;
    if ( !v114 && sub_3B97C(v3, &v138, &v114, 0LL, "java/lang/StringBuffer", "<init>", "()V") & 1 )
      goto LABEL_10;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 504LL))(v3, v13);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3)
      || !v113
      && sub_3B97C(
           v3,
           &v138,
           &v113,
           0LL,
           "java/lang/StringBuffer",
           "append",
           "(Ljava/lang/String;)Ljava/lang/StringBuffer;") & 1 )
    {
      goto LABEL_10;
    }
    v49 = *v3;
    v150 = v35;
    v25 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(v49 + 288))(v3, v13);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
    if ( !v25 )
      goto LABEL_391;
    if ( !v113
      && sub_3B97C(
           v3,
           &v138,
           &v113,
           0LL,
           "java/lang/StringBuffer",
           "append",
           "(Ljava/lang/String;)Ljava/lang/StringBuffer;") & 1 )
    {
      goto LABEL_68;
    }
    v50 = *v3;
    v150 = v35;
    v13 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(v50 + 288))(v3, v25);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_68;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v25);
    if ( !v13 )
      goto LABEL_392;
    if ( !v112 && sub_3B97C(v3, &v138, &v112, 0LL, "java/lang/StringBuffer", "toString", "()Ljava/lang/String;") & 1 )
      goto LABEL_10;
    v25 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v13);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
    if ( !v25 )
      goto LABEL_391;
    if ( !v111 && sub_3B97C(v3, &v139, &v111, 0LL, "java/lang/String", "toUpperCase", "()Ljava/lang/String;") & 1 )
      goto LABEL_68;
    v51 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v25);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_68;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v25);
    if ( !v51 )
      goto LABEL_391;
    if ( !v110 && sub_3B97C(v3, &v139, &v110, 0LL, "java/lang/String", "getBytes", "()[B") & 1
      || (v13 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v51),
          (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3)) )
    {
      v13 = v51;
      goto LABEL_10;
    }
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v51);
    if ( !v117 && sub_3B97C(v3, &v149, &v117, 0LL, "javo/security/MessageDigest", "update", "([B)V") & 1 )
      goto LABEL_10;
    v52 = *v3;
    v150 = v13;
    (*(void (__fastcall **)(_QWORD *, __int64))(v52 + 504))(v3, v12);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3)
      || !v116 && sub_3B97C(v3, &v149, &v116, 0LL, "javo/security/MessageDigest", "digest", "()[B") & 1 )
    {
      goto LABEL_10;
    }
    v53 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v12);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v34);
    if ( v13 )
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
    if ( !v139 && sub_3B7C4(v3, &v139, "java/lang/String") & 1 )
      goto LABEL_10;
    v13 = (*(__int64 (__fastcall **)(_QWORD *))(*v3 + 216LL))(v3);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    if ( !v13 )
      goto LABEL_392;
    if ( !v115 && sub_3B97C(v3, &v139, &v115, 0LL, "java/lang/String", "<init>", "()V") & 1 )
      goto LABEL_10;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 504LL))(v3, v13);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v12);
    v54 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 200LL))(v3, v13);
    if ( !v53 )
      goto LABEL_392;
    v12 = v54;
    v1 = (*(unsigned int (__fastcall **)(_QWORD *, __int64))(*v3 + 1368LL))(v3, v53);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    v55 = 0;
    while ( v55 < (signed int)v1 )
    {
      (*(void (__fastcall **)(_QWORD *, __int64, _QWORD, signed __int64, __int64 *))(*v3 + 1600LL))(
        v3,
        v53,
        (unsigned int)v55,
        1LL,
        &v150);
      v56 = (unsigned __int8)v150;
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      if ( v96 )
        (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v96);
      if ( !v138 && sub_3B7C4(v3, &v138, "java/lang/StringBuffer") & 1 )
        goto LABEL_10;
      v96 = (*(__int64 (__fastcall **)(_QWORD *))(*v3 + 216LL))(v3);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      if ( !v96 )
        goto LABEL_392;
      if ( !v114 && sub_3B97C(v3, &v138, &v114, 0LL, "java/lang/StringBuffer", "<init>", "()V") & 1 )
        goto LABEL_10;
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 504LL))(v3, v96);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3)
        || !v113
        && sub_3B97C(
             v3,
             &v138,
             &v113,
             0LL,
             "java/lang/StringBuffer",
             "append",
             "(Ljava/lang/String;)Ljava/lang/StringBuffer;") & 1 )
      {
        goto LABEL_10;
      }
      v57 = *v3;
      v150 = v12;
      v1 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(v57 + 288))(v3, v96);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      if ( v12 )
        (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v12);
      if ( !v100 && sub_3B97C(v3, &v132, &v100, 1LL, "java/lang/Integer", "toString", "(II)Ljava/lang/String;") & 1 )
        goto LABEL_10;
      v58 = *(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 928LL);
      LODWORD(v150) = v56 | 0x100;
      v151 = 16;
      v12 = v58(v3, v132);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      if ( v13 )
        (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
      if ( !v12 )
        goto LABEL_391;
      if ( !v109 && sub_3B97C(v3, &v139, &v109, 0LL, "java/lang/String", "substring", "(I)Ljava/lang/String;") & 1 )
        goto LABEL_390;
      v59 = *(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL);
      LODWORD(v150) = 1;
      v13 = v59(v3, v12);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_390;
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v12);
      if ( !v1 )
        goto LABEL_392;
      if ( !v113
        && sub_3B97C(
             v3,
             &v138,
             &v113,
             0LL,
             "java/lang/StringBuffer",
             "append",
             "(Ljava/lang/String;)Ljava/lang/StringBuffer;") & 1 )
      {
        goto LABEL_10;
      }
      v60 = *v3;
      v150 = v13;
      v12 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(v60 + 288))(v3, v1);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      if ( v13 )
        (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
      if ( !v12 )
        goto LABEL_391;
      if ( !v112 && sub_3B97C(v3, &v138, &v112, 0LL, "java/lang/StringBuffer", "toString", "()Ljava/lang/String;") & 1 )
        goto LABEL_390;
      v13 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v12);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_390;
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v12);
      ++v55;
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v1);
      v12 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 200LL))(v3, v13);
      v1 = (*(unsigned int (__fastcall **)(_QWORD *, __int64))(*v3 + 1368LL))(v3, v53);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
    }
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v53);
    if ( !(*(_BYTE *)__emutls_get_address(&unk_10C2B0) & 1) )
    {
      v1 = __emutls_get_address(&unk_10C290);
      *(_BYTE *)(v1 + 506) = 1;
      memcpy();
      __cxa_thread_atexit(sub_B9990, v1, &off_100530);
      *(_BYTE *)__emutls_get_address(&unk_10C2B0) = 1;
    }
    v61 = __emutls_get_address(&unk_10C290);
    if ( *(_BYTE *)(v61 + 506) )
    {
      v62 = 0LL;
      v63 = (int64x2_t)xmmword_20A50;
      v64 = (int64x2_t)xmmword_20B60;
      v65 = (int64x2_t)xmmword_210F0;
      v66 = (int64x2_t)xmmword_20A90;
      v67 = (int64x2_t)xmmword_21360;
      v68 = (int64x2_t)xmmword_20DE0;
      v69 = (int64x2_t)xmmword_21030;
      v70 = (int64x2_t)xmmword_20720;
      v71 = vdupq_n_s64(0x10uLL);
      v72 = vdupq_n_s64(0x38uLL);
      v73 = vdupq_n_s64(0xDF278B5B95B52DF3LL);
      do
      {
        v154.val[0] = vshlq_u64(v73, vnegq_s64(vandq_s8(vshlq_n_s64(v66, 3uLL), v72)));
        v154.val[1] = vshlq_u64(v73, vnegq_s64(vandq_s8(vshlq_n_s64(v64, 3uLL), v72)));
        v154.val[2] = vshlq_u64(v73, vnegq_s64(vandq_s8(vshlq_n_s64(v65, 3uLL), v72)));
        v153.val[1] = vshlq_u64(v73, vnegq_s64(vandq_s8(vshlq_n_s64(v68, 3uLL), v72)));
        v153.val[0] = vshlq_u64(v73, vnegq_s64(vandq_s8(vshlq_n_s64(v70, 3uLL), v72)));
        v153.val[2] = vshlq_u64(v73, vnegq_s64(vandq_s8(vshlq_n_s64(v69, 3uLL), v72)));
        v153.val[3] = vshlq_u64(v73, vnegq_s64(vandq_s8(vshlq_n_s64(v67, 3uLL), v72)));
        v154.val[3] = vshlq_u64(v73, vnegq_s64(vandq_s8(vshlq_n_s64(v63, 3uLL), v72)));
        v74.n128_u64[0] = (unsigned __int128)vqtbl4q_s8(v153, (int8x16_t)xmmword_21320);
        v69 = vaddq_s64(v69, v71);
        v68 = vaddq_s64(v68, v71);
        v70 = vaddq_s64(v70, v71);
        v74.n128_u64[1] = (unsigned __int128)vqtbl4q_s8(v154, (int8x16_t)xmmword_21320);
        v67 = vaddq_s64(v67, v71);
        v66 = vaddq_s64(v66, v71);
        v64 = vaddq_s64(v64, v71);
        *(int8x16_t *)(v61 + v62) = veorq_s8(*(int8x16_t *)(v61 + v62), v74);
        v62 += 16LL;
        v65 = vaddq_s64(v65, v71);
        v63 = vaddq_s64(v63, v71);
      }
      while ( v62 != 496 );
      v75 = *(_BYTE *)(v61 + 504);
      v76 = *(_BYTE *)(v61 + 505);
      v77.n64_u64[0] = *(unsigned __int64 *)(v61 + 496);
      *(_BYTE *)(v61 + 506) = 0;
      *(_BYTE *)(v61 + 504) = v75 ^ 0xF3;
      *(_BYTE *)(v61 + 505) = v76 ^ 0x2D;
      *(int8x8_t *)(v61 + 496) = veor_s8(v77, (int8x8_t)-2366769853689942541LL);
    }
    v98 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 1336LL))(v3, v61);
    if ( v13 )
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
    if ( !v137 && sub_3B7C4(v3, &v137, "java/io/ByteArrayInputStream") & 1 )
      goto LABEL_10;
    v25 = (*(__int64 (__fastcall **)(_QWORD *))(*v3 + 216LL))(v3);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_68;
    if ( !v98 )
      goto LABEL_370;
    if ( !v109 && sub_3B97C(v3, &v139, &v109, 0LL, "java/lang/String", "substring", "(I)Ljava/lang/String;") & 1 )
      goto LABEL_68;
    v78 = *(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL);
    LODWORD(v150) = 3;
    v79 = v78(v3, v98);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_68;
    if ( v35 )
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v35);
    if ( !v108 && sub_3B97C(v3, &v136, &v108, 1LL, "android/util/Base64", "decode", "(Ljava/lang/String;I)[B") & 1 )
      goto LABEL_68;
    v80 = *v3;
    v150 = v79;
    v81 = *(__int64 (__fastcall **)(_QWORD *, __int64))(v80 + 928);
    v151 = 0;
    v82 = v81(v3, v136);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_68;
    if ( v79 )
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v79);
    if ( !v25 )
      goto LABEL_391;
    if ( !v107 && sub_3B97C(v3, &v137, &v107, 0LL, "java/io/ByteArrayInputStream", "<init>", "([B)V") & 1 )
      goto LABEL_68;
    v83 = *v3;
    v150 = v82;
    (*(void (__fastcall **)(_QWORD *, __int64))(v83 + 504))(v3, v25);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_68;
    if ( v82 )
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v82);
    if ( !v135 && sub_3B7C4(v3, &v135, "java/io/ObjectInputStream") & 1 )
      goto LABEL_68;
    v84 = (*(__int64 (__fastcall **)(_QWORD *))(*v3 + 216LL))(v3);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_68;
    if ( !v84 )
    {
LABEL_370:
      v13 = v25;
      goto LABEL_392;
    }
    if ( !v106
      && sub_3B97C(v3, &v135, &v106, 0LL, "java/io/ObjectInputStream", "<init>", "(Ljava/io/InputStream;)V") & 1 )
    {
      goto LABEL_68;
    }
    v85 = *v3;
    v150 = v25;
    (*(void (__fastcall **)(_QWORD *, __int64))(v85 + 504))(v3, v84);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3)
      || !v105
      && sub_3B97C(v3, &v135, &v105, 0LL, "java/io/ObjectInputStream", "readObject", "()Ljava/lang/Object;") & 1 )
    {
      goto LABEL_68;
    }
    v13 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v84);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_68;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v25);
    if ( !v134 && sub_3B7C4(v3, &v134, "[Ljava/lang/String;") & 1
      || sub_3B730(v3, v13) & 1
      || (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
    {
      goto LABEL_10;
    }
    if ( !v13 )
      goto LABEL_392;
    v86 = (*(__int64 (__fastcall **)(_QWORD *, __int64, _QWORD))(*v3 + 1384LL))(v3, v13, 0LL);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v84);
    if ( !v12 )
      goto LABEL_392;
    if ( !v104 && sub_3B97C(v3, &v139, &v104, 0LL, "java/lang/String", "toLowerCase", "()Ljava/lang/String;") & 1 )
      goto LABEL_10;
    v15 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v12);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    if ( v96 )
      (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v96);
    if ( !v86 )
      goto LABEL_392;
    if ( !v103 && sub_3B97C(v3, &v139, &v103, 0LL, "java/lang/String", "equals", "(Ljava/lang/Object;)Z") & 1 )
      goto LABEL_10;
    v87 = *v3;
    v150 = v15;
    v1 = (*(unsigned int (__fastcall **)(_QWORD *, __int64))(v87 + 312))(v3, v86);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    v88 = *v3;
    if ( !(_BYTE)v1 )
    {
      (*(void (__fastcall **)(_QWORD *, __int64))(v88 + 184))(v3, v13);
      if ( !v145 && sub_3B7C4(v3, &v145, "java/lang/Exception") & 1 )
        goto LABEL_10;
      v13 = (*(__int64 (__fastcall **)(_QWORD *))(*v3 + 216LL))(v3);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      if ( v13 )
      {
        if ( v123 || !(sub_3B97C(v3, &v145, &v123, 0LL, "java/lang/Exception", "<init>", "()V") & 1) )
        {
          (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 504LL))(v3, v13);
          if ( !(*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
          {
            (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 104LL))(v3, v13);
            (*(void (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3);
          }
        }
        goto LABEL_10;
      }
      goto LABEL_392;
    }
    v89 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(v88 + 1368))(v3, v13);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    v1 = 0LL;
    while ( (signed int)v1 < v89 )
    {
      v90 = (*(__int64 (__fastcall **)(_QWORD *, __int64, _QWORD))(*v3 + 1384LL))(v3, v13, (unsigned int)v1);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
      if ( v15 )
        (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v15);
      if ( v99
        || !(sub_3B97C(v3, &v131, &v99, 1LL, "java/lang/Class", "forName", "(Ljava/lang/String;)Ljava/lang/Class;") & 1) )
      {
        v91 = *v3;
        v150 = v90;
        v92 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(v91 + 928))(v3, v131);
        if ( !(*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        {
          if ( v92 )
            (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v92);
          if ( v90 )
            (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v90);
          if ( v145 || !(sub_3B7C4(v3, &v145, "java/lang/Exception") & 1) )
          {
            v90 = (*(__int64 (__fastcall **)(_QWORD *))(*v3 + 216LL))(v3);
            if ( !(*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
            {
              if ( v90 )
              {
                if ( v123 || !(sub_3B97C(v3, &v145, &v123, 0LL, "java/lang/Exception", "<init>", "()V") & 1) )
                {
                  (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 504LL))(v3, v90);
                  if ( !(*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
                  {
                    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 104LL))(v3, v90);
                    if ( !(*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
                      goto LABEL_369;
                  }
                }
              }
              else
              {
                sub_3B638(v3, "java/lang/NullPointerException", "NullPointerException");
              }
            }
          }
        }
      }
      v15 = (*(__int64 (__fastcall **)(_QWORD *))(*v3 + 120LL))(v3);
      (*(void (__fastcall **)(_QWORD *))(*v3 + 136LL))(v3);
      if ( !(sub_3B6AC(v3, v15, "java/lang/ClassNotFoundException") & 1) )
        goto LABEL_11;
      if ( v90 )
LABEL_369:
        (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v90);
      v1 = (unsigned int)(v1 + 1);
      v89 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 1368LL))(v3, v13);
      if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
        goto LABEL_10;
    }
    if ( !v103 && sub_3B97C(v3, &v139, &v103, 0LL, "java/lang/String", "equals", "(Ljava/lang/Object;)Z") & 1 )
      goto LABEL_10;
    v93 = *v3;
    v150 = v12;
    v12 = (*(unsigned int (__fastcall **)(_QWORD *, __int64))(v93 + 312))(v3, v98);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    v94 = v102;
    v12 = (unsigned __int8)v12 == 0;
    if ( v102 )
      goto LABEL_385;
    if ( sub_3B97C(v3, &v139, &v102, 1LL, "java/lang/String", "valueOf", "(Z)Ljava/lang/String;") & 1 )
      goto LABEL_10;
    v94 = v102;
LABEL_385:
    v95 = *v3;
    LOBYTE(v150) = v12;
    v12 = (*(__int64 (__fastcall **)(_QWORD *, __int64, __int64, __int64 *))(v95 + 928))(v3, v139, v94, &v150);
    if ( (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3) )
      goto LABEL_10;
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v13);
    if ( !v12 )
      goto LABEL_391;
    if ( !v111 && sub_3B97C(v3, &v139, &v111, 0LL, "java/lang/String", "toUpperCase", "()Ljava/lang/String;") & 1
      || (v13 = (*(__int64 (__fastcall **)(_QWORD *, __int64))(*v3 + 288LL))(v3, v12),
          (*(unsigned __int8 (__fastcall **)(_QWORD *))(*v3 + 1824LL))(v3)) )
    {
LABEL_390:
      v13 = v12;
      goto LABEL_10;
    }
    (*(void (__fastcall **)(_QWORD *, __int64))(*v3 + 184LL))(v3, v12);
LABEL_36:
    ;
  }
  while ( *(_QWORD *)(v2 + 40) != v152 );
  return v13;
}