'use strict';

  var levels = {
    URGENT: 2
    , WARN: 1
    , INFO: 0
    , LOW: -1
    , LOWEST: -2
    , NONE: -3
  };

  levels.level2Display = {
    '2': 'Urgent'
    , '1': 'Warning'
    , '0': 'Info'
    , '-1': 'Low'
    , '-2': 'Lowest'
    , '-3': 'None'
  };

  levels.toDisplay = function levelToDisplay (level) {
    var key = level !== undefined && level.toString();
    return key && levels.level2Display[key] || 'Unknown';
  };

  levels.isAlarm = function isAlarm (level) {
    return level === levels.WARN || level === levels.URGENT;
  };

  levels.toLowerCase = function toLowerCase (level) {
    return levels.toDisplay(level).toLowerCase();
  };

  levels.toStatusClass = function toStatusClass (level) {
    var cls = 'current';

    if (level === levels.WARN) {
      cls = 'warn';
    } else if (level === levels.URGENT) {
      cls = 'urgent';
    }

    return cls;
  };


module.exports = levels;
