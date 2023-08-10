//Imports React Native
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native'

//Imports de assets
import PrimeVideoLogo from '../../assets/prime_video.png'
import AmazonLogo from '../../assets/amazon_logo.png'
import MovieTheWheel from '../../assets/movies/the_wheel_of_time.png'

//Imports de utils
import { MOVIESWATCHING } from '../../utils/moviesWatching'
import { MOVIESCRIME } from '../../utils/moviesCrimes'
import { MOVIESWATCH } from '../../utils/moviesWatch'

//Imports de Componentes
import { MoviesCard } from '../../components/MoviesCard'

export const Home = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
        <Image style={styles.AmazonLogoImg} source={AmazonLogo} />
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Tv Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentMovies}
      >
        <TouchableOpacity style={styles.movieImageBanner}>
          <Image style={styles.movieImage} source={MovieTheWheel}></Image>
        </TouchableOpacity>

        <Text style={styles.movieText}>Continue Watching</Text>
        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.movieText}>Crime Movies</Text>
        <FlatList
          data={MOVIESCRIME}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.movieText}>Watch in your language</Text>
        <FlatList
          data={MOVIESWATCH}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232F3E',
    alignItems: 'flex-start'
  },
  header: {
    width: '100%',
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  primeLogoImg: {},
  AmazonLogoImg: {
    marginTop: -32,
    marginLeft: 30
  },
  category: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    marginBottom: 15
  },

  categoryText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white'
  },

  movieImageBanner: {
    width: '100%',
    alignItems: 'center'
  },

  contentMovies: {},

  movieImage: {
    height: 162,
    width: '100%'
  },

  movieText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    padding: 15
  },
  contentList: {
    paddingLeft: 18,
    paddingRight: 30,
    marginBottom: 8
  }
})
