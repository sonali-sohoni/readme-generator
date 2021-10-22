//MIT - ![APM](https://img.shields.io/apm/l/vim-mode)

//Apache 2.0 ![Hex.pm](https://img.shields.io/hexpm/l/plug)
//Apache - https://img.shields.io/aur/license/android-studio
//BSD - https://img.shields.io/pypi/l/Django


//https://img.shields.io/badge/License-MIT-success

const generateReadMeTemplate = (data) => {
	console.log(data);
	return `
  this is readme template ${data.title}
  `;
};

const getImageRefs = (images) => {
	return images
		? images
				.map(({ url, altText }) => {
					return `
     ![${altText}](${url})
    `;
				})
				.join("")
		: "";
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
