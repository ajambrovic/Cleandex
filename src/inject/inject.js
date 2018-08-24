chrome.extension.sendMessage({}, function (response) {
	const readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "interactive") {
			clearInterval(readyStateCheckInterval);

			const articles = document.querySelectorAll('li.clearfix');
			const keywords = [
				"Kardashian",
				"Maja Šuput",
				"FIFA",
				"izazovne fotke",
				"nevjerojatan trbuh",
				"udala se",
				"seksi snimkom",
				"Meghan Markle",
				"Franka Batelić",
				"Severin",
				"Igor Kojić",
				"u vezi s duhom",
				"Ana Gruica",
				"Tulumarila na Zrću",
				"Seksi",
				"Modni mačak",
				"Neven Ciganović",
				"Jelena Veljača",
				"Seks skandal",
				"Ella Dvornik",
				"Nikolina Ristović",
				"gole grudi",
				"Nina Badrić",
				"Jelena Rozga",
				"Nives Celzijus"
			];
			// get all article that contain a keyword

			const filter = Array.prototype.filter;
			const filteredArticles = filter.call(articles, function (article) {
				const articleTitle = article.querySelector('.title');
				const articleSummary = article.querySelector('.summary');
				return keywords.some(keyword => {
					return articleTitle.innerText.toLowerCase().indexOf(keyword.toLowerCase()) > -1 || articleSummary.innerText.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
				});
			});
			filteredArticles.forEach(filteredArticle => {
				filteredArticle.style.display = 'none';
				console.log(filteredArticle.querySelector('.title').innerText);
				console.log(filteredArticle.querySelector('.summary').innerText);
			});
		}
	}, 10);
});