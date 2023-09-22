// import React from "react";
// type InputProps = {
//   value: string;

//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// };
// export default function Input(props: InputProps) {
//   return (
//     <div>
//       <input type="text" value={props.value} onChange={props.handleChange} />
//     </div>
//   );
// }

import React from "react";

export default function Input({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
