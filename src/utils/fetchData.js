
export const excerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '569b94b7f1mshc5239c3f4f37df4p17d666jsnb86fef8b9288',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	  'X-RapidAPI-Key': '569b94b7f1mshc5239c3f4f37df4p17d666jsnb86fef8b9288',
	},
  };

export const fetchData = async(url,options) =>
{
    const res= await fetch(url,options)
    const data= await res.json()

    return data;
};
