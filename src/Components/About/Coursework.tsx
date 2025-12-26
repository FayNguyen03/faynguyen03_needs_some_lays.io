import AnimatedList from '../../ReactBitsEffect/AnimatedList';
import './Coursework.css';

const computerScienceArray = [
    { name: 'Computer Science for Scientist', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000146010' },
    { name: 'Introduction to Data Structures in C++', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000143275' },
    { name: 'Software Design', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000143771' },
    { name: 'Hardware Design', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000143119' },
    { name: 'Analysis of Algorithms', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000146013' },
    { name: 'Programming Languages', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000163333' },
    { name: 'Theory of Computation', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000159790' },
    { name: 'Algorithm for Decision Making', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000159122' },
    { name: 'Ethical Issues in Software Development', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000156210' },
    { name: 'Compiler Design', url: 'https://teaching.scss.tcd.ie/module/csu33071-compiler-design-i/' },
    { name: 'Artificial Intelligence I', url: 'https://teaching.scss.tcd.ie/module/csu33061-artificial-intelligence-i/' },
    { name: 'Concurrent Systems and Operating Systems', url: 'https://teaching.scss.tcd.ie/module/csu23016-concurrent-systems-and-operating-systems/' },
    { name: 'Information Management II (Database)', url: 'https://teaching.scss.tcd.ie/module/csu34041-information-management-ii/' },
    { name: 'Advanced Computer Networks', url: 'https://teaching.scss.tcd.ie/module/csu33032-advanced-computer-networks/' }   
];

const computerScienceCourses: Map<string, string> = new Map();
computerScienceArray.forEach(course => {
    computerScienceCourses.set(course.name, course.url);
});

const mathArray = [
    { name: 'Linear Algebra', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000162710' },
    { name: 'Multivariable Calculus', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000163239' },
    { name: 'Discrete Math', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000162697' },
    { name: 'Abstract Algebra', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000162390' },
    { name: 'Probability Theorys', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000163332' },
    { name: 'Modern Computational Maths', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000163229' },
    { name: 'Combinatorics', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000165763' },
    { name: 'Stochastic Processes', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000165764' }
];

const mathCourses: Map<string, string> = new Map();
mathArray.forEach(course => {
    mathCourses.set(course.name, course.url);
});

const sdsArray = [
    { name: 'Statistics', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000163471' },
    { name: 'Statistical Modeling', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000163471' },
    { name: 'Data Visualization', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000162697' },
    { name: 'Data Science', url: 'https://sis.stolaf.edu/sis/public-coursedesc.cfm?clbid=0000162390' },
];

const sdsCourses: Map<string, string> = new Map();
sdsArray.forEach(course => {
    sdsCourses.set(course.name, course.url);
});

const Coursework: React.FC = () => {
  return (
    <div style={{ width: '100%', margin: '0 auto', padding: '20px 20px 20px 20px' }} className='Coursework'>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div className='coursework-category'>
                <h3>Computer Science</h3>
                <AnimatedList
                    items={Array.from(computerScienceCourses.keys())}       
                    onItemSelect={(item) => window.open(computerScienceCourses.get(item), '_blank')}
                    showGradients={false}
                    enableArrowNavigation={true}
                    displayScrollbar={false}
                />
            </div>
            <div className='coursework-category'>
                <h3>Mathematics</h3>
                <AnimatedList
                    items={Array.from(mathCourses.keys())}       
                    onItemSelect={(item) => window.open(mathCourses.get(item), '_blank')}
                    showGradients={false}
                    enableArrowNavigation={true}
                    displayScrollbar={false}
                />
            </div>
            <div className='coursework-category'>
                <h3>Statistics & Data Science</h3>
                <AnimatedList
                    items={Array.from(sdsCourses.keys())}       
                    onItemSelect={(item) => window.open(sdsCourses.get(item), '_blank')}
                    showGradients={false}
                    enableArrowNavigation={true}
                    displayScrollbar={false}
                />
            </div>
      </div>
    </div>
  );
}
export default Coursework;