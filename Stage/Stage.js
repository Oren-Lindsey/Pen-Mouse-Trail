/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.fps = 27;
    this.vars.frames = 18;
    this.vars.length = 30;
    this.vars.penSize = 30;
    this.vars.n = 31;
    this.vars.ypos = [
      180,
      180,
      180,
      180,
      180,
      180,
      180,
      180,
      180,
      175,
      160,
      142,
      125,
      67,
      76,
      76,
      114,
      114,
      57,
      -41,
      -36,
      12,
      19,
      8,
      -4,
      -66,
      -66,
      -42,
      -9,
      6,
      27,
      53,
      49,
      45,
      27,
      4,
      -16,
      -26,
      -31,
      -31,
      -29,
      -26,
      -25,
      -19,
      -15,
      -12,
      -9,
      -3,
      3,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      3,
      3,
      3,
      2,
      1,
      0,
      -3,
      -6,
      -12,
      -18,
      -23,
      -32,
      -32,
      -38,
      -36,
      -16,
      26,
      41,
      53,
      60,
      64,
      67,
      71,
      78,
      78,
      76,
      73,
      67,
      63,
      56,
      47,
      38,
      23,
      23,
      18,
      14,
      5,
      -3,
      -8,
      -10,
      -13,
      -18,
      -20,
      -23,
      -22,
      -17,
      3,
      23,
      37,
      46,
      52,
      57,
      61,
      65,
      67,
      69,
      71,
      72,
      72,
      72,
      69,
      67,
      66,
      63,
      63,
      61,
      58,
      40,
      30,
      22,
      16,
      9,
      7,
      6,
      6,
      6,
      6,
      6,
      9,
      15,
      23,
      33,
      43,
      50,
      56,
      61,
      65,
      69,
      70,
      77,
      77,
      83,
      88,
      94,
      96,
      93,
      91,
      89,
      88,
      86,
      83,
      82,
      81,
      81,
      79,
      77,
      74,
      69,
      62,
      48,
      37,
      31,
      25,
      18,
      14,
      14,
      13,
      12,
      12,
      12,
      12,
      15,
      19,
      23,
      27,
      32,
      38,
      38,
      37,
      31,
      27,
      25,
      24,
      24,
      24,
      22,
      15,
      3,
      -9,
      -26,
      -35,
      -43,
      -42,
      -16,
      33,
      75,
      97,
      112,
      116,
      119,
      118,
      113,
      108,
      108,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      114,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      113,
      114,
      114,
      115,
      115,
      116,
      118,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      118,
      116,
      116,
      112,
      109,
      108,
      105,
      103,
      103,
      100,
      88,
      77,
      49,
      3,
      -57,
      -80,
      -84,
      -87,
      -90,
      -88,
      -58,
      -38,
      -11,
      38,
      90,
      97,
      97,
      97,
      97,
      98,
      102,
      107,
      119,
      119,
      122,
      122,
      121,
      121,
      122,
      122,
      122,
      121,
      121,
      121,
      120,
      120,
      120,
      120,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      119,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      118,
      118,
      118,
      119,
      122,
      122,
      122,
      122,
      114,
      114,
      112,
      112,
      104,
      96,
      96,
      96,
      96,
      84,
      -75,
      -180,
      -180,
      -180,
      -180,
      -180,
      -104,
      -12,
      95,
      149,
      160,
      160,
      162,
      162,
      161,
      151,
      137,
      124,
      80,
      65,
      49,
      37,
      28,
      9,
      -15,
      -60,
      -112,
      -123,
      -129,
      -129,
      -129,
      -129,
      -129,
      -129,
      -128,
      -125,
      -110,
      -99,
      10,
      105,
      163,
      170,
      170,
      169,
      159,
      151,
      145,
      124,
      109,
      99,
      95,
      86,
      86,
      86,
      86,
      86,
      86,
      86,
      86,
      86,
      86,
      94,
      94,
      79,
      75,
      74,
      74,
      72,
      71,
      79,
      111,
      125,
      125,
      125,
      114,
      67,
      20,
      16,
      11,
      -17,
      -51,
      -152,
      -180,
      -80,
      -32,
      -11,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      73,
      89,
      103,
      116,
      124,
      117,
      101,
      84,
      68,
      63,
      50,
      44,
      16,
      6,
      53,
      53,
      71,
      104,
      104,
      93,
      67,
      43,
      3,
      6,
      38,
      66,
      82,
      97,
      89,
      55,
      28,
      -1,
      -10,
      -13,
      -13,
      -12,
      -3,
      20,
      46,
      102,
      128,
      128,
      128,
      111,
      83,
      65,
      59,
      47,
      22,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      7,
      8,
      8,
      7,
      6,
      -13,
      -33,
      -40,
      -64,
      -61,
      -45,
      -5,
      24,
      47,
      59,
      70,
      82,
      97,
      102,
      100,
      85,
      76,
      65,
      50,
      25,
      6,
      -15,
      -21,
      -24,
      -25,
      -24,
      -19,
      -4,
      25,
      50,
      67,
      79,
      90,
      100,
      106,
      108,
      109,
      105,
      97,
      88,
      81,
      72,
      56,
      41,
      22,
      -1,
      -9,
      -22,
      -29,
      -42,
      -54,
      -58,
      -57,
      -44,
      -39,
      -24,
      -17,
      -4,
      2,
      13,
      30,
      57,
      83,
      96,
      102,
      103,
      103,
      103,
      102,
      101,
      98,
      94,
      89,
      73,
      61,
      54,
      39,
      39,
      22,
      22,
      5,
      -2,
      -7,
      -24,
      -32,
      -44,
      -53,
      -55,
      -42,
      -33,
      -24,
      -13,
      3,
      29,
      47,
      72,
      105,
      115,
      115,
      113,
      113,
      107,
      101,
      89,
      81,
      70,
      60,
      48,
      37,
      15,
      15,
      7,
      -6,
      -22,
      -32,
      -47,
      -67,
      -72,
      -65,
      -58,
      -30,
      -9,
      39,
      39,
      96,
      96,
      92,
      86,
      71,
      59,
      52,
      37,
      5,
      5,
      -34,
      -48,
      -65,
      -69,
      -81,
      -83,
      -88,
      -90,
      -89,
      -86,
      -86,
      -86,
      -86,
      -81,
      -62,
      -59,
      -49,
      -20,
      28,
      40,
      52,
      52,
      56,
      58,
      67,
      96,
      114,
      114,
      119,
      118,
      114,
      99,
      89,
      85,
      77,
      33,
      -10,
      -27,
      -51,
      -78,
      -88,
      -93,
      -95,
      -97,
      -100,
      -104,
      -102,
      -97,
      -97,
      -97,
      -87,
      -62,
      -60,
      -60,
      -60,
      -57,
      -43,
      -32,
      -27,
      -19,
      -2,
      1,
      10,
      32,
      41,
      52,
      59,
      59,
      59,
      51,
      47,
      33,
      -27,
      -27,
      -47,
      -49,
      -45,
      -39,
      -35,
      -20,
      -9,
      -3,
      7,
      23,
      36,
      54,
      69,
      78,
      97,
      107,
      113,
      116,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      117,
      118,
      118,
      119,
      120,
      121,
      121,
      122,
      122,
      122,
      121,
      121,
      121,
      121,
      121,
      121,
      125,
      127,
      128,
      128,
      127,
      120,
      110,
      89,
      64,
      55,
      51,
      46,
      37,
      35,
      35,
      34,
      27,
      14,
      4,
      -11,
      -31,
      -57,
      -83,
      -102,
      -112,
      -112,
      -85,
      -19,
      34,
      34,
      33,
      20,
      -1,
      -23,
      -40,
      -70,
      -79,
      -79,
      -79,
      -75,
      -57,
      -46,
      -36,
      -12,
      13,
      23,
      68,
      93,
      110,
      121,
      121,
      121,
      121,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      120,
      121,
      122,
      123,
      123,
      123,
      123,
      123,
      123,
      122,
      122,
      122,
      122,
      121,
      121,
      121,
      121,
      121,
      113,
      113,
      85,
      85,
      79,
      79,
      79,
      74,
      63,
      48,
      39,
      39,
      46,
      55,
      61,
      68,
      61,
      47,
      27,
      -19,
      -28,
      -30,
      -25,
      -18,
      1,
      19,
      48,
      57,
      72,
      91,
      115,
      122,
      137,
      153,
      178,
      180,
      180,
      180,
      180,
      180,
      180,
      180
    ];
    this.vars.xpos = [
      -37,
      -36,
      -34,
      -34,
      -34,
      -36,
      -36,
      -35,
      -30,
      -20,
      -4,
      -7,
      -15,
      34,
      62,
      62,
      121,
      121,
      84,
      44,
      58,
      102,
      94,
      57,
      45,
      29,
      54,
      108,
      148,
      154,
      138,
      42,
      -43,
      -47,
      -46,
      -35,
      -15,
      0,
      11,
      15,
      17,
      17,
      17,
      17,
      15,
      14,
      10,
      -2,
      -14,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -19,
      -19,
      -19,
      -19,
      -19,
      -19,
      -19,
      -19,
      -19,
      -19,
      -18,
      -18,
      -18,
      -17,
      -16,
      -13,
      -9,
      -7,
      -2,
      -2,
      2,
      7,
      19,
      36,
      38,
      37,
      36,
      34,
      31,
      24,
      6,
      3,
      -3,
      -7,
      -11,
      -12,
      -12,
      -12,
      -12,
      -8,
      -8,
      -5,
      -2,
      5,
      12,
      16,
      18,
      21,
      24,
      26,
      29,
      36,
      40,
      45,
      45,
      45,
      43,
      42,
      40,
      38,
      36,
      36,
      35,
      34,
      33,
      32,
      30,
      24,
      19,
      16,
      14,
      14,
      13,
      12,
      12,
      12,
      12,
      13,
      13,
      14,
      14,
      15,
      15,
      16,
      19,
      25,
      35,
      44,
      52,
      56,
      59,
      61,
      63,
      65,
      66,
      67,
      67,
      67,
      67,
      65,
      56,
      44,
      32,
      28,
      27,
      26,
      24,
      22,
      20,
      19,
      19,
      17,
      16,
      16,
      15,
      14,
      13,
      12,
      11,
      10,
      10,
      17,
      21,
      27,
      29,
      30,
      35,
      37,
      53,
      66,
      74,
      73,
      66,
      47,
      34,
      19,
      -2,
      -8,
      -10,
      -11,
      -12,
      -12,
      -14,
      -16,
      -17,
      -15,
      5,
      48,
      107,
      160,
      155,
      133,
      102,
      88,
      77,
      69,
      47,
      -2,
      -42,
      -99,
      -130,
      -188,
      -188,
      -190,
      -190,
      -190,
      -190,
      -190,
      -190,
      -190,
      -190,
      -190,
      -190,
      -190,
      -190,
      -190,
      -190,
      -190,
      -190,
      -190,
      -190,
      -189,
      -189,
      -189,
      -189,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -189,
      -190,
      -192,
      -194,
      -194,
      -194,
      -194,
      -194,
      -194,
      -194,
      -193,
      -193,
      -191,
      -189,
      -189,
      -187,
      -187,
      -186,
      -185,
      -184,
      -184,
      -183,
      -182,
      -181,
      -180,
      -178,
      -176,
      -174,
      -173,
      -168,
      -166,
      -163,
      -158,
      -152,
      -146,
      -142,
      -137,
      -132,
      -123,
      -115,
      -108,
      -108,
      -108,
      -107,
      -106,
      -105,
      -104,
      -103,
      -103,
      -103,
      -101,
      -98,
      -96,
      -93,
      -86,
      -84,
      -81,
      -87,
      -92,
      -96,
      -92,
      -50,
      43,
      65,
      65,
      68,
      83,
      126,
      136,
      132,
      90,
      36,
      28,
      28,
      28,
      28,
      27,
      21,
      12,
      -11,
      -11,
      -25,
      -55,
      -80,
      -89,
      -89,
      -89,
      -89,
      -89,
      -89,
      -91,
      -92,
      -94,
      -96,
      -99,
      -102,
      -104,
      -108,
      -108,
      -111,
      -112,
      -115,
      -116,
      -121,
      -124,
      -129,
      -134,
      -137,
      -142,
      -146,
      -151,
      -158,
      -162,
      -171,
      -176,
      -185,
      -189,
      -189,
      -189,
      -189,
      -189,
      -188,
      -186,
      -183,
      -179,
      -172,
      -172,
      -172,
      -175,
      -206,
      -206,
      -224,
      -224,
      -232,
      -236,
      -236,
      -236,
      -236,
      -195,
      86,
      205,
      231,
      232,
      232,
      207,
      106,
      8,
      -86,
      -167,
      -220,
      -238,
      -240,
      -240,
      -240,
      -232,
      -232,
      -225,
      -207,
      -196,
      -181,
      -168,
      -156,
      -136,
      -126,
      -124,
      -126,
      -127,
      -127,
      -127,
      -126,
      -126,
      -126,
      -125,
      -119,
      -112,
      -78,
      -59,
      61,
      142,
      185,
      190,
      190,
      190,
      186,
      184,
      179,
      160,
      144,
      132,
      126,
      115,
      115,
      115,
      115,
      115,
      115,
      115,
      115,
      115,
      115,
      109,
      70,
      -71,
      -86,
      -88,
      -88,
      -89,
      -89,
      -64,
      39,
      96,
      97,
      97,
      96,
      92,
      92,
      92,
      96,
      91,
      72,
      5,
      -69,
      -63,
      -47,
      -42,
      21,
      21,
      50,
      50,
      50,
      50,
      50,
      50,
      -92,
      -114,
      -122,
      -132,
      -146,
      -156,
      -178,
      -195,
      -197,
      -198,
      -202,
      -202,
      -194,
      -177,
      -58,
      -58,
      -55,
      -79,
      -82,
      -102,
      -122,
      -125,
      -88,
      -28,
      -10,
      -14,
      -26,
      -74,
      -100,
      -97,
      -94,
      -94,
      -90,
      -88,
      -85,
      -53,
      1,
      27,
      22,
      -26,
      -61,
      -61,
      -87,
      -131,
      -161,
      -168,
      -166,
      -148,
      -75,
      -16,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -15,
      -16,
      -19,
      -11,
      54,
      115,
      151,
      161,
      160,
      158,
      154,
      143,
      116,
      94,
      76,
      38,
      19,
      10,
      9,
      9,
      14,
      30,
      41,
      50,
      53,
      81,
      106,
      129,
      157,
      173,
      180,
      179,
      173,
      166,
      158,
      152,
      129,
      75,
      54,
      42,
      38,
      34,
      25,
      20,
      20,
      21,
      21,
      25,
      29,
      39,
      50,
      66,
      78,
      90,
      93,
      102,
      106,
      114,
      117,
      122,
      128,
      135,
      135,
      134,
      130,
      124,
      118,
      108,
      96,
      88,
      79,
      65,
      54,
      26,
      17,
      14,
      11,
      11,
      11,
      11,
      13,
      15,
      17,
      28,
      36,
      47,
      59,
      84,
      111,
      119,
      123,
      128,
      129,
      129,
      127,
      123,
      113,
      101,
      94,
      80,
      80,
      65,
      55,
      39,
      34,
      26,
      17,
      11,
      9,
      7,
      7,
      7,
      9,
      12,
      17,
      28,
      46,
      63,
      110,
      124,
      129,
      129,
      118,
      118,
      48,
      29,
      -5,
      -12,
      -22,
      -26,
      -29,
      -31,
      -31,
      -31,
      -20,
      -6,
      28,
      35,
      46,
      49,
      56,
      66,
      77,
      94,
      111,
      122,
      127,
      140,
      166,
      167,
      164,
      156,
      139,
      132,
      127,
      127,
      127,
      127,
      124,
      90,
      55,
      55,
      16,
      12,
      -2,
      -33,
      -48,
      -50,
      -50,
      -53,
      -47,
      -38,
      -18,
      -1,
      20,
      30,
      38,
      46,
      51,
      73,
      89,
      111,
      111,
      111,
      116,
      135,
      141,
      141,
      141,
      140,
      135,
      129,
      126,
      122,
      117,
      116,
      111,
      94,
      86,
      78,
      63,
      38,
      29,
      3,
      -2,
      -8,
      -5,
      -5,
      -1,
      9,
      27,
      46,
      54,
      66,
      70,
      70,
      68,
      63,
      56,
      40,
      25,
      13,
      -32,
      -71,
      -129,
      -162,
      -184,
      -186,
      -187,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -187,
      -187,
      -186,
      -186,
      -184,
      -183,
      -181,
      -177,
      -175,
      -173,
      -168,
      -164,
      -161,
      -158,
      -153,
      -144,
      -136,
      -115,
      -115,
      -115,
      -115,
      -115,
      -118,
      -121,
      -121,
      -121,
      -119,
      -111,
      -103,
      -89,
      -68,
      -50,
      -34,
      -8,
      30,
      41,
      40,
      33,
      20,
      8,
      0,
      -3,
      -2,
      1,
      8,
      18,
      58,
      119,
      133,
      117,
      66,
      56,
      45,
      25,
      12,
      14,
      21,
      35,
      50,
      55,
      63,
      77,
      106,
      108,
      107,
      96,
      83,
      73,
      21,
      -11,
      -70,
      -115,
      -115,
      -117,
      -118,
      -119,
      -121,
      -124,
      -126,
      -128,
      -129,
      -133,
      -133,
      -136,
      -141,
      -152,
      -161,
      -172,
      -187,
      -188,
      -188,
      -188,
      -188,
      -188,
      -188,
      -187,
      -186,
      -184,
      -182,
      -180,
      -180,
      -180,
      -169,
      -169,
      -141,
      -141,
      -130,
      -130,
      -130,
      -124,
      -101,
      -62,
      -31,
      -22,
      -7,
      -1,
      -5,
      -40,
      -92,
      -127,
      -129,
      -125,
      -105,
      -73,
      -40,
      -15,
      19,
      30,
      46,
      46,
      44,
      39,
      33,
      29,
      10,
      -22,
      -90,
      -189,
      -216,
      -230,
      -230,
      -230,
      -230,
      -230
    ];

    this.watchers.fps = new Watcher({
      label: "FPS",
      style: "normal",
      visible: true,
      value: () => this.vars.fps,
      x: 245,
      y: 175
    });
    this.watchers.length = new Watcher({
      label: "Length",
      style: "slider",
      visible: true,
      value: () => this.vars.length,
      setValue: value => {
        this.vars.length = value;
      },
      x: 245,
      y: 147
    });
  }
}