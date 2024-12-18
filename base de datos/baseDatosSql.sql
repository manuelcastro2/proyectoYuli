PGDMP      6            
    |         	   base_yuli    16.4    16.4 =    ,           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            -           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            .           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            /           1262    16792 	   base_yuli    DATABASE        CREATE DATABASE base_yuli WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE base_yuli;
                postgres    false            �            1259    16916    citas    TABLE     D  CREATE TABLE public.citas (
    id_citas text NOT NULL,
    id_usuarios_servicio integer NOT NULL,
    id_usuarios text NOT NULL,
    modalidad_cita text NOT NULL,
    afeccion_cita text NOT NULL,
    frecuencia_cita text NOT NULL,
    fecha_cita date NOT NULL,
    hora_cita text NOT NULL,
    estado_cita text NOT NULL
);
    DROP TABLE public.citas;
       public         heap    postgres    false            �            1259    16915    citas_id_usuarios_servicio_seq    SEQUENCE     �   CREATE SEQUENCE public.citas_id_usuarios_servicio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.citas_id_usuarios_servicio_seq;
       public          postgres    false    226            0           0    0    citas_id_usuarios_servicio_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.citas_id_usuarios_servicio_seq OWNED BY public.citas.id_usuarios_servicio;
          public          postgres    false    225            �            1259    16942    hora    TABLE     I   CREATE TABLE public.hora (
    idhora integer NOT NULL,
    hora text
);
    DROP TABLE public.hora;
       public         heap    postgres    false            �            1259    16941    hora_idhora_seq    SEQUENCE     �   CREATE SEQUENCE public.hora_idhora_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.hora_idhora_seq;
       public          postgres    false    228            1           0    0    hora_idhora_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.hora_idhora_seq OWNED BY public.hora.idhora;
          public          postgres    false    227            �            1259    16871    representantes    TABLE     �   CREATE TABLE public.representantes (
    id_representante text NOT NULL,
    id_usuarios text NOT NULL,
    nombres text NOT NULL,
    apellidos text NOT NULL,
    documento text NOT NULL,
    contacto text NOT NULL
);
 "   DROP TABLE public.representantes;
       public         heap    postgres    false            �            1259    16884    servicio    TABLE     _   CREATE TABLE public.servicio (
    id_servicio integer NOT NULL,
    servicio text NOT NULL
);
    DROP TABLE public.servicio;
       public         heap    postgres    false            �            1259    16883    servicio_id_servicio_seq    SEQUENCE     �   CREATE SEQUENCE public.servicio_id_servicio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.servicio_id_servicio_seq;
       public          postgres    false    221            2           0    0    servicio_id_servicio_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.servicio_id_servicio_seq OWNED BY public.servicio.id_servicio;
          public          postgres    false    220            �            1259    16845    tipo_usuarios    TABLE     e   CREATE TABLE public.tipo_usuarios (
    id_tipo_usuarios integer NOT NULL,
    tipo text NOT NULL
);
 !   DROP TABLE public.tipo_usuarios;
       public         heap    postgres    false            �            1259    16844 "   tipo_usuarios_id_tipo_usuarios_seq    SEQUENCE     �   CREATE SEQUENCE public.tipo_usuarios_id_tipo_usuarios_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public.tipo_usuarios_id_tipo_usuarios_seq;
       public          postgres    false    216            3           0    0 "   tipo_usuarios_id_tipo_usuarios_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.tipo_usuarios_id_tipo_usuarios_seq OWNED BY public.tipo_usuarios.id_tipo_usuarios;
          public          postgres    false    215            �            1259    16856    usuarios    TABLE     $  CREATE TABLE public.usuarios (
    id_usuarios text NOT NULL,
    id_tipo_usuarios integer NOT NULL,
    nombres text NOT NULL,
    apellidos text NOT NULL,
    documento text NOT NULL,
    correo text NOT NULL,
    contacto text NOT NULL,
    clave text NOT NULL,
    tipo_documento text
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    16855    usuarios_id_tipo_usuarios_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_tipo_usuarios_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.usuarios_id_tipo_usuarios_seq;
       public          postgres    false    218            4           0    0    usuarios_id_tipo_usuarios_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.usuarios_id_tipo_usuarios_seq OWNED BY public.usuarios.id_tipo_usuarios;
          public          postgres    false    217            �            1259    16896    usuarios_servicio    TABLE     �   CREATE TABLE public.usuarios_servicio (
    id_usuarios_servicio integer NOT NULL,
    id_usuarios text NOT NULL,
    id_servicio integer NOT NULL
);
 %   DROP TABLE public.usuarios_servicio;
       public         heap    postgres    false            �            1259    16895 !   usuarios_servicio_id_servicio_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_servicio_id_servicio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.usuarios_servicio_id_servicio_seq;
       public          postgres    false    224            5           0    0 !   usuarios_servicio_id_servicio_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.usuarios_servicio_id_servicio_seq OWNED BY public.usuarios_servicio.id_servicio;
          public          postgres    false    223            �            1259    16894 *   usuarios_servicio_id_usuarios_servicio_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_servicio_id_usuarios_servicio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 A   DROP SEQUENCE public.usuarios_servicio_id_usuarios_servicio_seq;
       public          postgres    false    224            6           0    0 *   usuarios_servicio_id_usuarios_servicio_seq    SEQUENCE OWNED BY     y   ALTER SEQUENCE public.usuarios_servicio_id_usuarios_servicio_seq OWNED BY public.usuarios_servicio.id_usuarios_servicio;
          public          postgres    false    222            s           2604    16919    citas id_usuarios_servicio    DEFAULT     �   ALTER TABLE ONLY public.citas ALTER COLUMN id_usuarios_servicio SET DEFAULT nextval('public.citas_id_usuarios_servicio_seq'::regclass);
 I   ALTER TABLE public.citas ALTER COLUMN id_usuarios_servicio DROP DEFAULT;
       public          postgres    false    225    226    226            t           2604    16945    hora idhora    DEFAULT     j   ALTER TABLE ONLY public.hora ALTER COLUMN idhora SET DEFAULT nextval('public.hora_idhora_seq'::regclass);
 :   ALTER TABLE public.hora ALTER COLUMN idhora DROP DEFAULT;
       public          postgres    false    228    227    228            p           2604    16887    servicio id_servicio    DEFAULT     |   ALTER TABLE ONLY public.servicio ALTER COLUMN id_servicio SET DEFAULT nextval('public.servicio_id_servicio_seq'::regclass);
 C   ALTER TABLE public.servicio ALTER COLUMN id_servicio DROP DEFAULT;
       public          postgres    false    220    221    221            n           2604    16848    tipo_usuarios id_tipo_usuarios    DEFAULT     �   ALTER TABLE ONLY public.tipo_usuarios ALTER COLUMN id_tipo_usuarios SET DEFAULT nextval('public.tipo_usuarios_id_tipo_usuarios_seq'::regclass);
 M   ALTER TABLE public.tipo_usuarios ALTER COLUMN id_tipo_usuarios DROP DEFAULT;
       public          postgres    false    215    216    216            o           2604    16859    usuarios id_tipo_usuarios    DEFAULT     �   ALTER TABLE ONLY public.usuarios ALTER COLUMN id_tipo_usuarios SET DEFAULT nextval('public.usuarios_id_tipo_usuarios_seq'::regclass);
 H   ALTER TABLE public.usuarios ALTER COLUMN id_tipo_usuarios DROP DEFAULT;
       public          postgres    false    217    218    218            q           2604    16899 &   usuarios_servicio id_usuarios_servicio    DEFAULT     �   ALTER TABLE ONLY public.usuarios_servicio ALTER COLUMN id_usuarios_servicio SET DEFAULT nextval('public.usuarios_servicio_id_usuarios_servicio_seq'::regclass);
 U   ALTER TABLE public.usuarios_servicio ALTER COLUMN id_usuarios_servicio DROP DEFAULT;
       public          postgres    false    224    222    224            r           2604    16900    usuarios_servicio id_servicio    DEFAULT     �   ALTER TABLE ONLY public.usuarios_servicio ALTER COLUMN id_servicio SET DEFAULT nextval('public.usuarios_servicio_id_servicio_seq'::regclass);
 L   ALTER TABLE public.usuarios_servicio ALTER COLUMN id_servicio DROP DEFAULT;
       public          postgres    false    224    223    224            '          0    16916    citas 
   TABLE DATA           �   COPY public.citas (id_citas, id_usuarios_servicio, id_usuarios, modalidad_cita, afeccion_cita, frecuencia_cita, fecha_cita, hora_cita, estado_cita) FROM stdin;
    public          postgres    false    226   �K       )          0    16942    hora 
   TABLE DATA           ,   COPY public.hora (idhora, hora) FROM stdin;
    public          postgres    false    228   >L                  0    16871    representantes 
   TABLE DATA           p   COPY public.representantes (id_representante, id_usuarios, nombres, apellidos, documento, contacto) FROM stdin;
    public          postgres    false    219   �L       "          0    16884    servicio 
   TABLE DATA           9   COPY public.servicio (id_servicio, servicio) FROM stdin;
    public          postgres    false    221   �L                 0    16845    tipo_usuarios 
   TABLE DATA           ?   COPY public.tipo_usuarios (id_tipo_usuarios, tipo) FROM stdin;
    public          postgres    false    216   3M                 0    16856    usuarios 
   TABLE DATA           �   COPY public.usuarios (id_usuarios, id_tipo_usuarios, nombres, apellidos, documento, correo, contacto, clave, tipo_documento) FROM stdin;
    public          postgres    false    218   mM       %          0    16896    usuarios_servicio 
   TABLE DATA           [   COPY public.usuarios_servicio (id_usuarios_servicio, id_usuarios, id_servicio) FROM stdin;
    public          postgres    false    224   ZO       7           0    0    citas_id_usuarios_servicio_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.citas_id_usuarios_servicio_seq', 1, false);
          public          postgres    false    225            8           0    0    hora_idhora_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.hora_idhora_seq', 18, true);
          public          postgres    false    227            9           0    0    servicio_id_servicio_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.servicio_id_servicio_seq', 6, true);
          public          postgres    false    220            :           0    0 "   tipo_usuarios_id_tipo_usuarios_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.tipo_usuarios_id_tipo_usuarios_seq', 3, true);
          public          postgres    false    215            ;           0    0    usuarios_id_tipo_usuarios_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.usuarios_id_tipo_usuarios_seq', 1, false);
          public          postgres    false    217            <           0    0 !   usuarios_servicio_id_servicio_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.usuarios_servicio_id_servicio_seq', 1, false);
          public          postgres    false    223            =           0    0 *   usuarios_servicio_id_usuarios_servicio_seq    SEQUENCE SET     X   SELECT pg_catalog.setval('public.usuarios_servicio_id_usuarios_servicio_seq', 6, true);
          public          postgres    false    222            �           2606    16923    citas citas_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_pkey PRIMARY KEY (id_citas);
 :   ALTER TABLE ONLY public.citas DROP CONSTRAINT citas_pkey;
       public            postgres    false    226            ~           2606    16877 "   representantes representantes_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.representantes
    ADD CONSTRAINT representantes_pkey PRIMARY KEY (id_representante);
 L   ALTER TABLE ONLY public.representantes DROP CONSTRAINT representantes_pkey;
       public            postgres    false    219            �           2606    16891    servicio servicio_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.servicio
    ADD CONSTRAINT servicio_pkey PRIMARY KEY (id_servicio);
 @   ALTER TABLE ONLY public.servicio DROP CONSTRAINT servicio_pkey;
       public            postgres    false    221            �           2606    16893    servicio servicio_servicio_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.servicio
    ADD CONSTRAINT servicio_servicio_key UNIQUE (servicio);
 H   ALTER TABLE ONLY public.servicio DROP CONSTRAINT servicio_servicio_key;
       public            postgres    false    221            v           2606    16852     tipo_usuarios tipo_usuarios_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.tipo_usuarios
    ADD CONSTRAINT tipo_usuarios_pkey PRIMARY KEY (id_tipo_usuarios);
 J   ALTER TABLE ONLY public.tipo_usuarios DROP CONSTRAINT tipo_usuarios_pkey;
       public            postgres    false    216            x           2606    16854 $   tipo_usuarios tipo_usuarios_tipo_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.tipo_usuarios
    ADD CONSTRAINT tipo_usuarios_tipo_key UNIQUE (tipo);
 N   ALTER TABLE ONLY public.tipo_usuarios DROP CONSTRAINT tipo_usuarios_tipo_key;
       public            postgres    false    216            z           2606    16865    usuarios usuarios_documento_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_documento_key UNIQUE (documento);
 I   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_documento_key;
       public            postgres    false    218            |           2606    16863    usuarios usuarios_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuarios);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    218            �           2606    16904 (   usuarios_servicio usuarios_servicio_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public.usuarios_servicio
    ADD CONSTRAINT usuarios_servicio_pkey PRIMARY KEY (id_usuarios_servicio);
 R   ALTER TABLE ONLY public.usuarios_servicio DROP CONSTRAINT usuarios_servicio_pkey;
       public            postgres    false    224            �           2606    16929    citas citas_id_usuarios_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_id_usuarios_fkey FOREIGN KEY (id_usuarios) REFERENCES public.usuarios(id_usuarios) ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.citas DROP CONSTRAINT citas_id_usuarios_fkey;
       public          postgres    false    4732    218    226            �           2606    16924 %   citas citas_id_usuarios_servicio_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_id_usuarios_servicio_fkey FOREIGN KEY (id_usuarios_servicio) REFERENCES public.usuarios_servicio(id_usuarios_servicio) ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.citas DROP CONSTRAINT citas_id_usuarios_servicio_fkey;
       public          postgres    false    226    224    4740            �           2606    16878 .   representantes representantes_id_usuarios_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.representantes
    ADD CONSTRAINT representantes_id_usuarios_fkey FOREIGN KEY (id_usuarios) REFERENCES public.usuarios(id_usuarios) ON DELETE CASCADE;
 X   ALTER TABLE ONLY public.representantes DROP CONSTRAINT representantes_id_usuarios_fkey;
       public          postgres    false    219    4732    218            �           2606    16866 '   usuarios usuarios_id_tipo_usuarios_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_id_tipo_usuarios_fkey FOREIGN KEY (id_tipo_usuarios) REFERENCES public.tipo_usuarios(id_tipo_usuarios) ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_id_tipo_usuarios_fkey;
       public          postgres    false    4726    216    218            �           2606    16910 4   usuarios_servicio usuarios_servicio_id_servicio_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios_servicio
    ADD CONSTRAINT usuarios_servicio_id_servicio_fkey FOREIGN KEY (id_servicio) REFERENCES public.servicio(id_servicio) ON DELETE CASCADE;
 ^   ALTER TABLE ONLY public.usuarios_servicio DROP CONSTRAINT usuarios_servicio_id_servicio_fkey;
       public          postgres    false    4736    221    224            �           2606    16905 4   usuarios_servicio usuarios_servicio_id_usuarios_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios_servicio
    ADD CONSTRAINT usuarios_servicio_id_usuarios_fkey FOREIGN KEY (id_usuarios) REFERENCES public.usuarios(id_usuarios) ON DELETE CASCADE;
 ^   ALTER TABLE ONLY public.usuarios_servicio DROP CONSTRAINT usuarios_servicio_id_usuarios_fkey;
       public          postgres    false    224    4732    218            '   �   x�ȹ�0 �Z��0 �23KR!����ɕ�e��=���C��U YMJ^,���*��
�ΐ�+0�>]s�h�p���d
۾�d���km�"��m�����	S"���6[>͖���c�o�*�      )   U   x����0���0\ܴ�0�ρ��%=L�73��2
�mjdL���o���?�3
$X]�����e\���l��~w�cP����x�             x������ � �      "   c   x�3�t��+.�)ITpO�K-J��2�N-�<�9O!%U!(T���e�霑ZX����{xeJfr>�	gAjJfbIP֔��(����q楦A91z\\\ �"         *   x�3�tL����2�HL�L�+I�2��=�2%39�+F��� �!	�         �  x���;n1Dc�]8`�?$3rdء3'=dS���0� Cwr�#�b�H�@v*�Q5�z���!�C�M����>���'�H�,�κuZ�!~����u���A��C�����>�E���¬V�̾�^<�R}�>`�ǣ ݗ���>���D,i��!Mm�O�K�������UE��\��([d�ARa��5Ϙ���rK5�t��d\�]����f�k��{�0�L#����n[��	��MWu�����;e����;Նsj̙�P��Y�γ�B%1.sȹ:��iG�"�BoK�X�g&�✣���#���r\aێ������I0&w�[/ӿ���?$�֔:��A=!�/4XC�V�B�:_�3B�F;�.#�4���S������ �D�G��ȏ��}���`SM�v�t9�Ax�^�t�����`��k�[!�����2`)B�Dt-a����Q�)�dƴ�fG�1���^�`      %   =   x����0�v!�A� ��X��w�O�%pP�:R�X��2�yJz�L�]� ��a�`�p     