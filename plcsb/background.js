/*
Copyright 2014 Google Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var contextID = -1;
var lut = {"w": "é", "e": "ë", "i": "ò", "p": "ô", "a": "ã", "u":"ù", "W": "É", "E": "Ë", "I": "Ò", "P": "Ô", "A": "Ã", "U":"Ù"};

chrome.input.ime.onFocus.addListener(function(context) {
  contextID = context.contextID;
});

chrome.input.ime.onKeyEvent.addListener(
    function(engineID, keyData) {
      if (keyData.type == "keydown" && keyData.altKey) {
          if (lut[keyData.key]) {
              chrome.input.ime.commitText({
                  "contextID": contextID,
                  "text": lut[keyData.key]
              });
              return true;
          }
      }
      return false;
});
