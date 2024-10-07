import {
  RangeDatepicker as KRangeDatePicker,
  NativeDateService,
} from "@ui-kitten/components";
import Caption from "./Caption";

const RangeDatepicker = ({ range, onSelect, placeholder, helperText }) => {
  // Function to handle the datepicker state
  // const [range, setRange] = React.useState({});

  const i18n = {
    dayNames: {
      short: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      long: [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
        "Domingo",
      ],
    },
    monthNames: {
      short: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
      long: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
    },
  };

  const localeDateService = new NativeDateService("pt", {
    i18n,
    startDayOfWeek: 1,
  });
  // const formatDateService = new NativeDateService("pt", {i18n, format: "DD/MM/YYYY"});

  return (
    <KRangeDatePicker
      range={range}
      onSelect={onSelect}
      dateService={localeDateService}
      placeholder={placeholder}
      caption={() => Caption(helperText)}
    />
  );
};

export default RangeDatepicker;
