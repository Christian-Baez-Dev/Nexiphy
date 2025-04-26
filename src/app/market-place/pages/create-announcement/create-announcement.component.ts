import { Component, computed, effect, ElementRef, inject, InjectionToken, OnInit, signal, viewChild } from '@angular/core';
import { CustomSelectForInputComponent } from "../../../shared/components/custom-select-for-input/custom-select-for-input.component";
import { BackComponent } from "../../../shared/components/back/back.component";
import { CustomSelectComponent } from "../../../shared/components/custom-select/custom-select.component";
import { AddImagesSliderComponent } from "../../../shared/components/add-images-slider/add-images-slider.component";
import { AnnouncementStatus } from 'src/app/interfaces/announcement.enum';
import { CurrencyService } from 'src/app/services/currency.service';
import { LocationService } from 'src/app/services/location.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categorie } from 'src/app/interfaces/categories.interface';
import { Currency } from 'src/app/interfaces/currency.interface';
import { LocationI } from 'src/app/interfaces/location.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { ComponentsHomeServiceService } from 'src/app/services/components-home-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss'],
  imports: [CustomSelectForInputComponent, BackComponent, CustomSelectComponent, AddImagesSliderComponent, ReactiveFormsModule],
})
export default class CreateAnnouncementComponent  implements OnInit {
  private componentService = inject(ComponentsHomeServiceService)
  private router = inject(Router)
  private fb = inject(FormBuilder)
  myForm =  this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: [0, [Validators.required, Validators.min(1)]],
    quantity: [0, [Validators.required]]
  })

  protected announcementService = inject(AnnouncementService)
  protected currencyService = inject(CurrencyService)
  protected locationService = inject(LocationService)
  protected categoriesService = inject(CategoriesService)

  protected statuses = signal(Object.values(AnnouncementStatus));

  protected selectedCurrency = signal<string | null>(null)

  protected currencies = signal<Currency[]>([])
  readonly  currencyName = computed(() => this.currencies().map(c => c.ISO3))
  readonly  currencyId = computed(() => this.currencies().map(c => c.id));

  protected categories = signal<Categorie[]>([])
  readonly  categorieName = computed(() => this.categories().map(c => c.name))
  readonly  categorieId = computed(() => this.categories().map(c => c.id));

  protected countries = signal<LocationI[]>([])
  readonly  countryName = computed(() => this.countries().map(c => c.name))
  readonly  countryId = computed(() => this.countries().map(c => c.id));

  protected provinces = signal<LocationI[]>([])
  readonly  provinceName = computed(() => this.provinces().map(c => c.name))
  readonly  provinceId = computed(() => this.provinces().map(c => c.id));

  protected municipalities = signal<LocationI[]>([])
  readonly  municipalityName = computed(() => this.municipalities().map(c => c.name))
  readonly  municipalityId = computed(() => this.municipalities().map(c => c.id));

  inputFile = viewChild<ElementRef>('inputFile')
  imgUrls = signal<string[]>([]);
  protected imgFiles = signal<File[]>([])

  selectedStatus = signal<string | null>(null)

  selectedCategories = signal<string[]>([])

  selectedCountry = signal<string | null>(null)
  selectedProvince = signal<string | null>(null)
  selectedMinicipality = signal<string | null>(null)

  provinceSelect = viewChild<CustomSelectComponent>('provinceSelect')
  municipalitySelect = viewChild<CustomSelectComponent>('municipalitySelect')

  constructor() { }

  ngOnInit() {
    this.currencyService.getAll().subscribe(response =>{
      this.currencies.set(response)
    })

    this.categoriesService.getAll().subscribe(response =>{
      this.categories.set(response)
    })

    this.locationService.getAllCountris().subscribe(response =>{
      this.countries.set(response)
    })
  }



  triggerFileInput() {
    this.inputFile()?.nativeElement.click()
  }

  onFileSelected(event: any) {
    console.log('entro al file selected')
    const files: FileList = event.target.files;

    if (files.length > 0) {
      // Convertimos FileList a un arreglo y usamos map() para procesar los archivos
      Array.from(files).map(file => {
        this.imgFiles.update((list) =>[
          ...list,
          file
        ])

        const reader = new FileReader();

        reader.onload = () => {
          this.imgUrls.update((list) => [...list,reader.result as string]);
        };

        reader.onerror = (error) => {
          console.error('Error al leer el archivo:', error);
        };

        reader.readAsDataURL(file); // Leemos el archivo como URL
      });
    }
  }


  clearImgs(){
    this.imgFiles.set([])
    this.imgUrls.set([])
  }

  addCategorie(categorie: string){
    this.selectedCategories.update(arr => [...arr, categorie])
  }

  addCountry(id:string){
    this.selectedCountry.set(id)
    this.provinceSelect()?.clear()
    this.municipalitySelect()?.clear()
    this.municipalities.set([])
    this.locationService.getAllProvinceByCountry(id).subscribe(response =>{
      this.provinces.set(response)
    })

  }


  addProvince(id:string){
    this.selectedProvince.set(id)
    this.municipalitySelect()?.clear()
    this.municipalities.set([])
    this.locationService.getAllMunicipalityByProvince(id).subscribe(response =>{
      this.municipalities.set(response)
    })
  }

  validateForm(): boolean{
    if(this.myForm.valid &&
      (this.selectedCurrency() &&
      this.selectedCategories() &&
      this.selectedCountry() &&
      this.selectedProvince() &&
      this.selectedMinicipality() &&
      this.selectedStatus() &&
      this.imgUrls().length > 0)){
        return true
      }



      return false
  }


  submitForm(){
    if(this.validateForm()){
      const data = new FormData()
      data.append('title', this.myForm.value.title!)
      data.append('description', this.myForm.value.description!)
      data.append('price', ''+this.myForm.value.price!)
      data.append('quantity', ''+this.myForm.value.quantity!)

      data.append('status', this.selectedStatus()!)
      data.append('currencyId', this.selectedCurrency()!)
      data.append('categories[]', this.selectedCategories()[0]!)
      data.append('municipalityId', this.selectedMinicipality()!)

      this.imgFiles().forEach(file =>{
        data.append('images',file)
      })

      this.announcementService.create(data).subscribe(response =>{
        if(response.status === 201){
          this.componentService.isMessageModalOpen.set(true)
          this.componentService.typeModalMessage.set('Success')
          this.componentService.messageModalMessage.set('El anuncio se ha creado correctamente')
        }else{
          this.componentService.isMessageModalOpen.set(true)
          this.componentService.typeModalMessage.set("Warning")
          this.componentService.messageModalMessage.set('Ha ocurrido un error. Por favor intentelo mas tarde')
        }

        this.router.navigate(['/marketplace'])
      })
    }
  }


}
