import * as THREE from "three";
import { EventEmitter } from "events";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Experience from "../Experience.js";

export default class Resources extends EventEmitter {
  constructor(assets) {
    // reception des assets
    super();
    this.experience = new Experience();
    this.renderer = this.experience.renderer;

    this.assets = assets;

    this.items = {};
    this.queue = this.assets.length; // argument = array de base
    this.loaded = 0;

    this.setLoaders(); // initalisation des loaders
    this.startLoading(); // téléchargement par ces loaders
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.textureLoader = new THREE.TextureLoader();
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.dracoLoader = new DRACOLoader();
    this.loaders.dracoLoader.setDecoderPath("./draco/");
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader); //Mettre le draco dans le GLTFLoader aussi.
    console.log(this.loaders);
  }

  startLoading() {
    for (const asset of this.assets) {
      //prendre tous les assets
      if (asset.type === "glbModel") {
        this.loaders.gltfLoader.load(asset.path, (file) => {
          //this asset est trop faible, il n'est que l'enveloppe non téléchargé
          this.singleAssetLoaded(asset, file); //file (contenu) généré automatiquement correspondant au path
        });
      } else if (asset.type === "texture") {
        this.text = {};
        this.text[asset.name] = this.loaders.textureLoader.load(asset.path);
        this.text[asset.name].magFilter = THREE.NearestFilter;
        this.text[asset.name].minFilter = THREE.NearestFilter;

        this.singleAssetLoaded(asset, this.text[asset.name]);
      }
    }
  }

  singleAssetLoaded(asset, file) {
    this.items[asset.name] = file; //Mettre le contenu pour chaque non dans items.
    this.loaded++;

    if (this.loaded === this.queue) {
      this.emit("ready"); //Donner une alerte quand les assets sont rangés.
    }
  }
}
