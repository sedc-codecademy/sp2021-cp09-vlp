const LexiconService = {

    // Checks if input string contains alternatives to the keywords and returns new modified string with those keywords
    checkForKeywords: function (inputString) {
        let keywordModifiedString = inputString;

        // Checks whether input string has a reference to "Price" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("cost") ||
            inputString.toLowerCase().includes("how much")
        )
            keywordModifiedString += "Price";

        // Checks whether input string has a reference to "Overview" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("what is") ||
            inputString.toLowerCase().includes("about") ||
            inputString.toLowerCase().includes("what's")
        )
            keywordModifiedString += "Overview";

        // Checks whether input string has a reference to "Timeline" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("how long") ||
            inputString.toLowerCase().includes("time") ||
            inputString.toLowerCase().includes("when")
        )
            keywordModifiedString += "Timeline";

        // Checks whether input string has a reference to "Job Opportunities" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("qualifications") ||
            inputString.toLowerCase().includes("qualification") ||
            inputString.toLowerCase().includes("job") ||
            inputString.toLowerCase().includes("employment") ||
            inputString.toLowerCase().includes("work")
        )
            keywordModifiedString += "Job Opportunities";

        // Checks whether input string has a reference to "Apply" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("application") ||
            inputString.toLowerCase().includes("enroll") ||
            inputString.toLowerCase().includes("sign up") ||
            inputString.toLowerCase().includes("register")
        )
            keywordModifiedString += "Apply";

        // Checks whether input string has a reference to "Test Centers" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("where") ||
            inputString.toLowerCase().includes("place") ||
            inputString.toLowerCase().includes("location")
        )
            keywordModifiedString += "Test Centers";

        // Checks whether input string has a reference to "Target Audience" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("who") ||
            inputString.toLowerCase().includes("age") ||
            inputString.toLowerCase().includes("for me") ||
            inputString.toLowerCase().includes("audience")
        )
            keywordModifiedString += "Target Audience";

        // Checks whether input string has a reference to "Programming" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("development") ||
            inputString.toLowerCase().includes("developer") ||
            inputString.toLowerCase().includes("developing") ||
            inputString.toLowerCase().includes("coding") ||
            inputString.toLowerCase().includes("web") ||
            inputString.toLowerCase().includes("site")
        )
            keywordModifiedString += "Programming";

        // Checks whether input string has a reference to "Computer Networks" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("network") ||
            inputString.toLowerCase().includes("ops") ||
            inputString.toLowerCase().includes("cloud") ||
            inputString.toLowerCase().includes("security")
        )
            keywordModifiedString += "Computer Networks";

        // Checks whether input string has a reference to "Design" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("design") ||
            inputString.toLowerCase().includes("graphic") ||
            inputString.toLowerCase().includes("ui") ||
            inputString.toLowerCase().includes("ux") ||
            inputString.toLowerCase().includes("game")
        )
            keywordModifiedString += "Design";

        // Checks whether input string has a reference to "Software Testing" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("test")
        )
            keywordModifiedString += "Software Testing";

        // Checks whether input string has a reference to "Data Science" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("data")
        )
            keywordModifiedString += "Data Science";

        // Checks whether input string has a reference to "Digital Marketing" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("marketing") ||
            inputString.toLowerCase().includes("advert") ||
            inputString.toLowerCase().includes("seo") ||
            inputString.toLowerCase().includes("search engine")
        )
            keywordModifiedString += "Digital Marketing";

        // Checks whether input string has a reference to "iThink Academy" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("iThink") ||
            inputString.toLowerCase().includes("i Think") ||
            inputString.toLowerCase().includes("child") ||
            inputString.toLowerCase().includes("kid")
        )
            keywordModifiedString += "iThink Academy";

        // Checks whether input string has a reference to "Business Courses" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("business") ||
            inputString.toLowerCase().includes("office") ||
            inputString.toLowerCase().includes("excel") ||
            inputString.toLowerCase().includes("word") ||
            inputString.toLowerCase().includes("agile") ||
            inputString.toLowerCase().includes("scrum") ||
            inputString.toLowerCase().includes("analysis") ||
            inputString.toLowerCase().includes("microsoft") ||
            inputString.toLowerCase().includes("ms") ||
            inputString.toLowerCase().includes("pmp") ||
            inputString.toLowerCase().includes("management")
        )
            keywordModifiedString += "Business Courses";

        // Checks whether input string has a reference to "HI-Tech" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("hack") ||
            inputString.toLowerCase().includes("it") ||
            inputString.toLowerCase().includes("python") ||
            inputString.toLowerCase().includes("ccna") ||
            inputString.toLowerCase().includes("incident") ||
            inputString.toLowerCase().includes("handle")
        )
            keywordModifiedString += "HI-Tech";

        // Checks whether input string has a reference to "Design Courses" and if so adds the corresponding keyword to the modified input string
        if (
            inputString.toLowerCase().includes("design") ||
            inputString.toLowerCase().includes("adobe") ||
            inputString.toLowerCase().includes("illustrator") ||
            inputString.toLowerCase().includes("photoshop") ||
            inputString.toLowerCase().includes("graphic") ||
            inputString.toLowerCase().includes("ui") ||
            inputString.toLowerCase().includes("ux")
        )
            keywordModifiedString += "Design Courses";

            return keywordModifiedString;
    }
}