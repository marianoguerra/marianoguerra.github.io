(ns om-tools.dom
  "DOM element constructors for React. Mirrors om.dom namespace"
  (:refer-clojure :exclude [map meta time])
  (:require
   [clojure.string :as str]
   om.dom
                  )
       
          
                                  )

     
                 
               

     
              
                                                                      
                   
        
                         
                          

(defn camel-case
  "Converts kebab-case to camelCase"
  [s]
  (str/replace s #"-(\w)" (comp str/upper-case second)))

(defn opt-key-case
  "Converts attributes that are kebab-case and should be camelCase"
  [attr]
  (if (or (< (count attr) 5)
          (#{"data-" "aria-"} (subs attr 0 5)))
    attr
    (camel-case attr)))

(defn opt-key-alias
  "Converts aliased attributes"
  [opt]
  (case opt
    :class :className
    :for :htmlFor
    opt))

(defn format-opt-key
  "Returns potentially formatted name for DOM element attribute.
   Converts kebab-case to camelCase."
  [opt-key]
  (-> opt-key
      opt-key-alias
      name
      opt-key-case
      keyword))

(declare format-opts)

(defn format-opt-val
  "Returns potentially modified value for DOM element attribute.
   Recursively formats map values (ie :style attribute)"
  [opt-val]
  (cond
   (map? opt-val)
   (format-opts opt-val)

        
                           
        
                          

   :else
   opt-val))

(defn format-opts
  "Returns JavaScript object for React DOM attributes from opts map"
  [opts]
  (if (map? opts)
    (->> opts
         (clojure.core/map
          (fn [[k v]] [(format-opt-key k) (format-opt-val v)]))
         (into {})
         clj->js)
    opts))

(defn ^boolean possible-coll? [form]
  (or (coll? form)
      (symbol? form)
      (list? form)))

(def form-tags
  '[input textarea option])

(defn el-ctor [tag]
  (if (some (partial = tag) form-tags)
    (symbol "om.dom" (name tag))
    (symbol "js" (str "React.DOM." (name tag)))))

      
(defn ^boolean valid-element? [x]
  ((or (.-isValidElement js/React) ;; React 0.12.0+
       (.-isValidComponent js/React))
   x))

(defn js-opts? [x]
       
                       
        
  (and (object? x) (not (valid-element? x))))

(defn element-args
  "Returns a vector of [opts children] for from first and second
  argument given to DOM function"
  [opts children]
  (cond
   (nil? opts) [nil children]
   (map? opts) [(format-opts opts) children]
   (js-opts? opts) [opts children]
   :else [nil (cons opts children)]))

      
(defn element [ctor opts children]
  (let [[opts children] (element-args opts children)]
    (apply ctor (flatten (cons opts children)))))

     
                                          
                                         
                                     
                                 
                           
                                                                
                
                                                          
                                        

                                                                     
                                                           

                 
                                                                   
                                                                       

                                            
      
                                                                               

     
                       

      
(defn class-set [m]
  "Returns a string of keys with truthy values joined together by spaces,
   or returns nil when no truthy values."
  (when-let [ks (->> m (filter val) keys (clojure.core/map name) distinct seq)]
    (str/join " " ks)))

;;;;;;;;;;;; This file autogenerated from src/om_tools/dom.cljx
