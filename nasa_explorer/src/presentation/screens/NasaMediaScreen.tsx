import React from 'react';
import { View, Text, TextInput, Image, FlatList, ActivityIndicator, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { useNasaMediaViewModel } from '../viewmodels/NasaMediaViewModel';
import { useForm, Controller } from 'react-hook-form';
import ClockLoader from '../components/loaders/ClockLoader';

//define tipo para formulario
type FormData = {
  query: string;
};

//componente nasamediascreen
export const NasaMediaScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: { query: 'moon' },
  });

  // Estado local para almacenar el termino de busqueda actual, por defecto 'moon'
  const [searchTerm, setSearchTerm] = React.useState('moon');
  const { media, loading } = useNasaMediaViewModel(searchTerm);

  // funcion que se ejecuta al enviar el formulario
  const onSubmit = (data: FormData) => {
    setSearchTerm(data.query.trim());
  };

  const isWeb = Platform.OS === 'web'; //comprueba si la app esta en web
    const windowHeight = Dimensions.get('window').height; //obtiene la altura de la ventana
  
    //define los estilos de las imagenes, adaptandose a la web
    const imageHeight = isWeb ? windowHeight * 0.5 : 200;
  
    const imageStyles = {
      height: imageHeight,
      borderRadius: 10
    };

  return (
    <View style={{ padding: 16 }}>
      <Controller
        control={control}
        name="query"
        rules={{
          required: 'El campo es obligatorio',
          minLength: {
            value: 1,
            message: 'Debe tener al menos 1 caracteres',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: errors.query ? 'red' : '#ccc',
                padding: 8,
                borderRadius: 8,
                marginBottom: 4,
              }}
              placeholder="Buscar imágenes (e.g. Mars)"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              onSubmitEditing={handleSubmit(onSubmit)}
              returnKeyType="search"
            />
            {errors.query && (
              <Text style={{ color: 'red', marginBottom: 8 }}>
                {errors.query.message}
              </Text>
            )}
          </>
        )}
      />

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={{
          backgroundColor: '#007bff',
          padding: 10,
          borderRadius: 8,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
          Buscar
        </Text>
      </TouchableOpacity>

      {loading ? (
        <ClockLoader/>
      ) : (
        <FlatList
          data={media}
          keyExtractor={(item) => item.nasa_id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 16 }}>
              <Image
                source={{ uri: item.previewUrl }}
                style={imageStyles}
                resizeMode="cover"
              />
              <Text style={{ fontWeight: 'bold', marginTop: 8 }}>{item.title}</Text>
              <Text style={{ color: '#666' }}>{item.date_created}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};