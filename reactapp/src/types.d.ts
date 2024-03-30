type CounterProps = {
    initialCount: number;
}

type WeatherProps = {
    weather: string;
}

interface WeatherContextProps {
    weather: string;
    changeWeather: () => void;
  }

  type ProductProps={
    product: string;
  }

  type FruitType = {
    id: number;
    name: string;
  };
  
  type FruitListProps = {
    fruits: FruitType[];
  };

  