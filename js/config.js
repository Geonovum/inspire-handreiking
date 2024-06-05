//-- Postprocessors -------------------------------------------------------------------

//-- haalt gh-pages weg aan het eind van een URL
//-- Stopt zodra de eerste is gevonden (want komt maar 1x voor)
//-- JvG 2019-11-12
function custGHPG(respecConfig)  
{
  var tags = document.getElementsByTagName("a");
  var srch = "gh-pages";
  var slen = srch.length;
  var i;

  for (i = 0; i < tags.length; i++) 
  {
    if(tags[i].href.indexOf(srch) > -1)
    {
      console.log(tags[i].href + " is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - slen);
      console.log(tags[i].href + " is aangepast");
      break;
    }
  } 
}

var respecConfig = {
  specStatus: "GN-WV", // Kies uit de lijst: https://github.com/Geonovum/respec/wiki/specStatus
  specType: "HR", // Kies uit de lijst: https://github.com/Geonovum/respec/wiki/specType
  pubDomain: "EU", // Kies uit de lijst: https://github.com/Geonovum/respec/wiki/pubDomain. Of vraag aan bij beheerders
  //publishDate: "2024-06-05", // Datum als jjjj-mm-dd, bijvoorbeeld. Zet in geval van een werkversie de dubbele slash ervoor.
  previousPublishDate: "2024-06-05",    	  // Format is "YYYY-MM-DD"
  previousMaturity: "GN-LD",                 // kies 1 van deze 3 regels
  editors: [
    {
      name: "Geonovum INSPIRE team",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/",
    }
    ],
  shortName: "INSPIRE-handreiking",
  subtitle: "Aan de slag met INSPIRE",
  github: "https://github.com/Geonovum/inspire-handreiking",
  issueBase: "https://github.com/Geonovum/inspire-handreiking/issues/",
  license: 'cc-by-nd',
  // logos: [], // Geef een lege array op als er geen Geonovum logo moet staan
  doJsonLd: true,
  localBiblio: {},
  
  postProcess:[custGHPG],   //-- Optioneel voor een multi document repository
};
