const ContactUsForm = {
    //Displays a SEDC contact email form
    printContactUsForm: function () {
        UiService.displayModalWindow("contact");

        ApplyAndPriceService.popUp.innerHTML = `
        <div class="container" id="contactUsForm">
            <h1 class="formHeader">Contact our sales team!</h1>
            <form action="https://formsubmit.co/nikola.veselinovski@gmail.com" method="POST">
                <label>First Name</label>
                <input type="text" id="fname" name="FirstName" placeholder="Your name.." required>

                <label">Last Name</label>
                <input type="text" id="lname" name="LastName" placeholder="Your last name.." required>

                <label">Email</label>
                <input type="email" name="email" id="Email" placeholder="Your email.." required>

                <label>Subject</label>
                <input type="text" id="subject" name="Subject" placeholder="Message subject.." required>

                <label>Message</label>
                <textarea id="message" name="message" placeholder="Write something.." required style="height:200px"></textarea>
                <div class="submit">
                    <input type="submit" id="submit" value="Submit">
                <div>
            </form>
        </div>`;
    }
}//PROPERTIES: