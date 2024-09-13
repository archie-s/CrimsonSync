import PropTypes from 'prop-types';

const BloodTypes = ({ bloodTypes }) => {
  return (
    <section id="blood-types">
      <div className="text-center">
        <h3 className="text-black text-3xl">
          Blood Types
        </h3>
        <p className="text-black">
          The Blood types are gotten from the server thus showing that backend and frontend are communicating 
        </p>
      </div>
      <div className="flex flex-row items-center pb-10 px-10 pt-4 gap-4 justify-center flex-wrap">
        {bloodTypes.map((blood_type, index) => (
          <div
            key={index}
            className="p-4 bg-white border border-border rounded-lg shadow-md mb-4 flex-grow max-w-xs">
            <p className="text-black text-center">{blood_type}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Define PropTypes for the component
BloodTypes.propTypes = {
  bloodTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BloodTypes;
