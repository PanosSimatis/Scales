angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  var majorScales = [{
    id: 0,
    name: 'C',
    notes: 'C-D-E-F-G-A-B-C',
  },
  {
    id: 1,
    name: 'D',
    notes: 'D-E-F♯-G-A-B-C♯-D',
  },
  {
    id: 2,
    name: 'E',
    notes: 'E-F♯-G♯-A-B-C♯-D♯-E',
  },
  {
    id: 3,
    name: 'F',
    notes: 'F-G-A-B♭-C-D-E-F',
 
  },
  {
    id: 4,
    name: 'G',
    notes: 'G-A-B-C-D-E-F♯-G',
  },
  {
    id: 5,
    name: 'A',
    notes: 'A-B-C♯-D-E-F♯-G♯-A',
  },
  {
    id: 6,
    name: 'B',
    notes: 'B-C♯-D♯-E-F♯-G♯-A♯-B',
  },
  {
    id: 7,
       name: 'F♯',
    notes: 'F♯-G♯-A♯-B-C♯-D♯-E♯-F♯',
  },
  {
    id: 8,
    name: 'D♭',
    notes: 'D♭-E♭-F-G♭-A♭-B♭-C-D♭',
  },
  {
    id: 9,
    name: 'E♭',
    notes: 'E♭-F-G♭-A♭-B♭-C-D-E♭',
  },
  {
    id: 10,
    name: 'G♭',
    notes: 'G♭-A♭-B♭-C♭-D♭-E♭-F-G♭',
  },
  {
    id: 11,
    name: 'A♭',
    notes: 'A♭-B♭-C-D♭-E♭-D-G-A♭',
  },
  {
    id: 12,
    name: 'B♭',
    notes: 'B♭-C-D-E♭-F-G-A-B♭',
  }];

  var minorScales = [{
    id: 0,
    name: 'C',
    notes: 'C-D-E♭-F-G-A♭-B♭-C',
  },{
    id: 1,
    name: 'D',
    notes: 'D-E-F-G-A-B♭-C-D',
  },{
    id: 2,
    name: 'E',
    notes: 'E-F♯-G-A-B-C-D-E',
  },{
    id: 3,
    name: 'F',
    notes: 'F-G-A♭-B♭-C-D♭-E♭-F',
  },{
    id: 4,
    name: 'G',
    notes: 'G-A-B♭-C-D-E♭-G',
  },{
    id: 5,
    name: 'A',
    notes: 'A-B-C-D-E-F-G-A',
  },{
    id: 6,
    name: 'B',
    notes: 'B-C♯-D-E-F♯-G-A-B',
  },{
    id: 7,
    name: 'F♯',
    notes: 'F♯-G♯-A-B-C♯-D-E-F♯',
  },{
    id: 8,
    name: 'C♯',
    notes: 'C♯-D♯-E-F♯-G♯-A-B-C♯',
  },{
    id: 9,
    name: 'G♯',
    notes: 'G♯-A♯-B-C♯-D♯-E-F♯-G♯',
  },{
    id: 10,
    name: 'E♭',
    notes: 'E♭-F-G♭-A♭-B♭-C♭-D♭-E♭',
  },{
    id: 11,
    name: 'B♭',
    notes: 'B♭-C-D♭-E♭-F-G♭-A♭-B♭',
  }];

  return {
    allMajor: function() {
      return majorScales;
    },
    allMinor: function() {
      return minorScales;
    },
    getMajor: function(chatId) {
      for (var i = 0; i < majorScales.length; i++) {
        if (majorScales[i].id === parseInt(chatId)) {
          return majorScales[i];
        }
      }
      return null;
    },
    getMinor: function(chatId) {
      for (var i = 0; i < minorScales.length; i++) {
        if (minorScales[i].id === parseInt(chatId)) {
          return minorScales[i];
        }
      }
      return null;
    }
  };
});
