function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('You Think Game')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function processUserAnswer(scenario, userAnswer) {
  var apiKey = "API_KEY"; // API Key lu
  
  var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=" + apiKey;
  
  var systemInstruction = "Kamu adalah cermin logika game. Tugasmu BUKAN menilai benar/salah, menghakimi, atau memberi nasihat. " +
    "Tugasmu adalah merefleksikan dan memvalidasi jalan pikiran user berdasarkan kasus yang diberikan secara kritis, bernalar, dan objektif. " +
    "Berikan respons berupa implikasi/konsekuensi logis dari pilihan jawaban mereka. " +
    "VARIASIKAN gaya dan awal kalimatmu secara alami (DILARANG SELALU MEMAKAI kata 'Berarti kamu' atau 'Artinya kamu'). " +
    "Gunakan bahasa Indonesia santai tapi tajam dan bernalar. Maksimal 2 kalimat singkat.";

  var prompt = "Kasus: " + scenario + "\nJawaban User: " + userAnswer;

  var payload = {
    "contents": [{ "parts": [{"text": systemInstruction + "\n\n" + prompt}] }]
  };

  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var json = JSON.parse(response.getContentText());
    if (json.error) return "API Error: " + json.error.message;
    return json.candidates[0].content.parts[0].text;
  } catch (e) {
    return "Script Error: " + e.toString();
  }
}
