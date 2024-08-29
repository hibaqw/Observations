

export const SETTINGS_AND_CONTEXT = 'Settings & Context';
export const SOCIETAL_CUSTOMS_AND_NORMS = 'Societal Customs & Norms';

export const SECTIONS_TEXT = [
  { sectionName:'Settings & Context', sectionQuestions: [
   { question: 'What genre does you Society Paper belong to?*', isSelect: true, isRequired: true, answers: ['Fantasy 🐉', 'Scifi 🛸', 'Historial ⏳', 'Mystery/Psychological 🕵🏾', 'Young Adult 🏫'] },
   { question: <span className='monserrat-regular'>What is the primary setting the society sheet will cover?*</span>, isSelect: true, isRequired: true, answers: ['A royal court', 'Elon Musk’s Martian Colony', 'Regency-Era England', 'Your mysterious neighbour’s basement', 'A prestigious private academy', 'Other'] },
   { question: <span className='monserrat-regular'>If you answered other for the previous question, elaborate more on the primary setting the sheet will cover (optional) </span>, isSelect: false, isRequired: false, name:'setting'},
   { question: <span className='monserrat-regular'>What culture(s) will your society be based on (optional)?</span>, isSelect: false, isRequired: false, name:'culture'}

 ]},
 {sectionName: 'Characters & Relationships', sectionQuestions: [
   { question: <span className='monserrat-regular'>Who are the main characters involved in the gossip? Provide brief descriptions*</span>, isSelect: false, isRequired: true, name:'characters'},
   { question: <span className='monserrat-regular'>Are there any notable families, groups, factions, rivalries, or conflicts in your society? Describe them briefly (optional)</span>, isSelect: false, isRequired: false,  name:'conflicts'},
   { question: <span className='monserrat-regular'>Are there any notable relationships or romantic entanglements in your society? (optional).</span>, isSelect: false, isRequired: false, name:'relationships' }
 ]},
 {sectionName:'Events & Scandals', sectionQuestions:[
   { question: <span className='monserrat-regular'>What recent event has everyone talking*? </span>, isSelect: false, isRequired: true, name:'events'},
   { question: <span className='monserrat-regular'>Is there a scandal or secret that has been recently uncovered? Provide details.*</span>, isSelect: false, isRequired: true, name:'scandals'},
 ]},
 {sectionName:'Mysterious Happenings', sectionQuestions:[
   { question: 'Are there any mysterious events or phenomena occurring in your society? Provide details (optional)', isSelect: false, isRequired: false, name:'phenomena'},
   { question: <span className='monserrat-regular'>What rumors or superstitions are circulating among the people? Provide details (optional).</span>, isSelect: false, isRequired: false, name:'rumours'},
 ]},
 {sectionName: 'Societal Customs & Norms', sectionQuestions:[
   { question: <span className='monserrat-regular'>What are some unique customs or traditions in your society that might influence the gossip (optional)?</span>, isSelect: false, isRequired: false, name:'customs'},
   { question: <span className='monserrat-regular'>How does your society view reputation?*</span>, isSelect: true, isRequired: true, answers: ['Status is everything; a single scandal can ruin a family', 'Reputation is less important than personal achievements', 'Status and reputation are balanced with personal honor']},
 ]},
 {sectionName: 'Headlines & Formatting', sectionQuestions:[
   { question: <span className='monserrat-regular'>What would be a catchy headline for a piece of gossip in your society paper?*</span>, isSelect: false, isRequired: true, name:'headline' },
   { question: <span>Can you provide a brief summary or lead-in for an article based on the provided information (optional)</span>, isSelect: false, isRequired: false, name:'summary'},
 ]},

]