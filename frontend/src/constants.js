

export const SETTINGS_AND_CONTEXT = 'Settings & Context';
export const SOCIETAL_CUSTOMS_AND_NORMS = 'Societal Customs & Norms';

export const SECTIONS_TEXT = [
  { sectionName:'Settings & Context', sectionQuestions: [
   { question: <span>What genre does you Society Paper belong to?<span style={{color:'#F75252'}}>*</span>.</span>, answers: ['Please Select an Option','Fantasy 🐉', 'Scifi 🛸', 'Historial ⏳', 'Mystery/Psychological 🕵🏾', 'Young Adult 🏫'] },
   { question: <span>What is the primary setting the society sheet will cover?<span style={{color:'#F75252'}}>*</span>.</span>, answers: ['Please Select an Option','A royal court', 'Elon Musk’s Martian Colony', 'Regency-Era England', 'Your mysterious neighbour’s basement', 'A prestigious private academy', 'Other'] },
   { question: <span>If you answered other for the previous question, elaborate more on the primary setting the sheet will cover <span style={{color:'#87857E'}}>(optional)</span>.</span>, name:'setting'},
   { question: <span>What culture(s) will your society be based on <span style={{color:'#87857E'}}>(optional)</span>?</span>, name:'culture'}

 ]},
 {sectionName: 'Characters & Relationships', sectionQuestions: [
   { question: <span>Who are the main characters involved in the gossip? Provide brief descriptions<span style={{color:'#F75252'}}>*</span>.</span>, name:'characters'},
   { question: <span>Are there any notable families, groups, factions, rivalries, or conflicts in your society? Describe them briefly <span style={{color:'#87857E'}}>(optional)</span>.</span>, name:'conflicts'},
   { question: <span>Are there any notable relationships or romantic entanglements in your society <span style={{color:'#87857E'}}>(optional)</span>?</span>, name:'relationships' }
 ]},
 {sectionName:'Events & Scandals', sectionQuestions:[
   { question:<span>What recent event has everyone talking?<span style={{color:'#F75252'}}>*</span>.</span>, name:'events'},
   { question:<span>Is there a scandal or secret that has been recently uncovered? Provide details.<span style={{color:'#F75252'}}>*</span></span>, name:'scandals'},
 ]},
 {sectionName:'Mysterious Happenings', sectionQuestions:[
   { question: <span>Are there any mysterious events or phenomena occurring in your society? Provide details <span style={{color:'#87857E'}}>(optional)</span>.</span>, name:'phenomena'},
   { question: <span>What rumors or superstitions are circulating among the people? Provide details <span style={{color:'#87857E'}}>(optional)</span>.</span>, name:'rumours'},
 ]},
 {sectionName: 'Societal Customs & Norms', sectionQuestions:[
   { question: <span>What are some unique customs or traditions in your society that might influence the gossip <span style={{color:'#87857E'}}>(optional)</span>?</span>, name:'customs'},
   { question: <span>How does your society view reputation?<span style={{color:'#F75252'}}>*</span>.</span>, answers: ['Please Select an Option','Status is everything; a single scandal can ruin a family', 'Reputation is less important than personal achievements', 'Status and reputation are balanced with personal honor']},
 ]},
 {sectionName: 'Headlines & Formatting', sectionQuestions:[
   { question: <span>What would be a catchy headline for a piece of gossip in your society paper?<span style={{color:'#F75252'}}>*</span>.</span>, name:'headline' },
   { question: <span>Can you provide a brief summary or lead-in for an article based on the provided information <span style={{color:'#87857E'}}>(optional)</span>.</span>, name:'summary'},
 ]},

]