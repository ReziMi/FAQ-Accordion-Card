const accordion = document.querySelectorAll('.faq');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        // რომელსაც დაეკლიკება, დამეატება კლასი active
        this.classList.toggle('active');

        // მიმდინარე შეკიტხვიდან ვიღებთ პასუხს და ვინახავთ ცვლადში
        const answer = this.querySelector('.answer');

        if (this.classList.contains('active')) {
            // თუ შეკითხვა აქტიურია, პასუხს გამოვაჩენთ ბლოკით
            answer.style.display = 'block';

            // თუ ერთ შეკითხვას ვაღებთ, ყველა დანარჩენი უნდა დაიხუროს
            closeOtherAnswers(this);

            // აქტიური შეკითხვის სტილები
            const question = this.querySelector('.question');
            question.style.color = '#1E1F36';
            question.style.fontWeight = '700';
        } else {
            // თუ შეკითხვა არაა აქტიური, პასუხი იმალება
            answer.style.display = 'none';

            // სტილები უბრუნდება საწყის მდგომარეობას
            const question = this.querySelector('.question');
            question.style.color = '#4B4C5F';
            question.style.fontWeight = '400';
        }
    });
}

function closeOtherAnswers(currentFAQ) {
    for (let i = 0; i < accordion.length; i++) {
        if (accordion[i] !== currentFAQ) {

            accordion[i].classList.remove('active');
            const otherAnswer = accordion[i].querySelector('.answer');
            otherAnswer.style.display = 'none';

            const otherQuestion = accordion[i].querySelector('.question');
            otherQuestion.style.color = '#4B4C5F';
            otherQuestion.style.fontWeight = '400';
        }
    }
}
