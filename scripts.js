document.addEventListener('DOMContentLoaded', () => {
    const pin1 = document.getElementById('pin1');
    const pin2 = document.getElementById('pin2');
    const pin3 = document.getElementById('pin3');
    const pin4 = document.getElementById('pin4');
    const pin5 = document.getElementById('pin5');
    const pin6 = document.getElementById('pin6');
    const popup = document.getElementById('popup');
    const popupClose = document.getElementById('popup-close');
    const popupImage = document.getElementById('popup-image');
    const popupHeading = document.getElementById('popup-heading')
    const popupText = document.getElementById('popup-text');
    const progressBar = document.getElementById('progress-bar');

    const pinData = {
        pin1: {
            image: './media/image1.png',
            heading: 'Receiving a Bid ...',
            text: 'It all began with recieving a bid. I was ecstatic after and going in, set high expectations for myself and knew that all the brothers, Ross and Maddy in particular, had very high hopes for me',
            progress: 50 // progress percentage (0-100)
        },
        pin2: {
            image: './media/image2.png',
            heading: 'Brother Interviews!',
            text: 'Reaching out to interview, setting up a location and time, background research, the actual interview process, and then following up with a genuine thank you note taught me so much about networking, but more importantly I greatly enjoyed having meaningful conversations and learning from one anothers\'s perspectives. You can tell I was thrilled... my notes.',
            progress: 80 // progress percentage (0-100)
        },

        pin3: {
            image: './media/image3.jpeg',
            heading: 'Mid Court',
            text: 'Mid court was several important lessons. From understanding the weight of expectations to dealing with improvement, it was a great learning journey, and has greatly built my confidence and standards I set for myself. Juggling multiple spheres of life wasn\'t easy in the slightest! Note to Self: SILENT YOUR PHONE!!!',
            progress: 50 // progress percentage (0-100)
        },

        pin4: {
            image: './media/image5.png',
            heading: 'CASE COMP !!!',
            text: 'I get a text from Ross. He\'s just trying to make sure I\'m making progress on the case presentation. I freak out and think I\'m not working hard enough. The next week was a GRINDDD. I learned teamwork, creativity, problem-solving, and, I\'m ashamed to admit, I learned to use Canva. As for the result...',
            progress: 80 // progress percentage (0-100)
        },

        pin5: {
            image: './media/image4.png',
            heading: 'Looking Ahead...',
            text: 'Regardless of induction, I have made life-long friends and connections here, learned and been inspired by the best of Miami, and pushed myself close to my limits. I look forward to everything that this fraternity is to bring.',
            progress: 50 // progress percentage (0-100)
        },

        pin6: {
            image: './media/image6.png',
            heading: 'ROSSSSSSS !!! & MADDY !!!',
            text: 'Amazing VP of NME and Director of NME. Truly. I have no complaints. Amazing people. Literally a dad and mom at this point. Love both of you.',
            progress: 50 // progress percentage (0-100)
        },
        // Add more pin data as needed
    };

    function showPopup(pinId) {
        const data = pinData[pinId];
        if (data) {
            popupImage.src = data.image;
            popupHeading.textContent = data.heading;
            popupText.textContent = data.text;
            const progressWidth = data.progress + '%';
            progressBar.style.width = progressWidth;
            progressBar.style.backgroundColor = getProgressColor(data.progress);
            popup.classList.remove('hidden');
        }
    }

    function hidePopup() {
        popup.classList.add('hidden');
    }

    function getProgressColor(progress) {
        const r = 255 * (100 - progress) / 100;
        const g = 255 * progress / 100;
        return `rgb(${r}, ${g}, 0)`;
    }

    pin1.addEventListener('click', () => {
        showPopup('pin1');
    });

    pin2.addEventListener('click', () => {
        showPopup('pin2');
    });

    pin3.addEventListener('click', () => {
        showPopup('pin3');
    });

    pin4.addEventListener('click', () => {
        showPopup('pin4');
    });

    pin5.addEventListener('click', () => {
        showPopup('pin5');
    });

    pin6.addEventListener('click', () => {
        showPopup('pin6');
    });


    // Add more event listeners for additional pins as needed

    popupClose.addEventListener('click', hidePopup);
});
