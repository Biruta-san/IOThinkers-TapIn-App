import {
  RangeDatepicker as KRangeDatePicker,
  NativeDateService,
} from "@ui-kitten/components";
import Caption from "./Caption";

const RangeDatepicker = ({
  range,
  onSelect,
  label,
  placeholder,
  helperText,
}) => {
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

  return (
    <KRangeDatePicker
      range={range}
      onSelect={onSelect}
      dateService={localeDateService}
      label={label}
      placeholder={placeholder}
      caption={() => Caption(helperText)}
    />
  );
};

export default RangeDatepicker;
