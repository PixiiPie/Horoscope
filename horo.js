function getZodiac(month, day) {
    const signs = [
        {sign: "Capricorn", from: [12, 22], to: [1, 19]},
        {sign: "Aquarius", from: [1, 20], to: [2, 18]},
        {sign: "Pisces", from: [2, 19], to: [3, 20]},
        {sign: "Aries", from: [3, 21], to: [4, 19]},
        {sign: "Taurus", from: [4, 20], to: [5, 20]},
        {sign: "Gemini", from: [5, 21], to: [6, 20]},
        {sign: "Cancer", from: [6, 21], to: [7, 22]},
        {sign: "Leo", from: [7, 23], to: [8, 22]},
        {sign: "Virgo", from: [8, 23], to: [9, 22]},
        {sign: "Libra", from: [9, 23], to: [10, 22]},
        {sign: "Scorpio", from: [10, 23], to: [11, 21]},
        {sign: "Sagittarius", from: [11, 22], to: [12, 21]}
    ];
    for (const {sign, from, to} of signs) {
        const [fromMonth, fromDay] = from;
        const [toMonth, toDay] = to;

        if (
            month === fromMonth && day >= fromDay ||
            (month === toMonth && day <= toDay) 
            ) {
                return sign;
            }
    }
    return "Unknown Zodiac Sign";
}

  function getHoroscope() {
    const month = parseInt(document.getElementById("month").value);
    const day = parseInt(document.getElementById("day").value);
    const result = document.getElementById("result");

    if(!month || !day) {
        result.innerText = "Please select both your birth month and day.";
        return;
    }

    const sign = getZodiac(month, day);
    const horoscopes = {
        "Capricorn": "You will find stability in your career today.",
        "Aquarius": "A new friendship may blossom today.",
        "Pisces": "Your creativity will shine through in your work.",
        "Aries": "Expect a challenge that will test your resolve.",
        "Taurus": "Financial gains are on the horizon.",
        "Gemini": "Communication is key; express yourself clearly.",
        "Cancer": "Emotional connections deepen with loved ones.",
        "Leo": "Your leadership skills will be recognized today.",
        "Virgo": "Attention to detail will pay off in your tasks.",
        "Libra": "Balance is essential; avoid conflicts.",
        "Scorpio": "Passion drives you; pursue your interests.",
        "Sagittarius": "Adventure awaits; embrace new experiences."
    };
    result.innerText = `You're a ${sign}! \n\n${horoscopes[sign]}`;
  }