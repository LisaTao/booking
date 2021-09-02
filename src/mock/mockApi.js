const getMockTimeSlotByDate = (date) => {
  if (!date) return [];
  const weekend = date.getDay();
  if (weekend === 0 || weekend === 6) return [];
  switch (date.toLocaleDateString()) {
    case "02/09/2021":
      return ["10:00am", "10:30am", "3:00pm", "3:30pm", "4:00pm"];    
    case "07/09/2021":
      return ["10:00am", "10:30am", "3:00pm", "3:30pm", "4:00pm"];
    case "10/09/2021":
      return ["10:30am", "3:00pm", "3:30pm", "4:00pm"];
    default:
      return ["10:00am", "10:30am", "11:00am", "11:30am", "12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm", "3:00pm", "3:30pm", "4:00pm"];
  }
}

export { getMockTimeSlotByDate }