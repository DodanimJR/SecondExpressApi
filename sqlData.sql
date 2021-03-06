PGDMP     +    :    
            z         
   university    14.0    14.0 0    %           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            &           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            '           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            (           1262    32960 
   university    DATABASE     n   CREATE DATABASE university WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Latin America.1252';
    DROP DATABASE university;
                postgres    false            ?            1259    32982 
   Assignment    TABLE     ?   CREATE TABLE public."Assignment" (
    id integer NOT NULL,
    "profesorId" integer NOT NULL,
    "facultadId" integer NOT NULL,
    nombre text NOT NULL
);
     DROP TABLE public."Assignment";
       public         heap    postgres    false            ?            1259    32981    Assignment_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Assignment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Assignment_id_seq";
       public          postgres    false    213            )           0    0    Assignment_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Assignment_id_seq" OWNED BY public."Assignment".id;
          public          postgres    false    212            ?            1259    33003    Faculty    TABLE     ?   CREATE TABLE public."Faculty" (
    id integer NOT NULL,
    nombre text NOT NULL,
    nombre_decano text NOT NULL,
    abreviacion text NOT NULL
);
    DROP TABLE public."Faculty";
       public         heap    postgres    false            ?            1259    33002    Faculty_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Faculty_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Faculty_id_seq";
       public          postgres    false    217            *           0    0    Faculty_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Faculty_id_seq" OWNED BY public."Faculty".id;
          public          postgres    false    216            ?            1259    33886 	   Matricula    TABLE     ?   CREATE TABLE public."Matricula" (
    id integer NOT NULL,
    "estudianteId" integer NOT NULL,
    "materiaId" integer NOT NULL,
    cuatrimestre text NOT NULL
);
    DROP TABLE public."Matricula";
       public         heap    postgres    false            ?            1259    33885    Matricula_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Matricula_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Matricula_id_seq";
       public          postgres    false    219            +           0    0    Matricula_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Matricula_id_seq" OWNED BY public."Matricula".id;
          public          postgres    false    218            ?            1259    32975    Student    TABLE     x   CREATE TABLE public."Student" (
    id integer NOT NULL,
    "facultadId" integer NOT NULL,
    nombre text NOT NULL
);
    DROP TABLE public."Student";
       public         heap    postgres    false            ?            1259    32974    Student_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Student_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Student_id_seq";
       public          postgres    false    211            ,           0    0    Student_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Student_id_seq" OWNED BY public."Student".id;
          public          postgres    false    210            ?            1259    32994    Teacher    TABLE     ?   CREATE TABLE public."Teacher" (
    id integer NOT NULL,
    nombre text NOT NULL,
    apellido text NOT NULL,
    "facultadId" integer NOT NULL
);
    DROP TABLE public."Teacher";
       public         heap    postgres    false            ?            1259    32993    Teacher_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Teacher_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Teacher_id_seq";
       public          postgres    false    215            -           0    0    Teacher_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Teacher_id_seq" OWNED BY public."Teacher".id;
          public          postgres    false    214            ?            1259    32963    _prisma_migrations    TABLE     ?  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            w           2604    32985    Assignment id    DEFAULT     r   ALTER TABLE ONLY public."Assignment" ALTER COLUMN id SET DEFAULT nextval('public."Assignment_id_seq"'::regclass);
 >   ALTER TABLE public."Assignment" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    212    213            y           2604    33006 
   Faculty id    DEFAULT     l   ALTER TABLE ONLY public."Faculty" ALTER COLUMN id SET DEFAULT nextval('public."Faculty_id_seq"'::regclass);
 ;   ALTER TABLE public."Faculty" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            z           2604    33889    Matricula id    DEFAULT     p   ALTER TABLE ONLY public."Matricula" ALTER COLUMN id SET DEFAULT nextval('public."Matricula_id_seq"'::regclass);
 =   ALTER TABLE public."Matricula" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            v           2604    32978 
   Student id    DEFAULT     l   ALTER TABLE ONLY public."Student" ALTER COLUMN id SET DEFAULT nextval('public."Student_id_seq"'::regclass);
 ;   ALTER TABLE public."Student" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            x           2604    32997 
   Teacher id    DEFAULT     l   ALTER TABLE ONLY public."Teacher" ALTER COLUMN id SET DEFAULT nextval('public."Teacher_id_seq"'::regclass);
 ;   ALTER TABLE public."Teacher" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215                      0    32982 
   Assignment 
   TABLE DATA           N   COPY public."Assignment" (id, "profesorId", "facultadId", nombre) FROM stdin;
    public          postgres    false    213   #8                  0    33003    Faculty 
   TABLE DATA           K   COPY public."Faculty" (id, nombre, nombre_decano, abreviacion) FROM stdin;
    public          postgres    false    217   ?8       "          0    33886 	   Matricula 
   TABLE DATA           T   COPY public."Matricula" (id, "estudianteId", "materiaId", cuatrimestre) FROM stdin;
    public          postgres    false    219   99                 0    32975    Student 
   TABLE DATA           =   COPY public."Student" (id, "facultadId", nombre) FROM stdin;
    public          postgres    false    211   ?9                 0    32994    Teacher 
   TABLE DATA           G   COPY public."Teacher" (id, nombre, apellido, "facultadId") FROM stdin;
    public          postgres    false    215   ?:                 0    32963    _prisma_migrations 
   TABLE DATA           ?   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    209   ?:       .           0    0    Assignment_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Assignment_id_seq"', 13, true);
          public          postgres    false    212            /           0    0    Faculty_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Faculty_id_seq"', 2, true);
          public          postgres    false    216            0           0    0    Matricula_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Matricula_id_seq"', 13, true);
          public          postgres    false    218            1           0    0    Student_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Student_id_seq"', 9, true);
          public          postgres    false    210            2           0    0    Teacher_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Teacher_id_seq"', 9, true);
          public          postgres    false    214            ?           2606    32987    Assignment Assignment_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Assignment"
    ADD CONSTRAINT "Assignment_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."Assignment" DROP CONSTRAINT "Assignment_pkey";
       public            postgres    false    213            ?           2606    33010    Faculty Faculty_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Faculty"
    ADD CONSTRAINT "Faculty_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Faculty" DROP CONSTRAINT "Faculty_pkey";
       public            postgres    false    217            ?           2606    33891    Matricula Matricula_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Matricula"
    ADD CONSTRAINT "Matricula_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Matricula" DROP CONSTRAINT "Matricula_pkey";
       public            postgres    false    219            ~           2606    32980    Student Student_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Student"
    ADD CONSTRAINT "Student_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Student" DROP CONSTRAINT "Student_pkey";
       public            postgres    false    211            ?           2606    33001    Teacher Teacher_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Teacher"
    ADD CONSTRAINT "Teacher_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Teacher" DROP CONSTRAINT "Teacher_pkey";
       public            postgres    false    215            |           2606    32971 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    209            ?           2606    33021 %   Assignment Assignment_facultadId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Assignment"
    ADD CONSTRAINT "Assignment_facultadId_fkey" FOREIGN KEY ("facultadId") REFERENCES public."Faculty"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 S   ALTER TABLE ONLY public."Assignment" DROP CONSTRAINT "Assignment_facultadId_fkey";
       public          postgres    false    217    3204    213            ?           2606    33016 %   Assignment Assignment_profesorId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Assignment"
    ADD CONSTRAINT "Assignment_profesorId_fkey" FOREIGN KEY ("profesorId") REFERENCES public."Teacher"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 S   ALTER TABLE ONLY public."Assignment" DROP CONSTRAINT "Assignment_profesorId_fkey";
       public          postgres    false    3202    213    215            ?           2606    33892 %   Matricula Matricula_estudianteId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Matricula"
    ADD CONSTRAINT "Matricula_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES public."Student"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 S   ALTER TABLE ONLY public."Matricula" DROP CONSTRAINT "Matricula_estudianteId_fkey";
       public          postgres    false    211    219    3198            ?           2606    33897 "   Matricula Matricula_materiaId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Matricula"
    ADD CONSTRAINT "Matricula_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES public."Assignment"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 P   ALTER TABLE ONLY public."Matricula" DROP CONSTRAINT "Matricula_materiaId_fkey";
       public          postgres    false    213    219    3200            ?           2606    33011    Student Student_facultadId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Student"
    ADD CONSTRAINT "Student_facultadId_fkey" FOREIGN KEY ("facultadId") REFERENCES public."Faculty"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 M   ALTER TABLE ONLY public."Student" DROP CONSTRAINT "Student_facultadId_fkey";
       public          postgres    false    211    3204    217            ?           2606    33036    Teacher Teacher_facultadId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Teacher"
    ADD CONSTRAINT "Teacher_facultadId_fkey" FOREIGN KEY ("facultadId") REFERENCES public."Faculty"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 M   ALTER TABLE ONLY public."Teacher" DROP CONSTRAINT "Teacher_facultadId_fkey";
       public          postgres    false    217    215    3204               ?   x?e?M
?0?יS??????BW
?͘?2?f$i7???.??>?*?P]???&?,Q#?54?Tx?q\???v^???`W?[?=??}?t?M?б??3[*c???????$??S]?%?t???\?p??U[??f??-?D?????<l%ϒ??V?I? x?-I          Q   x?3???KO??L-?L?t?OI???UpN,.??????v?2?tL????,.)JL????t?I??S??/J?tvvt?????? ??      "   M   x?3?4?4?,(??M-??2?A??6??L??*M?l?J3 ???F???4FRi	?!T 9&.H%????? [A*         ?   x???
?@???S?	????tU??y??b0ݕ?)ԧ7=??7??U]??"/????<i???????JO??%G&<????#X?w???MF?몱??L?1?,?ZI???d??j???O?J?K??Q?n?bg?0??<YT:z, ?9n6         ?   x?M̻
?@??????⥎?*?i???&?d/?>?????N?s`򺠣??,?q-z.9`???˻??"????????D?%??????{L?Fi?p1?C???1ҝ?p-???t?y?:k??O?e??s??n0?           x?m?M?0FיSt_?kK9DOP?l?@I M?_Oghg?/F?{??@@1???QDÊ??b?B[0?<???Q???~??5?\}q??Y;??}? V?(F;???'l'???g?ߧP?bCa:_????????Q?V??:|??5+@Y>?H?U?:?M٢????:??P??'???*˔?d??n$mv???T?????????D~????@+?????u???ZiGw?V_??Ⱥ??,X????>?o???:BsqF??@$?b?)̭?+;M???????pS?i????$|4i$????	??.?q???>?q?~ ??;??"?>h,e4?"?\:?^Җ????0@X??Z#t4͔?aӁ???^s쌤???????g?5???=z?=???Ed?s^???Ƿ?&??U^??#z?$r*XR?????C\%???Y??8????	7L???z)h???p?o??N[???Ts)?'???V?6d??3?@v?~^?k|????1o?K?+??Eu7~???????uD??     