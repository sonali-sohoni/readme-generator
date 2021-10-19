const generateReadMeTemplate = (data) => {
	console.log(data);
	return `
  this is readme template ${data.title}
  `;
};

const getImageRefs = (images) => {
	return images
		.map(({ url, altText }) => {
			return `
     ![${altText}](${url})
    `;
		})
		.join("");
};
module.exports = (data) => {
	return `
    # ${data.title}

    ## Description

      ${data.desc}

    ## Installation
      ${data.install_instructions}

    ## Usage

    ${data.usage}
    ${getImageRefs(data.images)}
    
    ## Credits
    ${data.credits}

    ## License
  `;
};
