(ns notas.core
  (:require [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent defcomponentk]]
            [om-tools.dom :as dom :include-macros true]))

(defonce app-state (atom {:rows 12
                          :selected-notes {}
                          :selected-cells {}
                          :last-selected-note nil}))

(def all-notes ["A" "A#" "B" "C" "C#" "D" "D#" "E" "F" "F#" "G" "G#"])
(def d-note-to-pos {"A" 0, "A#"1, "B" 2, "C" 3, "C#" 4, "D" 5, "D#" 6, "E" 7,
                  "F" 8, "F#" 9, "G" 10, "G#" 11})
(def guitar-string-notes {1 "E", 2 "A", 3 "D", 4 "G", 5 "B", 6 "E"})

(defn note-to-pos [note]
  (get d-note-to-pos note))

(defn pos-to-note [pos]
  (get all-notes (rem pos 12)))

(def guitar-string-to-pos {1 (note-to-pos "E")
                           2 (note-to-pos "A")
                           3 (note-to-pos "D")
                           4 (note-to-pos "G")
                           5 (note-to-pos "B")
                           6 (note-to-pos "E")})

(def scales {"minor-natural" [2 1 2 2 1 2 2]
             "minor-harmonic" [2 1 2 2 1 3 2]
             "pentatonic" [3 2 2 3]
             "major" [2 2 1 2 2 2 1]})

(defn make-scale-from-pos-and-scale [pos scale]
  (reduce (fn [notes offset] (conj notes (+ (last notes) offset)))
            [pos] scale))

(defn make-scale-from-pos [pos scale-name]
  (make-scale-from-pos-and-scale pos (get scales scale-name)))

(defn make-scale-from-note [note scale-name]
  (make-scale-from-pos (note-to-pos note) scale-name))

(defn string-num-to-note [c]
  (let [norm-index (rem c 12)
        note (get guitar-string-notes norm-index)]
    note))

(defn string-pos-to-note [c fret]
  (let [string-note-index (get guitar-string-to-pos c)
        norm-index (rem (+ string-note-index fret) 12)
        note (get all-notes norm-index)]
    note))

(defn fret-classes [r]
  (if (contains? #{3 5 7 9 12 15 17 19} r)
    "fret dotted-fret"
    "fret"))

(defn toggle-selected-note [selected-notes note-name]
  (om/transact! selected-notes note-name not))

(defn toggle-selected-cell [selected-cells c r]
  (om/transact! selected-cells [c r] not))

(defn render-guitar-string-notes []
  (dom/tr {:class "fret-notes"}
          (for [c (range 7)
                :let [first-col? (zero? c)]]
            (if first-col?
              (dom/td {:class "row-index"} "")
              (dom/td {:class "note-name"}
                      (dom/span (string-num-to-note c)))))))

(defn render-guitar-note [selected-notes selected-cells state c r note-name]
  (let [note-selected? (get selected-notes note-name false)
        in-guitar? (not= [c r] [-1 -1])
        cell-selected? (and in-guitar? (get-in selected-cells [c r] false))
        last-selected-note (get state :last-selected-note)
        last-selected? (= last-selected-note note-name)
        note-selected-class (if note-selected? "class-selected" "")
        cell-selected-class (if cell-selected? "selected" "")
        last-selected-class (if last-selected? "last-selected" "")
        classes [note-selected-class cell-selected-class last-selected-class]
        classes-str (clojure.string/join " " classes)]
    (dom/button {:class classes-str
                 :on-click (fn [_]
                             (let [becomes-active? (not cell-selected?)]
                               (when in-guitar?
                                 (when becomes-active?
                                   (om/update! state :last-selected-note note-name))

                                 (when (= note-name last-selected-note)
                                   (om/update! state :last-selected-note nil))


                                 (toggle-selected-cell selected-cells c r)
                                 (toggle-selected-note selected-notes note-name))))}
                note-name)))

(defn render-fret [r selected-notes selected-cells state]
  (dom/tr {:class (fret-classes r)}
          (for [c (range 7)
                :let [first-col? (zero? c)
                      note-name (string-pos-to-note c r)]]
            (if first-col?
              (dom/td {:class "row-index"} r)
              (dom/td {:class "note"}
                (render-guitar-note selected-notes selected-cells state  c r note-name))))))

(defcomponentk guitar [[:data rows selected-notes selected-cells :as state]]
  (render [_]
          (dom/table {:class "guitar"}
            (for [r (range (inc rows))
                  :let [first-row? (zero? r)]]
              (if first-row?
                (render-guitar-string-notes) 
                (render-fret r selected-notes selected-cells state))))))

(defcomponentk note-seq [[:data last-selected-note selected-notes selected-cells :as state]]
  (render-state [_ {:keys [scale title]}]
                (if (nil? last-selected-note)
                  (dom/span "")
                  (let [note last-selected-note 
                        scale-steps (get scales scale)
                        scale-str (clojure.string/join " " (map str scale-steps))
                        scale-pos (make-scale-from-note note scale)
                        scale-notes (map pos-to-note scale-pos)]
                    (dom/div {:class "scale"}
                             (dom/h2 (str title " Scale for " last-selected-note))
                             (dom/p  (str " (" scale-str ")"))
                             (dom/div {:class "scale-notes"}
                               (for [scale-note scale-notes]
                                 (dom/span {:class "note"}
                                           (render-guitar-note selected-notes
                                                               selected-cells
                                                               state  -1 -1
                                                               scale-note)))))))))

(defn render-scales [state]
  (dom/div {:class "scales"}
           (om/build note-seq state
                     {:init-state {:scale "minor-harmonic"
                                   :title "Minor Harmonic"}})
           (om/build note-seq state
                     {:init-state {:scale "minor-natural"
                                   :title "Minor Natural"}})
           (om/build note-seq state
                     {:init-state {:scale "major"
                                   :title "Major"}})
           (om/build note-seq state
                     {:init-state {:scale "pentatonic"
                                   :title "Pentatonic"}})))

(defcomponentk page [[:data :as state]]
  (render [_]
          (dom/div {:class "row"}
                   (dom/div {:class "small-12 columns"}
                            (dom/h1 {:class "app-title"} "Guitar-o-matic")
                            (dom/p {:class "app-desc"}
                                   "Click on the notes on the guitar and learn something")
                            (dom/div {:class "row"}
                                     (dom/div {:class "small-12 medium-6 columns"}
                                              (dom/div {:class "guitar"}
                                                       (om/build guitar state)))

                                     (dom/div {:class "small-12 medium-6 columns scales"}
                                              (render-scales state)))))))

(defn main []
  (om/root page app-state
    {:target (. js/document (getElementById "app"))}))
