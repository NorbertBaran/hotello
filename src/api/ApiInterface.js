const notImplementedError = name => "Not implemented '" + name + "' flashcards api method"

export default class ApiInterface {
    welcome(){throw notImplementedError('welcome()')}
    slogan(){throw notImplementedError('slogan()')}
    gallery(){throw notImplementedError('gallery()')}
}